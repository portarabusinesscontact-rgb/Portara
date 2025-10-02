import ContactForm from "@/components/contact-form";
import styles from "./contact.module.css";

export default function ContactPage() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>Contact Portara</h1>
          <p className={styles.subtitle}>
            Questions, feedback, or partnership ideas? Drop us a message and we’ll get back to you.
          </p>
        </header>

        <div className={styles.panel}>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
