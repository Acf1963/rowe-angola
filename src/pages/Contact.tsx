import { useState } from "react";
import { motion } from "motion/react";
import emailjs from "@emailjs/browser";

export default function ContactPage({ t }: any) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const sendEmail = async (e: any) => {
    e.preventDefault();
    setStatus("idle");

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          subject: form.subject,
          message: form.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <section className="w-full min-h-screen px-6 pt-30 pb-20 text-white">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center italic"
      >
        {t.contact.title}
      </motion.h1>

      <div className="mt-12 max-w-4xl mx-auto grid md:grid-cols-2 gap-10">
        
        {/* FORMULÁRIO */}
        <motion.form
          onSubmit={sendEmail}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-4 bg-black/20 p-6 rounded-xl shadow-lg"
        >
          <input
            type="text"
            name="name"
            placeholder={t.contact.name}
            value={form.name}
            onChange={handleChange}
            required
            className="p-3 rounded bg-white/10 border border-white/20 text-white"
          />

          <input
            type="email"
            name="email"
            placeholder={t.contact.email}
            value={form.email}
            onChange={handleChange}
            required
            className="p-3 rounded bg-white/10 border border-white/20 text-white"
          />

          <input
            type="text"
            name="subject"
            placeholder={t.contact.subject}
            value={form.subject}
            onChange={handleChange}
            required
            className="p-3 rounded bg-white/10 border border-white/20 text-white"
          />

          <textarea
            name="message"
            placeholder={t.contact.message}
            value={form.message}
            onChange={handleChange}
            required
            rows={5}
            className="p-3 rounded bg-white/10 border border-white/20 text-white"
          />

          <button
            type="submit"
            className="px-6 py-3 bg-red-600 hover:bg-red-700 rounded-lg font-semibold transition shadow-lg"
          >
            {t.contact.send}
          </button>

          {status === "success" && (
            <p className="text-green-400 mt-2">Mensagem enviada com sucesso!</p>
          )}

          {status === "error" && (
            <p className="text-red-400 mt-2">Erro ao enviar. Tente novamente.</p>
          )}
        </motion.form>

        {/* LOCALIZAÇÃO */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col gap-4"
        >
          <h2 className="text-xl font-bold italic">{t.contact.location}</h2>

          <iframe
            className="w-full h-64 rounded-xl shadow-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.789... (colocar o embed correto)"
            loading="lazy"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
}
