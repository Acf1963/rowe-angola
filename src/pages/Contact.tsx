import { useState } from "react";
import { motion } from "motion/react";
import emailjs from "@emailjs/browser";

export default function ContactPage({ t }: any) {
  if (!t || !t.contact) {
    return (
      <div className="text-white p-10 text-center">
        <h1 className="text-2xl font-bold">Erro ao carregar traduções.</h1>
      </div>
    );
  }

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
    <section className="w-full h-full px-6 pt-8 pb-0 text-white flex flex-col">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center italic"
      >
        {t.contact.title}
      </motion.h1>

      <div className="mt-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-14 flex-1 overflow-hidden">
        {/* FORMULÁRIO */}
        <motion.form
          onSubmit={sendEmail}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-3 bg-black/20 p-6 rounded-xl shadow-lg overflow-auto"
        >
          <input
            type="text"
            name="name"
            placeholder={t.contact.name}
            value={form.name}
            onChange={handleChange}
            required
            className="p-3 rounded bg-white/10 border border-white/20 text-white placeholder-white"
          />

          <input
            type="email"
            name="email"
            placeholder={t.contact.email}
            value={form.email}
            onChange={handleChange}
            required
            className="p-3 rounded bg-white/10 border border-white/20 text-white placeholder-white"
          />

          <input
            type="text"
            name="subject"
            placeholder={t.contact.subject}
            value={form.subject}
            onChange={handleChange}
            required
            className="p-3 rounded bg-white/10 border border-white/20 text-white placeholder-white"
          />

          <textarea
            name="message"
            placeholder={t.contact.message}
            value={form.message}
            onChange={handleChange}
            required
            rows={4}
            className="p-3 rounded bg-white/10 border border-white/20 text-white placeholder-white"
          />

          <button
            type="submit"
            className="px-6 py-3 bg-red-600 hover:bg-red-700 rounded-lg font-semibold transition shadow-lg"
          >
            {t.contact.send}
          </button>

          {status === "success" && (
            <p className="text-green-400 mt-1">Mensagem enviada com sucesso!</p>
          )}

          {status === "error" && (
            <p className="text-red-400 mt-1">Erro ao enviar mensagem.</p>
          )}
        </motion.form>

        {/* CARTÃO DE LOCALIZAÇÃO */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="bg-black/20 p-6 rounded-xl shadow-lg flex flex-col gap-3 overflow-auto"
        >
          <h2 className="text-xl font-bold italic">{t.contact.location}</h2>

          <iframe
            className="w-full h-48 rounded-lg shadow-md"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3970.0786500000003!2d13.408000!3d-9.010444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-PT!2sao!4v1710000000000"
          ></iframe>

          <div className="text-sm text-white/80">
            <p><strong>Endereço:</strong> Zango II, Luanda, Angola</p>
            <p><strong>Email:</strong> operacoes@roweangola.com</p>
            <p><strong>Telefone:</strong> +244 923 000 000</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
