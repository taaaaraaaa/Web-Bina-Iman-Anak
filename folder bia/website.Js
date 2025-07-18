    import React from "react";
    import { Menu, Home, BookOpen, Calendar, Camera, UserPlus, Phone } from "lucide-react";

    export default function SekolahBinaIman() {
    return (
        <div className="bg-gradient-to-b from-blue-100 via-white to-pink-100 min-h-screen font-sans">
        
        {/* Navbar */}
        <nav className="flex justify-between items-center px-6 py-4 bg-white shadow-md sticky top-0 z-50">
            <div className="text-2xl font-bold text-blue-700">Bina Iman Anak</div>
            <div className="hidden md:flex gap-6 text-gray-700">
            <a href="#home" className="hover:text-blue-600 flex items-center gap-1"><Home size={18}/>Beranda</a>
            <a href="#tentang" className="hover:text-blue-600 flex items-center gap-1"><BookOpen size={18}/>Tentang</a>
            <a href="#program" className="hover:text-blue-600 flex items-center gap-1"><Calendar size={18}/>Program</a>
            <a href="#galeri" className="hover:text-blue-600 flex items-center gap-1"><Camera size={18}/>Galeri</a>
            <a href="#daftar" className="hover:text-blue-600 flex items-center gap-1"><UserPlus size={18}/>Daftar</a>
            <a href="#kontak" className="hover:text-blue-600 flex items-center gap-1"><Phone size={18}/>Kontak</a>
            </div>
            <Menu className="md:hidden" />
        </nav>

        {/* Hero Section */}
        <section id="home" className="flex flex-col items-center justify-center text-center py-20 bg-blue-50">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-800">Selamat Datang di Sekolah Bina Iman Anak</h1>
            <p className="mt-4 text-lg text-gray-700 max-w-xl">Tempat anak belajar dengan iman, kasih, dan pengetahuan yang kuat sejak dini.</p>
            <a href="#daftar" className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700">Daftar Sekarang</a>
        </section>

        {/* Tambahkan bagian lainnya seperti Program, Galeri, Kontak, dll */}
        </div>
    );
    }
        <script>
        const slider = document.getElementById('slider');
        let index = 0;
        const slides = slider.children;
        const total = slides.length;

        function updateSlider() {
            slider.style.transform = `translateX(-${index * 100}%)`;
        }

        function nextSlide() {
            index = (index + 1) % total;
            updateSlider();
        }

        function prevSlide() {
            index = (index - 1 + total) % total;
            updateSlider();
        }

        // Auto-slide every 4 seconds
        setInterval(nextSlide, 4000);
        </script>
