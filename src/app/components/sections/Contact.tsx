import { useState, type FormEvent } from "react";
import { ArrowUpRight } from "lucide-react";
import { CONTACT_INFO } from "@/app/data/portfolio";
import { FadeIn } from "@/app/components/shared/FadeIn";
import { SectionHeading } from "@/app/components/shared/SectionHeading";
import {
  sendContactEmail,
  validateContactForm,
  type ContactFormData,
  type ContactFormErrors,
} from "@/app/lib/emailjs";

const INITIAL_FORM: ContactFormData = {
  name: "",
  email: "",
  message: "",
};

type FormStatus = "idle" | "sending" | "success" | "error";

export function Contact() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [form, setForm] = useState<ContactFormData>(INITIAL_FORM);
  const [fieldErrors, setFieldErrors] = useState<ContactFormErrors>({});
  const [submitError, setSubmitError] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitError("");

    const errors = validateContactForm(form);
    setFieldErrors(errors);

    if (Object.keys(errors).length > 0) {
      return;
    }

    setStatus("sending");

    try {
      await sendContactEmail(form);
      setForm(INITIAL_FORM);
      setFieldErrors({});
      setStatus("success");
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.";
      console.error("EmailJS send failed:", error);
      setSubmitError(message);
      setStatus("error");
    }
  };

  const handleSendAnother = () => {
    setStatus("idle");
    setSubmitError("");
    setFieldErrors({});
  };

  const updateField = (field: keyof ContactFormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (fieldErrors[field]) {
      setFieldErrors((prev) => ({ ...prev, [field]: undefined }));
    }
    if (submitError) {
      setSubmitError("");
    }
  };

  return (
    <section
      id="contact"
      className="border-t border-border bg-card px-6 py-24 md:px-12 md:py-36"
    >
      <div className="mx-auto max-w-7xl">
        <FadeIn className="mb-16">
          <SectionHeading label="Contact" />
        </FadeIn>

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
          <FadeIn>
            <h2 className="font-display mb-8 text-5xl leading-none font-extrabold tracking-tight text-foreground uppercase">
              Let's work together.
            </h2>
            <p className="mb-10 text-base leading-relaxed font-light text-muted-foreground">
              If you have a project, a team, or just want to chat about software — I'd love
              to hear from you.
            </p>
            <div className="flex flex-col gap-4">
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="font-mono-label inline-flex items-center gap-3 text-sm text-accent transition-all duration-300 hover:gap-5"
              >
                {CONTACT_INFO.email} <ArrowUpRight size={14} aria-hidden />
              </a>
              <a
                href={CONTACT_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="font-mono-label inline-flex items-center gap-3 text-sm text-muted-foreground transition-all duration-300 hover:gap-5 hover:text-accent"
              >
                linkedin.com/in/nikat-desta <ArrowUpRight size={14} aria-hidden />
              </a>
              <a
                href={CONTACT_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="font-mono-label inline-flex items-center gap-3 text-sm text-muted-foreground transition-all duration-300 hover:gap-5 hover:text-accent"
              >
                github.com/NkatDesta <ArrowUpRight size={14} aria-hidden />
              </a>
              <span className="font-mono-label mt-2 text-xs text-muted-foreground">
                {CONTACT_INFO.phone} · {CONTACT_INFO.location}
              </span>
            </div>
          </FadeIn>

          <FadeIn delay={100}>
            {status === "success" ? (
              <div className="flex h-full flex-col justify-center gap-4 border border-accent/30 bg-accent/5 p-8">
                <div className="flex items-center gap-4">
                  <div className="h-2 w-2 bg-accent" aria-hidden />
                  <span className="font-mono-label text-sm text-foreground">
                    Thank you! Your message has been sent successfully.
                  </span>
                </div>
                <button
                  type="button"
                  onClick={handleSendAnother}
                  className="font-mono-label self-start text-xs tracking-widest text-accent uppercase transition-colors duration-200 hover:text-foreground"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-6 border border-border bg-background p-6 md:p-8"
                noValidate
              >
                {(
                  [
                    { id: "name", label: "Name", type: "text", placeholder: "Your name" },
                    {
                      id: "email",
                      label: "Email",
                      type: "email",
                      placeholder: "you@company.com",
                    },
                  ] as const
                ).map((field) => (
                  <div key={field.id}>
                    <label
                      htmlFor={field.id}
                      className="font-mono-label mb-2 block text-xs tracking-widest text-muted-foreground uppercase"
                    >
                      {field.label}
                    </label>
                    <input
                      id={field.id}
                      name={field.id}
                      type={field.type}
                      placeholder={field.placeholder}
                      autoComplete={field.id === "email" ? "email" : "name"}
                      value={form[field.id]}
                      onChange={(e) => updateField(field.id, e.target.value)}
                      className="w-full border border-border bg-transparent px-4 py-3 text-sm text-foreground placeholder-muted-foreground transition-colors duration-200 focus:border-accent focus:outline-none"
                    />
                    {fieldErrors[field.id] && (
                      <p className="font-mono-label mt-2 text-xs text-destructive">
                        {fieldErrors[field.id]}
                      </p>
                    )}
                  </div>
                ))}

                <div>
                  <label
                    htmlFor="message"
                    className="font-mono-label mb-2 block text-xs tracking-widest text-muted-foreground uppercase"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="What are you working on?"
                    value={form.message}
                    onChange={(e) => updateField("message", e.target.value)}
                    className="w-full resize-none border border-border bg-transparent px-4 py-3 text-sm text-foreground placeholder-muted-foreground transition-colors duration-200 focus:border-accent focus:outline-none"
                  />
                  {fieldErrors.message && (
                    <p className="font-mono-label mt-2 text-xs text-destructive">
                      {fieldErrors.message}
                    </p>
                  )}
                </div>

                {submitError && (
                  <p className="font-mono-label text-xs text-destructive">
                    {submitError}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="font-mono-label flex items-center gap-3 self-start bg-accent px-8 py-4 text-xs font-medium tracking-widest text-primary-foreground uppercase transition-colors duration-200 hover:bg-foreground disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {status === "sending" ? "Sending..." : "Send Message"}{" "}
                  {status !== "sending" && <ArrowUpRight size={12} aria-hidden />}
                </button>
              </form>
            )}
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
