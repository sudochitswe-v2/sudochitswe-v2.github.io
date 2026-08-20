import ContactForm from '@/components/contact-form';

export default function Footer() {
  return (
    <footer id="contact" className="w-full bg-muted py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <ContactForm />
      </div>
      <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} Chit Swe. All rights reserved.</p>
      </div>
    </footer>
  );
}
