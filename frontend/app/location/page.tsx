export default function LocationPage() {
    return (
      <div className="max-w-3xl mx-auto px-4 py-10 text-white">
        <h1 className="text-3xl font-bold mb-4">Our Location</h1>
        <p className="mb-4">
          📍 Main Branch: Jl. Makanan Enak No. 123, Jakarta, Indonesia
        </p>
        <p className="mb-4">
          🕒 Open Hours: 10.00 - 22.00 WIB
        </p>
        <p className="mb-4">
          📞 Contact: +62 812-3456-7890
        </p>
        <iframe
          className="w-full h-64 mt-6"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126917.59016905186!2d106.68943196869888!3d-6.2297283601894655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e6f10101db%3A0x4d51b802c51cdb5a!2sJakarta!5e0!3m2!1sen!2sid!4v1686997123123!5m2!1sen!2sid"
          allowFullScreen
          loading="lazy"
        />
      </div>
    );
  }
  