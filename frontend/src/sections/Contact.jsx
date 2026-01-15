import { useState } from "react";

// Vite environment variables start with VITE_
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

const ContactForm = () => {
   const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState({ type: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setFeedback({ type: "", message: "" });
    try {
      const res = await fetch(`${API_URL}/api/createMessage`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          name: formData.name,
          email: formData.email, // Fixed typo
          message: formData.message,
        }),
      });

      const data = await res.json(); // Parse response

      if (!res.ok) {
        // Check if response was successful
        throw new Error(
          data.message || data.errors?.[0]?.msg || "Error sending message"
        );
      }

      setFeedback({ type: "success", message: data.message || "Sent!" });
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      setFeedback({
        type: "error",
        message: err.message || "Error sending message",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md space-y-3">
      <input
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
        required
        className="w-full p-2 border"
      />
      <input
        name="email"
        value={formData.email}
        onChange={handleChange}
        type="email"
        placeholder="Email"
        required
        className="w-full p-2 border"
      />
      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="Message"
        required
        className="w-full p-2 border"
      />
      <button
        type="submit"
        disabled={loading}
        className="px-4 py-2 bg-blue-600 text-white rounded"
      >
        {loading ? "Sending..." : "Send"}
      </button>

      {feedback.message && (
        <p
          className={
            feedback.type === "success" ? "text-green-600" : "text-red-600"
          }
        >
          {feedback.message}
        </p>
      )}
    </form>
  );
};

const Contact = () => (
  <section id="contact" className="p-8">
    <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
    <ContactForm />
  </section>
);

export default Contact;
