"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

const supabase = createClient(
  supabaseUrl,
  supabaseAnonKey
);

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  async function handleLogin(e) {
    e.preventDefault();

    setError("");
    setSuccess("");

    if (!email.trim() || !password) {
      setError("Email dan password wajib diisi.");
      return;
    }

    try {
      setLoading(true);

      const { data, error } =
        await supabase.auth.signInWithPassword({
          email: email.trim(),
          password,
        });

      if (error) {
        setError(
          error.message
            ?.toLowerCase()
            .includes("invalid login credentials")
            ? "Email atau password salah."
            : error.message
        );
        return;
      }

      if (!data.session) {
        setError("Login gagal. Session tidak terbentuk.");
        return;
      }

      setSuccess("Login berhasil. Membuka Command Center...");

      setTimeout(() => {
        window.location.href = "/";
      }, 500);
    } catch (err) {
      console.error(err);
      setError("Terjadi kesalahan saat login.");
    } finally {
      setLoading(false);
    }
  }

  async function handleForgotPassword() {
    setError("");
    setSuccess("");

    if (!email.trim()) {
      setError("Masukkan email terlebih dahulu.");
      return;
    }

    try {
      setLoading(true);

      const { error } =
        await supabase.auth.resetPasswordForEmail(
          email.trim(),
          {
            redirectTo:
              `${window.location.origin}/reset-password`,
          }
        );

      if (error) {
        setError(error.message);
        return;
      }

      setSuccess(
        "Link reset password sudah dikirim ke email kamu."
      );
    } catch (err) {
      console.error(err);
      setError(
        "Gagal mengirim link reset password."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="loginPage">

      <div className="backgroundShape shapeOne" />
      <div className="backgroundShape shapeTwo" />
      <div className="backgroundGrid" />

      <section className="loginShell">

        {/* LEFT */}

        <div className="loginVisual">

          <div className="visualGlow" />

          <div className="visualLogo">
            <div className="logoOrbit orbitOne" />
            <div className="logoOrbit orbitTwo" />

            <span>CX</span>

            <i />
          </div>

          <div className="visualContent">

            <div className="visualEyebrow">
              <span />
              LION PARCEL
            </div>

            <h1>
              CUSTOMER
              <br />
              <strong>EXPERIENCE</strong>
            </h1>

            <p>
              Internal Command Center
            </p>

            <div className="visualLine" />

            <div className="visualDescription">
              Centralized visibility for customer
              experience performance, operations,
              and service excellence.
            </div>

          </div>

          <div className="visualStats">

            <div>
              <strong>24/7</strong>
              <span>MONITORING</span>
            </div>

            <div>
              <strong>CX</strong>
              <span>COMMAND</span>
            </div>

            <div>
              <strong>LIVE</strong>
              <span>INSIGHT</span>
            </div>

          </div>

          <div className="visualFooter">
            Internal Use Only • Directorate CX
          </div>

        </div>

        {/* RIGHT */}

        <div className="loginPanel">

          <div className="loginPanelInner">

            <div className="mobileBrand">

              <div className="mobileLogo">
                CX
              </div>

              <div>
                <strong>
                  CUSTOMER EXPERIENCE
                </strong>

                <span>
                  Internal Command Center
                </span>
              </div>

            </div>

            <div className="loginHeader">

              <div className="welcomeBadge">
                <span />
                SECURE ACCESS
              </div>

              <h2>
                Welcome back.
              </h2>

              <p>
                Sign in to access your CX Command Center.
              </p>

            </div>

            <form
              onSubmit={handleLogin}
              className="loginForm"
            >

              {/* EMAIL */}

              <div className="fieldGroup">

                <label>
                  WORK EMAIL
                </label>

                <div className="inputWrapper">

                  <span className="inputIcon">
                    @
                  </span>

                  <input
                    type="email"
                    value={email}
                    onChange={(e) =>
                      setEmail(e.target.value)
                    }
                    placeholder="name@lionparcel.com"
                    autoComplete="email"
                    disabled={loading}
                  />

                </div>

              </div>

              {/* PASSWORD */}

              <div className="fieldGroup">

                <div className="labelRow">

                  <label>
                    PASSWORD
                  </label>

                  <button
                    type="button"
                    className="forgotBtn"
                    onClick={handleForgotPassword}
                    disabled={loading}
                  >
                    Forgot password?
                  </button>

                </div>

                <div className="inputWrapper">

                  <span className="inputIcon">
                    •••
                  </span>

                  <input
                    type={
                      showPassword
                        ? "text"
                        : "password"
                    }
                    value={password}
                    onChange={(e) =>
                      setPassword(e.target.value)
                    }
                    placeholder="Enter your password"
                    autoComplete="current-password"
                    disabled={loading}
                  />

                  <button
                    type="button"
                    className="passwordToggle"
                    onClick={() =>
                      setShowPassword(
                        !showPassword
                      )
                    }
                    disabled={loading}
                  >
                    {showPassword
                      ? "Hide"
                      : "Show"}
                  </button>

                </div>

              </div>

              {/* ERROR */}

              {error && (
                <div className="message errorMessage">
                  <span>!</span>
                  {error}
                </div>
              )}

              {/* SUCCESS */}

              {success && (
                <div className="message successMessage">
                  <span>✓</span>
                  {success}
                </div>
              )}

              {/* LOGIN */}

              <button
                type="submit"
                className="loginButton"
                disabled={loading}
              >

                {loading ? (
                  <>
                    <span className="buttonSpinner" />
                    Signing in...
                  </>
                ) : (
                  <>
                    Sign In
                    <span>→</span>
                  </>
                )}

              </button>

              {/* SECURITY */}

              <div className="securityInfo">

                <div className="securityIcon">
                  ✓
                </div>

                <div>
                  <strong>
                    Secure internal access
                  </strong>

                  <span>
                    Your session is protected by
                    Supabase Authentication.
                  </span>
                </div>

              </div>

            </form>

            <div className="loginFooter">

              <span>
                © 2026 Lion Parcel
              </span>

              <span>
                Customer Experience
              </span>

            </div>

          </div>

        </div>

      </section>

      <style jsx global>{`

        @import url(
          'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap'
        );

        * {
          box-sizing: border-box;
        }

        html,
        body {
          margin: 0;
          padding: 0;
        }

        body {
          font-family:
            "Plus Jakarta Sans",
            Arial,
            sans-serif;

          background: #f3f4f6;
          color: #1e2125;
        }

        button,
        input {
          font-family: inherit;
        }

        .loginPage {
          min-height: 100vh;
          position: relative;

          display: flex;
          align-items: center;
          justify-content: center;

          overflow: hidden;
          padding: 30px;

          background:
            radial-gradient(
              circle at 10% 10%,
              rgba(226,27,35,.065),
              transparent 25%
            ),
            radial-gradient(
              circle at 90% 90%,
              rgba(0,0,0,.035),
              transparent 28%
            ),
            linear-gradient(
              135deg,
              #eef0f2 0%,
              #ffffff 48%,
              #f1f2f4 100%
            );
        }

        .backgroundShape {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
        }

        .shapeOne {
          width: 500px;
          height: 500px;
          left: -280px;
          top: -250px;

          border:
            1px solid
            rgba(226,27,35,.07);
        }

        .shapeTwo {
          width: 420px;
          height: 420px;
          right: -240px;
          bottom: -220px;

          border:
            1px solid
            rgba(0,0,0,.05);
        }

        .backgroundGrid {
          position: absolute;
          inset: 0;
          opacity: .16;

          background-image:
            linear-gradient(
              rgba(0,0,0,.035) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(0,0,0,.035) 1px,
              transparent 1px
            );

          background-size: 50px 50px;

          mask-image:
            linear-gradient(
              to bottom,
              transparent,
              black 30%,
              black 70%,
              transparent
            );
        }

        .loginShell {
          width: min(1080px, 100%);
          min-height: 650px;

          position: relative;
          z-index: 2;

          display: grid;
          grid-template-columns: 46% 54%;

          overflow: hidden;

          border:
            1px solid #dedfe2;

          border-radius: 24px;

          background: #fff;

          box-shadow:
            0 30px 80px
            rgba(20,20,20,.12);
        }

        .loginVisual {
          position: relative;
          overflow: hidden;

          display: flex;
          flex-direction: column;

          padding: 45px;

          background:
            linear-gradient(
              145deg,
              #fff 0%,
              #f8f8f9 46%,
              #f0f1f3 100%
            );

          border-right:
            1px solid #e7e8ea;
        }

        .visualGlow {
          position: absolute;

          width: 420px;
          height: 420px;

          right: -240px;
          top: 50px;

          border-radius: 50%;

          background:
            radial-gradient(
              circle,
              rgba(226,27,35,.12),
              rgba(226,27,35,.025) 40%,
              transparent 70%
            );
        }

        .visualLogo {
          width: 72px;
          height: 72px;

          position: relative;

          display: flex;
          align-items: center;
          justify-content: center;

          border-radius: 20px;

          background:
            linear-gradient(
              145deg,
              #fff,
              #f2f2f3
            );

          border:
            1px solid #dedfe1;

          box-shadow:
            0 14px 35px
            rgba(226,27,35,.13);
        }

        .visualLogo span {
          position: relative;
          z-index: 4;

          color: #e21b23;

          font-size: 21px;
          font-weight: 800;
          letter-spacing: -2px;
        }

        .logoOrbit {
          position: absolute;

          border:
            2px solid
            rgba(226,27,35,.25);

          border-radius: 50%;
        }

        .orbitOne {
          width: 61px;
          height: 27px;
          transform: rotate(-30deg);
        }

        .orbitTwo {
          width: 40px;
          height: 57px;
          transform: rotate(37deg);
        }

        .visualLogo i {
          position: absolute;

          width: 6px;
          height: 6px;

          right: 10px;
          top: 12px;

          border-radius: 50%;

          background: #e21b23;

          box-shadow:
            0 0 0 5px
            rgba(226,27,35,.08);
        }

        .visualContent {
          position: relative;
          z-index: 3;

          margin-top: auto;
          margin-bottom: auto;
        }

        .visualEyebrow {
          display: flex;
          align-items: center;
          gap: 8px;

          color: #e21b23;

          font-size: 8px;
          font-weight: 800;
          letter-spacing: 2px;
        }

        .visualEyebrow span {
          width: 19px;
          height: 2px;

          background: #e21b23;
          border-radius: 5px;
        }

        .visualContent h1 {
          margin: 14px 0 4px;

          color: #202328;

          font-size: 39px;
          line-height: 1.08;

          letter-spacing: -2px;
          font-weight: 500;
        }

        .visualContent h1 strong {
          color: #e21b23;
          font-weight: 800;
        }

        .visualContent p {
          margin: 0;

          color: #777b82;

          font-size: 12px;
          font-weight: 600;
        }

        .visualLine {
          width: 45px;
          height: 2px;

          margin: 23px 0 15px;

          background: #e21b23;
          border-radius: 5px;
        }

        .visualDescription {
          max-width: 340px;

          color: #92969c;

          font-size: 9px;
          line-height: 1.8;
        }

        .visualStats {
          position: relative;
          z-index: 3;

          display: grid;
          grid-template-columns:
            repeat(3, 1fr);

          gap: 8px;

          padding-top: 25px;

          border-top:
            1px solid #e4e5e7;
        }

        .visualStats div {
          padding: 11px 10px;

          border:
            1px solid #e4e5e7;

          border-radius: 9px;

          background:
            rgba(255,255,255,.65);
        }

        .visualStats strong {
          display: block;

          color: #25282c;

          font-size: 13px;
          font-weight: 800;
        }

        .visualStats span {
          display: block;

          margin-top: 4px;

          color: #a1a4a9;

          font-size: 6px;
          letter-spacing: .7px;
          font-weight: 700;
        }

        .visualFooter {
          position: relative;
          z-index: 3;

          margin-top: 22px;

          color: #b0b3b8;
          font-size: 7px;
        }

        .loginPanel {
          display: flex;
          align-items: center;
          justify-content: center;

          background:
            linear-gradient(
              180deg,
              #fff,
              #fcfcfc
            );
        }

        .loginPanelInner {
          width: min(
            360px,
            calc(100% - 70px)
          );

          padding: 35px 0;
        }

        .mobileBrand {
          display: none;
        }

        .welcomeBadge {
          display: inline-flex;
          align-items: center;
          gap: 6px;

          padding: 6px 8px;

          border-radius: 6px;

          background: #fff1f2;
          color: #e21b23;

          font-size: 6px;
          font-weight: 800;
          letter-spacing: 1px;
        }

        .welcomeBadge span {
          width: 5px;
          height: 5px;

          border-radius: 50%;

          background: #e21b23;

          box-shadow:
            0 0 0 3px
            rgba(226,27,35,.08);
        }

        .loginHeader h2 {
          margin: 17px 0 5px;

          font-size: 29px;
          letter-spacing: -1.3px;
        }

        .loginHeader p {
          margin: 0;

          color: #9b9ea4;

          font-size: 9px;
          line-height: 1.6;
        }

        .loginForm {
          margin-top: 29px;
        }

        .fieldGroup {
          margin-bottom: 17px;
        }

        .fieldGroup label {
          display: block;

          margin-bottom: 7px;

          color: #666a70;

          font-size: 7px;
          font-weight: 800;
          letter-spacing: 1px;
        }

        .labelRow {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .labelRow label {
          margin-bottom: 7px;
        }

        .forgotBtn {
          border: 0;
          background: transparent;

          color: #e21b23;

          font-size: 7px;
          font-weight: 700;

          cursor: pointer;
          padding: 0;
        }

        .forgotBtn:disabled {
          opacity: .5;
          cursor: not-allowed;
        }

        .inputWrapper {
          height: 48px;

          display: flex;
          align-items: center;

          gap: 9px;

          padding: 0 12px;

          border:
            1px solid #e1e2e4;

          border-radius: 10px;

          background: #fff;

          transition:
            border-color .2s,
            box-shadow .2s;
        }

        .inputWrapper:focus-within {
          border-color:
            rgba(226,27,35,.45);

          box-shadow:
            0 0 0 3px
            rgba(226,27,35,.06);
        }

        .inputIcon {
          min-width: 20px;

          color: #a3a6ab;

          font-size: 9px;
          font-weight: 800;

          text-align: center;
        }

        .inputWrapper input {
          flex: 1;
          min-width: 0;

          height: 100%;

          border: 0;
          outline: 0;

          background: transparent;
          color: #25282c;

          font-size: 9px;
        }

        .inputWrapper input::placeholder {
          color: #b5b8bd;
        }

        .inputWrapper input:disabled {
          opacity: .6;
        }

        .passwordToggle {
          border: 0;
          background: transparent;

          color: #96999f;

          font-size: 7px;
          font-weight: 700;

          cursor: pointer;
        }

        .message {
          display: flex;
          align-items: flex-start;

          gap: 8px;

          padding: 10px;

          margin: 4px 0 14px;

          border-radius: 8px;

          font-size: 7.5px;
          line-height: 1.5;
        }

        .message span {
          width: 16px;
          height: 16px;

          flex-shrink: 0;

          display: flex;
          align-items: center;
          justify-content: center;

          border-radius: 50%;

          font-weight: 800;
        }

        .errorMessage {
          background: #fff1f2;
          color: #c91820;

          border:
            1px solid #ffdadd;
        }

        .errorMessage span {
          background: #e21b23;
          color: #fff;
        }

        .successMessage {
          background: #eefaf3;
          color: #17834a;

          border:
            1px solid #d6f0df;
        }

        .successMessage span {
          background: #1b9b57;
          color: #fff;
        }

        .loginButton {
          width: 100%;
          height: 49px;

          display: flex;
          align-items: center;
          justify-content: center;

          gap: 8px;

          border: 0;
          border-radius: 10px;

          background:
            linear-gradient(
              135deg,
              #eb343b,
              #d4161e
            );

          color: #fff;

          font-size: 9px;
          font-weight: 800;

          cursor: pointer;

          box-shadow:
            0 10px 25px
            rgba(226,27,35,.19);

          transition:
            transform .2s,
            box-shadow .2s;
        }

        .loginButton:hover:not(:disabled) {
          transform: translateY(-1px);

          box-shadow:
            0 13px 28px
            rgba(226,27,35,.24);
        }

        .loginButton:disabled {
          opacity: .75;
          cursor: not-allowed;
        }

        .loginButton > span:not(.buttonSpinner) {
          font-size: 15px;
          line-height: 0;
        }

        .buttonSpinner {
          width: 14px;
          height: 14px;

          border:
            2px solid
            rgba(255,255,255,.35);

          border-top-color: #fff;

          border-radius: 50%;

          animation:
            spin .7s linear infinite;
        }

        .securityInfo {
          display: flex;
          align-items: flex-start;

          gap: 9px;

          margin-top: 19px;
          padding: 12px;

          border-radius: 9px;

          background: #f7f7f8;

          border:
            1px solid #ececee;
        }

        .securityIcon {
          width: 23px;
          height: 23px;

          flex-shrink: 0;

          display: flex;
          align-items: center;
          justify-content: center;

          border-radius: 7px;

          background: #fff0f1;
          color: #e21b23;

          font-size: 8px;
          font-weight: 800;
        }

        .securityInfo strong {
          display: block;

          color: #686c72;

          font-size: 7.5px;
        }

        .securityInfo span {
          display: block;

          margin-top: 3px;

          color: #a4a7ac;

          font-size: 6.5px;
          line-height: 1.5;
        }

        .loginFooter {
          display: flex;
          justify-content: space-between;

          margin-top: 32px;
          padding-top: 17px;

          border-top:
            1px solid #eeeeef;

          color: #b0b3b8;

          font-size: 6.5px;
        }

        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }

        @media (max-width: 850px) {

          .loginPage {
            padding: 20px;
          }

          .loginShell {
            grid-template-columns: 1fr;

            max-width: 500px;
            min-height: auto;
          }

          .loginVisual {
            display: none;
          }

          .loginPanel {
            min-height: 650px;
          }

          .mobileBrand {
            display: flex;

            align-items: center;
            gap: 10px;

            margin-bottom: 42px;
          }

          .mobileLogo {
            width: 43px;
            height: 43px;

            display: flex;
            align-items: center;
            justify-content: center;

            border-radius: 12px;

            background:
              linear-gradient(
                135deg,
                #fff,
                #f1f1f2
              );

            border:
              1px solid #e0e1e3;

            color: #e21b23;

            font-size: 12px;
            font-weight: 800;

            box-shadow:
              0 8px 20px
              rgba(226,27,35,.1);
          }

          .mobileBrand strong {
            display: block;

            color: #282b2f;

            font-size: 8px;
            letter-spacing: .4px;
          }

          .mobileBrand span {
            display: block;

            margin-top: 3px;

            color: #a0a3a8;

            font-size: 6.5px;
          }
        }

        @media (max-width: 500px) {

          .loginPage {
            padding: 0;
          }

          .loginShell {
            min-height: 100vh;

            border: 0;
            border-radius: 0;

            box-shadow: none;
          }

          .loginPanel {
            min-height: 100vh;
          }

          .loginPanelInner {
            width: calc(100% - 42px);
          }
        }

      `}</style>

    </main>
  );
}
