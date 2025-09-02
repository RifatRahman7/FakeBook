import { useState } from "react";
import { FiMail, FiLock, FiEye, FiEyeOff, FiLogIn, FiCheckCircle } from "react-icons/fi";

const Login = () => {
  const [showPwd, setShowPwd] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ email: "", password: "", remember: true });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = "Enter a valid email.";
    if (!form.password || form.password.length < 6) e.password = "Password must be at least 6 characters.";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onSubmit = (ev) => {
    ev.preventDefault();
    if (!validate()) return;
    // Frontend-only mock login success
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="relative min-h-screen overflow-hidden bg-slate-950 text-slate-100 phibook-grid">
        <div className="phibook-vignette" />
        <div className="container mx-auto px-6 py-24 flex min-h-screen items-center justify-center">
          <div className="max-w-lg w-full rounded-3xl p-[1px] bg-gradient-to-r from-emerald-400/40 via-cyan-400/30 to-fuchsia-500/40 shadow-[0_0_60px_rgba(127,255,212,0.15)]">
            <div className="rounded-[calc(1.5rem-1px)] bg-slate-900/60 backdrop-blur-xl border border-white/10 p-10 text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-500/20 text-[#7FFFD4]">
                <FiCheckCircle size={28} />
              </div>
              <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-200 via-cyan-200 to-fuchsia-300">
                Welcome back to Fakebook
              </h2>
              <p className="mt-3 text-slate-300/90">
                You’re logged in (mock). Explore your feed and share moments.
              </p>
              <a
                href="/"
                className="mt-8 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500/90 via-cyan-500/90 to-fuchsia-500/90 px-6 py-3 font-semibold text-slate-900 hover:from-emerald-400 hover:via-cyan-400 hover:to-fuchsia-400 transition-all shadow-lg shadow-emerald-500/20"
              >
                Go to Home
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-slate-100 fakebook-grid">
      <div/>
      <div className="container mx-auto px-6 py-20 md:py-24">
        <div className="mx-auto max-w-xl">
          {/* Card with gradient border and glassmorphism */}
          <div className="rounded-3xl p-[1px] bg-gradient-to-r from-emerald-400/40 via-cyan-400/30 to-fuchsia-500/40 shadow-[0_0_60px_rgba(127,255,212,0.15)]">
            <div className="rounded-[calc(1.5rem-1px)] bg-slate-900/60 backdrop-blur-xl border border-white/10 p-8 md:p-10">
              <div className="text-center">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs text-slate-300/90">
                  <FiLogIn className="text-[#7FFFD4]" />
                  Sign in
                </span>
                <h2 className="mt-3 text-2xl md:text-3xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-emerald-200 via-cyan-200 to-fuchsia-300">
                  Log in to Fakebook
                </h2>
                <p className="mt-2 text-slate-300/90">Continue sharing your photos and videos in style.</p>
              </div>

              <form onSubmit={onSubmit} className="mt-8 space-y-5">
                {/* Email */}
                <div>
                  <label className="mb-2 block text-sm text-slate-300">Email</label>
                  <div className="relative">
                    <FiMail className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#7FFFD4]" />
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="Enter Your Email"
                      autoComplete="email"
                      className="w-full rounded-2xl border border-white/10 bg-white/5 px-12 py-3.5 text-slate-100 placeholder-slate-400/70 outline-none focus:ring-2 focus:ring-[#7FFFD4]/50"
                    />
                  </div>
                  {errors.email && <p className="mt-1 text-sm text-rose-400">{errors.email}</p>}
                </div>

                {/* Password */}
                <div>
                  <label className="mb-2 block text-sm text-slate-300">Password</label>
                  <div className="relative">
                    <FiLock className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#7FFFD4]" />
                    <input
                      type={showPwd ? "text" : "password"}
                      value={form.password}
                      onChange={(e) => setForm({ ...form, password: e.target.value })}
                      placeholder="••••••••"
                      autoComplete="current-password"
                      className="w-full rounded-2xl border border-white/10 bg-white/5 px-12 py-3.5 text-slate-100 placeholder-slate-400/70 outline-none focus:ring-2 focus:ring-[#7FFFD4]/50"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPwd((s) => !s)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-300/80 hover:text-[#7FFFD4]"
                      aria-label={showPwd ? "Hide password" : "Show password"}
                    >
                      {showPwd ? <FiEyeOff /> : <FiEye />}
                    </button>
                  </div>
                  {errors.password && <p className="mt-1 text-sm text-rose-400">{errors.password}</p>}
                </div>

                {/* Row: remember + forgot */}
                <div className="flex items-center justify-between text-sm">
                  <label className="inline-flex items-center gap-2 text-slate-300/90">
                    <input
                      type="checkbox"
                      checked={form.remember}
                      onChange={(e) => setForm({ ...form, remember: e.target.checked })}
                      className="h-4 w-4 rounded border-white/20 bg-white/10 text-emerald-400 focus:ring-[#7FFFD4]/30"
                    />
                    Remember me
                  </label>
                  <a href="#" className="text-[#7FFFD4] hover:underline">
                    Forgot password?
                  </a>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="mt-2 w-full rounded-2xl bg-gradient-to-r from-emerald-500/90 via-cyan-500/90 to-fuchsia-500/90 px-6 py-3.5 font-semibold text-slate-900 shadow-lg shadow-emerald-500/20 hover:from-emerald-400 hover:via-cyan-400 hover:to-fuchsia-400 transition"
                >
                  Sign in
                </button>

                <p className="text-center text-sm text-slate-300/90">
                  New here?{" "}
                  <a href="/register" className="text-[#7FFFD4] hover:underline">
                    Create an account
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;