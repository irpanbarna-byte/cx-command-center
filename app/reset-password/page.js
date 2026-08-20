"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export default function ResetPasswordPage() {
  const router = useRouter();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [checking, setChecking] = useState(true);

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    async function checkSession() {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (!session) {
        setError(
          "Link reset password tidak valid atau sudah expired."
        );
      }

      setChecking(false);
    }

    checkSession();
  }, []);

  async function handleReset(e) {
    e.preventDefault();

    setError("");
    setSuccess("");

    if (!password || !confirmPassword) {
      setError("Password dan konfirmasi password wajib diisi.");
      return;
    }

    if (password.length < 8) {
      setError("Password minimal 8 karakter.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Password tidak sama.");
      return;
    }

    try {
      setLoading(true);

      const { error } = await supabase.auth.updateUser({
        password,
      });

      if (error) {
        setError(error.message);
        return;
      }

      setSuccess(
        "Password berhasil diperbarui. Mengarahkan ke login..."
      );

      await supabase.auth.signOut();

      setTimeout(() => {
        router.replace("/login");
      }, 1500);
    } catch (err) {
      setError("Gagal memperbarui password.");
    } finally {
      setLoading(false);
    }
  }

  if (checking) {
    return (
      <main className="loading">
        <div className="loader" />
        <span>Checking secure session...</span>

        <style jsx>{`
          .loading {
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 15px;
            background: linear-gradient(
              135deg,
              #eeeeef,
              #ffffff
            );
            color: #92969c;
            font-family: Arial, sans-serif;
            font-size: 12px;
          }

          .loader {
            width: 25px;
            height: 25px;
            border: 3px solid #e5e5e6;
            border-top-color: #e21b23;
            border-radius: 50%;
            animation: spin .7s linear infinite;
          }

          @keyframes spin {
            to {
              transform: rotate(360deg);
            }
          }
        `}</style>
      </main>
    );
  }

  return (
    <main className="page">
      <div className="card">

        <div className="logo">
          CX
        </div>

        <div className="badge">
          SECURE ACCESS
        </div>

        <h1>
          Set new password
        </h1>

        <p className="subtitle">
          Create a new password for your
          CX Command Center account.
        </p>

        <form onSubmit={handleReset}>

          <label>
            NEW PASSWORD
          </label>

          <input
            type="password"
            placeholder="Minimum 8 characters"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            disabled={loading}
          />

          <label>
            CONFIRM PASSWORD
          </label>

          <input
            type="password"
            placeholder="Repeat your password"
            value={confirmPassword}
            onChange={(e) =>
              setConfirmPassword(e.target.value)
            }
            disabled={loading}
          />

          {error && (
            <div className="error">
              <b>!</b>
              {error}
            </div>
          )}

          {success && (
            <div className="success">
              <b>✓</b>
              {success}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
          >
            {loading
              ? "Updating..."
              : "Update Password →"}
          </button>

        </form>

        <div className="footer">
          CUSTOMER EXPERIENCE
          <span>
            Internal Command Center
          </span>
        </div>

      </div>

      <style jsx>{`

        * {
          box-sizing: border-box;
        }

        .page {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 25px;

          background:
            radial-gradient(
              circle at 15% 20%,
              rgba(226,27,35,.07),
              transparent 30%
            ),
            linear-gradient(
              135deg,
              #eeeeef,
              #ffffff 50%,
              #f1f2f3
            );

          font-family:
            Arial,
            sans-serif;
        }

        .card {
          width: 100%;
          max-width: 420px;
          padding: 42px;

          background: rgba(255,255,255,.96);

          border:
            1px solid #e2e3e5;

          border-radius: 22px;

          box-shadow:
            0 30px 70px
            rgba(0,0,0,.10);
        }

        .logo {
          width: 58px;
          height: 58px;

          display: flex;
          align-items: center;
          justify-content: center;

          margin-bottom: 24px;

          border-radius: 16px;

          color: #e21b23;

          font-size: 18px;
          font-weight: 800;

          background: #fff;

          border:
            1px solid #e1e2e4;

          box-shadow:
            0 10px 25px
            rgba(226,27,35,.10);
        }

        .badge {
          display: inline-block;

          padding:
            6px 9px;

          border-radius: 6px;

          background: #fff0f1;

          color: #e21b23;

          font-size: 7px;
          font-weight: 800;

          letter-spacing: 1px;
        }

        h1 {
          margin:
            18px 0 7px;

          color: #202328;

          font-size: 28px;

          letter-spacing: -1px;
        }

        .subtitle {
          margin: 0 0 28px;

          color: #999da3;

          font-size: 10px;

          line-height: 1.7;
        }

        label {
          display: block;

          margin:
            16px 0 7px;

          color: #696d73;

          font-size: 7px;

          font-weight: 800;

          letter-spacing: 1px;
        }

        input {
          width: 100%;
          height: 48px;

          padding:
            0 13px;

          border:
            1px solid #dedfe1;

          border-radius: 9px;

          outline: none;

          font-size: 10px;

          color: #25282c;
        }

        input:focus {
          border-color:
            rgba(226,27,35,.5);

          box-shadow:
            0 0 0 3px
            rgba(226,27,35,.06);
        }

        .error,
        .success {
          display: flex;
          gap: 8px;

          margin-top: 15px;

          padding: 10px;

          border-radius: 8px;

          font-size: 8px;

          line-height: 1.5;
        }

        .error {
          color: #c91820;
          background: #fff1f2;
          border: 1px solid #ffdadd;
        }

        .success {
          color: #17834a;
          background: #eefaf3;
          border: 1px solid #d6f0df;
        }

        .error b,
        .success b {
          width: 17px;
          height: 17px;

          flex-shrink: 0;

          display: flex;
          align-items: center;
          justify-content: center;

          border-radius: 50%;
        }

        .error b {
          color: white;
          background: #e21b23;
        }

        .success b {
          color: white;
          background: #1b9b57;
        }

        button {
          width: 100%;
          height: 49px;

          margin-top: 20px;

          border: 0;

          border-radius: 10px;

          color: white;

          background:
            linear-gradient(
              135deg,
              #eb343b,
              #d4161e
            );

          font-size: 9px;
          font-weight: 800;

          cursor: pointer;

          box-shadow:
            0 10px 25px
            rgba(226,27,35,.18);
        }

        button:disabled {
          opacity: .7;
          cursor: not-allowed;
        }

        .footer {
          margin-top: 28px;
          padding-top: 18px;

          border-top:
            1px solid #eeeeef;

          color: #b0b3b8;

          font-size: 7px;
          font-weight: 700;

          letter-spacing: .5px;
        }

        .footer span {
          display: block;

          margin-top: 5px;

          font-weight: 400;

          letter-spacing: 0;
        }

        @media (max-width: 500px) {
          .page {
            padding: 15px;
          }

          .card {
            padding: 30px 24px;
          }
        }

      `}</style>
    </main>
  );
}
