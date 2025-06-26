import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  CheckCircle,
  Clock,
  Users,
  BookOpen,
  Video,
  Award,
  MessageSquare,
  Calendar,
  Star,
  ArrowRight,
  Play,
  Globe,
  ChevronDown,
} from "lucide-react";

const Index = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const testimonials = [
    {
      name: "Sansan Fajrian",
      role: "Back End Programmer",
      content:
        "Program ini membantu sekali, karena memang programnya sangat singkat, padat dan penuh dengan materi tentang bagaimana bercakap dalam berbahasa jepang.",
      rating: 5,
    },
    {
      name: "Muttafiah",
      role: "Web Developer",
      content:
        "Sensei yang ramah dan interaktif membuat setiap sesi belajar menjadi seru dan mudah dipahami. Programnya sangat membantu saya dalam meningkatkan kemampuan Bahasa Jepang.",
      rating: 5,
    },
    {
      name: "Teuku Muksal Mina",
      role: "Software Engineer",
      content:
        "Awalnya, saya sama sekali nggak ngerti bahasa Jepang, tapi karena terus dilatih ngobrol langsung dengan sensei yang serasa native, lama-lama jadi makin pede. Ditambah lagi weekly assessment yang bikin materi lebih gampang nempel.",
      rating: 5,
    },
    {
      name: "Sabril Prajudith Pangestu",
      role: "Back End Programmer",
      content:
        "Sebagai student yang bisa dibilang belajar Bahasa Jepang dari 0, program ini sangat membantu dalam akselerasi pemahaman Bahasa Jepang, yang mana diperlukan untuk persiapan tes JLPT sebagai syarat untuk bisa bekerja di Jepang.",
      rating: 5,
    },
    {
      name: "Tiara Murli Adila",
      role: "SPV Project Development Engineer",
      content:
        "Pelatihan ini sangat berkesan berkat kelas yang interaktif, mentor yang profesional, tim yang sigap, serta materi yang berfokus pada praktik percakapan, penyusunan kalimat, dan kosakata yang relevan dalam kehidupan sehari-hari.",
      rating: 5,
    },
  ];

  const courses = [
    {
      level: "N5",
      title: "N5 Acceleration Class/Bootcamp",
      description:
        "Belajar huruf, kosakata dasar, dan kalimat sederhana. Cocok untuk kamu yang belum pernah belajar bahasa Jepang sebelumnya.",
      duration: "6 minggu",
      price: "Rp 2.100.000",
      features: [
        "Huruf Hiragana & Katakana",
        "500+ Kosakata Dasar",
        "Pola Kalimat Sederhana",
        "Materi JLPT N5",
      ],
    },
    {
      level: "N4",
      title: "N4 Acceleration Class/Bootcamp",
      description:
        "Memperluas kosa kata, tata bahasa, dan kemampuan membaca. Cocok untuk kamu yang sudah memahami level N5 atau setara.",
      duration: "6 minggu",
      price: "Rp 2.100.000",
      features: [
        "1000+ Kosakata",
        "Tata Bahasa Menengah",
        "Kemampuan Membaca",
        "Persiapan JLPT N4",
      ],
    },
    {
      level: "N3",
      title: "N3 Acceleration Class/Bootcamp",
      description:
        "Fokus pada pemahaman teks yang lebih kompleks, tata bahasa tingkat menengah, serta kemampuan komunikasi formal. Cocok untuk kamu yang sudah menguasai level N4 atau setara.",
      duration: "14 minggu",
      price: "Rp 4.900.000",
      features: [
        "Teks Kompleks",
        "Tata Bahasa Lanjutan",
        "Komunikasi Formal",
        "Persiapan JLPT N3",
      ],
      popular: true,
    },
    {
      level: "Career",
      title: "Career Preparation Class/Bootcamp",
      description:
        "Pelatihan intensif untuk menghadapi proses rekrutmen kerja di Jepang, mulai dari pembuatan CV hingga simulasi interview.",
      duration: "4 minggu",
      price: "Rp 1.400.000",
      features: [
        "CV & Portfolio",
        "Interview Skills",
        "Business Japanese",
        "Networking Tips",
      ],
    },
  ];

  const benefits = [
    {
      icon: <Video className="h-6 w-6" />,
      title: "Kelas Live via Zoom + Akses Recording",
      description:
        "Belajar langsung bersama pengajar setiap minggu dan tetap bisa mengakses recording kapan saja, jadi kamu nggak akan tertinggal meski berhalangan hadir.",
    },
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Materi Sesuai Standar Sertifikasi",
      description:
        "Materi disusun mengikuti struktur ujian seperti NAT Test, JLPT, dan lainnya, sehingga kamu bisa belajar lebih terarah dan siap menghadapi sertifikasi.",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "24/7 Akses ke LMS (Learning Management System)",
      description:
        "Kamu akan mendapatkan akses ke platform belajar berisi materi, latihan, dan quiz yang bisa diakses kapan pun sesuai ritme belajarmu.",
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "Evaluasi Rutin oleh Pengajar",
      description:
        "Tiap minggu akan ada sesi evaluasi untuk mengukur progres belajarmu dan membantu fokus ke bagian yang masih perlu ditingkatkan.",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Student Success Support",
      description:
        "Selama program, kamu akan didampingi oleh tim student success agar proses belajarmu tetap lancar dan terarah.",
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Simulasi Try Out Ujian Sertifikasi",
      description:
        "Sesi simulasi ujian yang disusun menyerupai tes asli, agar kamu bisa membiasakan diri dan lebih siap saat menghadapi sertifikasi.",
    },
  ];

  const learningFlow = [
    {
      step: "01",
      title: "Live Sessions",
      description:
        "Bersama sensei berpengalaman (Senin - Rabu pukul 19.00 WIB - 22.00 WIB)",
      icon: <Video className="h-8 w-8" />,
    },
    {
      step: "02",
      title: "Speaking Practice",
      description:
        "Dengan sensei yang berkompeten setiap Kamis pukul 19.00 WIB - 22.00 WIB",
      icon: <MessageSquare className="h-8 w-8" />,
    },
    {
      step: "03",
      title: "Self-Learning di YES LMS",
      description: "Latihan Kanji, Vocab, Reading, Listening",
      icon: <BookOpen className="h-8 w-8" />,
    },
    {
      step: "04",
      title: "Weekly Knowledge Check",
      description:
        "Uji pemahamanmu setiap Jumat untuk memastikan materi yang sudah dipelajari",
      icon: <CheckCircle className="h-8 w-8" />,
    },
  ];

  const faqData = [
    {
      question: "Apakah saya harus mulai dari level N5?",
      answer:
        "Tidak. Kamu bisa langsung mulai dari level yang sesuai dengan kemampuanmu saat ini. Jika kamu sudah pernah belajar sebelumnya dan yakin berada di level N4 atau N3, kamu bisa langsung mendaftar ke kelas tersebut.",
    },
    {
      question: "Apakah program ini bisa diikuti oleh pemula total?",
      answer:
        "Bisa. Kelas N5 dirancang khusus untuk pemula yang belum pernah belajar bahasa Jepang sama sekali, termasuk yang belum bisa membaca huruf hiragana dan katakana.",
    },
    {
      question: "Kelas ini diselenggarakan secara online atau offline?",
      answer:
        "Seluruh kelas dilaksanakan secara online melalui Zoom, dengan jadwal tetap setiap minggunya dan rekaman yang bisa diakses kembali kapan pun.",
    },
    {
      question: "Bagaimana jika saya tidak bisa hadir di kelas live?",
      answer:
        "Tenang, setiap sesi akan direkam dan diunggah ke LMS. Kamu bisa menontonnya kapan saja, jadi tidak akan ketinggalan materi.",
    },
    {
      question: "Apakah saya akan mendapatkan sertifikat?",
      answer:
        "Ya, kamu akan mendapatkan sertifikat penyelesaian dari YES setelah menyelesaikan program sesuai dengan level yang diambil. Sertifikat ini bisa menjadi bukti resmi bahwa kamu telah mengikuti pelatihan intensif.",
    },
    {
      question:
        "Apakah kelas ini mempersiapkan saya untuk ujian resmi seperti JLPT, NAT Test, dan lainnya?",
      answer:
        "Ya. Materi dan latihan di program ini dirancang untuk mempersiapkan kamu menghadapi ujian sertifikasi seperti JLPT, NAT Test, atau yang lainnya.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">Y</span>
            </div>
            <span className="text-2xl font-heading font-bold text-secondary">
              YES.co.id
            </span>
          </div>
          <Button className="bg-primary hover:bg-primary/90">
            Coba Kelas Gratis
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-accent via-white to-blue-50 py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-secondary mb-6 leading-tight">
              Karyawan Sibuk? Lancar Bahasa Jepang Hanya{" "}
              <span className="text-primary">3 Jam/Hari</span>
            </h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Bersertifikat & Dibimbing Langsung oleh Sensei Profesional!
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Badge variant="secondary" className="px-4 py-2 text-base">
                <Video className="h-4 w-4 mr-2" />
                Online Live Sessions
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-base">
                <Users className="h-4 w-4 mr-2" />
                Experienced Sensei
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-base">
                <BookOpen className="h-4 w-4 mr-2" />
                Beginner Friendly
              </Badge>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-lg px-8 py-4"
              >
                <Play className="h-5 w-5 mr-2" />
                Coba Kelas Gratis Malam Ini!
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4">
                Lihat Program Lengkap
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-secondary mb-4">
              Kenapa Banyak yang Terhenti di Masalah Bahasa?
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Banyak profesional dan calon mahasiswa yang sebenarnya siap secara
              teknis dan akademis, tapi akhirnya gagal lanjut ke Jepang karena
              kendala bahasa:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="bg-white border-red-100 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Sulit memahami dokumen & wawancara
                </h3>
              </CardContent>
            </Card>

            <Card className="bg-white border-red-100 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Gagal di tes bahasa tahap awal
                </h3>
              </CardContent>
            </Card>

            <Card className="bg-white border-red-100 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Kurang percaya diri saat komunikasi lisan
                </h3>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <p className="text-lg font-medium text-red-600 bg-red-50 inline-block px-6 py-3 rounded-lg">
              Tanpa skill bahasa yang cukup, peluang ke Jepang bisa tertunda
              lama.
            </p>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-secondary mb-4">
              Tantangan yang Kamu Alami Saat Ini
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Proses Belajar Lama",
                description:
                  "Kebanyakan kelas butuh waktu berbulan-bulan sampai kamu merasa cukup siap.",
              },
              {
                title: "Jadwal Belajar Tidak Fleksibel",
                description:
                  "Kelas yang padat dan tidak fleksibel justru membuat proses belajar menjadi beban.",
              },
              {
                title: "Kurikulum Tidak Terstruktur",
                description:
                  "Materi dan alur yang tidak jelas yang menyebabkan pembelajaran menjadi tidak efektif.",
              },
              {
                title: "Metode Pengajaran Tidak Efektif",
                description:
                  "Hanya fokus pada teori tanpa latihan aplikatif menyebabkan pembelajaran tidak maksimal.",
              },
              {
                title: "Materi Terbatas dan Sulit Diakses Ulang",
                description:
                  "Banyak program tidak menyediakan akses yang lengkap untuk materi pembelajaran.",
              },
              {
                title: "Tidak Fokus ke Sertifikasi",
                description:
                  "Banyak program hanya mengajarkan bahasa secara umum, tanpa arah yang jelas untuk persiapan ujian.",
              },
            ].map((challenge, index) => (
              <Card
                key={index}
                className="bg-white border-gray-200 hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-xl font-bold text-gray-600">
                      {index + 1}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {challenge.title}
                  </h3>
                  <p className="text-gray-600">{challenge.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-gradient-to-r from-primary/5 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-secondary mb-4">
              Solusi Belajar Bahasa Jepang yang Efisien, Fleksibel, dan Terarah
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Untuk menjawab semua tantangan tersebut, YES.co.id menghadirkan
              program belajar yang dirancang khusus agar kamu bisa mempersiapkan
              diri menghadapi ujian sertifikasi sesuai levelmu dengan cara yang
              lebih cepat dan terarah.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Clock className="h-8 w-8" />,
                title: "Durasi Belajar Singkat dan Terfokus",
                description:
                  "Setiap kelas dirancang untuk diselesaikan dalam waktu 6 minggu sampai 14 minggu, membuatmu lebih cepat mencapai level kemampuan yang kamu targetkan.",
              },
              {
                icon: <Calendar className="h-8 w-8" />,
                title: "Jadwal Fleksibel, Bisa Diikuti dari Mana Saja",
                description:
                  "Diselenggarakan secara online, sehingga kamu bisa mengikuti materi meskipun memiliki jadwal yang padat. Cocok untuk pekerja atau mahasiswa yang memiliki keterbatasan waktu.",
              },
              {
                icon: <BookOpen className="h-8 w-8" />,
                title: "Kurikulum Bertahap Sesuai Level",
                description:
                  "Materi disusun secara terstruktur berdasarkan level (N5, N4, N3). Kamu tidak akan merasa tertinggal karena alur pembelajaran sudah dirancang untuk memudahkan pemahaman secara bertahap.",
              },
              {
                icon: <Users className="h-8 w-8" />,
                title: "Pengajar Berpengalaman dan Aktif Mendampingi",
                description:
                  "Kamu akan belajar bersama pengajar yang berpengalaman. Tidak hanya mengajar, mereka juga memberikan evaluasi, koreksi, dan konsultasi secara berkala.",
              },
              {
                icon: <Globe className="h-8 w-8" />,
                title: "Akses Pembelajaran Lengkap & Praktis",
                description:
                  "Tiap peserta mendapatkan akses ke Learning Management System (LMS) yang berisi materi, latihan soal, rekaman kelas, dan progress tracker, semuanya dalam satu platform.",
              },
              {
                icon: <Award className="h-8 w-8" />,
                title: "Fokus pada Persiapan Sertifikasi Bahasa",
                description:
                  "Program kami dirancang khusus untuk membantu kamu siap menghadapi berbagai jenis tes kemampuan bahasa Jepang, seperti JLPT, NAT Test, JFT, dan lainnya.",
              },
            ].map((solution, index) => (
              <Card
                key={index}
                className="bg-white hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <div className="text-primary">{solution.icon}</div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    {solution.title}
                  </h3>
                  <p className="text-gray-600">{solution.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-secondary mb-4">
              Benefit yang Akan Kamu Dapatkan
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="bg-white hover:shadow-lg transition-shadow border-primary/20"
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <div className="text-primary">{benefit.icon}</div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Card className="bg-gradient-to-r from-primary to-red-600 text-white max-w-md mx-auto">
              <CardContent className="p-6 text-center">
                <Award className="h-12 w-12 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">
                  Sertifikat Penyelesaian Program*
                </h3>
                <p className="text-red-100">
                  Sertifikat resmi dari YES sebagai bukti bahwa kamu telah
                  menyelesaikan program belajar sesuai level yang diambil.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Learning Flow Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-secondary mb-4">
              Alur Pembelajaran Selama Program
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {learningFlow.map((step, index) => (
              <Card
                key={index}
                className="bg-white hover:shadow-lg transition-shadow relative"
              >
                <CardContent className="p-6 text-center">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">
                        {step.step}
                      </span>
                    </div>
                  </div>
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mt-4 mb-4">
                    <div className="text-primary">{step.icon}</div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-secondary mb-4">
              Testimoni Peserta
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="bg-white hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">
                    "{testimonial.content}"
                  </p>
                  <div className="border-t pt-4">
                    <p className="font-semibold text-gray-800">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-secondary mb-4">
              Pilih Kelas Bahasa Jepang Sesuai Level dan Targetmu
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto">
              Ikuti kelas akselerasi sesuai level yang kamu butuhkan. Semua
              kelas dilengkapi sesi live, akses ke LMS, latihan soal, dan
              evaluasi mingguan. Kamu bisa mulai dari level manapun, dan lanjut
              ke level berikutnya setelah siap.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {courses.map((course, index) => (
              <Card
                key={index}
                className={`bg-white hover:shadow-xl transition-all relative ${course.popular ? "ring-2 ring-primary scale-105" : ""}`}
              >
                {course.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary">
                    Paling Populer
                  </Badge>
                )}
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary">
                      {course.level}
                    </span>
                  </div>
                  <CardTitle className="text-xl mb-2">{course.title}</CardTitle>
                  <CardDescription className="text-sm">
                    {course.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="text-center mb-6">
                    <div className="text-3xl font-bold text-primary mb-1">
                      {course.price}
                    </div>
                    <div className="text-sm text-gray-600">
                      Durasi: {course.duration}
                    </div>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {course.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button className="w-full bg-primary hover:bg-primary/90">
                    Daftar Kelas {course.level}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-secondary mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqData.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-white border rounded-lg px-6"
                >
                  <AccordionTrigger className="text-left font-semibold text-gray-800 hover:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-heading font-bold mb-4">
            Siap Mulai Perjalanan Bahasa Jepangmu?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Bergabung dengan ribuan professionals yang sudah berhasil menguasai
            bahasa Jepang
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
              <Play className="h-5 w-5 mr-2" />
              Coba Kelas Gratis Malam Ini!
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary"
            >
              Konsultasi Program
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">Y</span>
              </div>
              <span className="text-2xl font-heading font-bold">YES.co.id</span>
            </div>
            <p className="text-gray-300 mb-6">
              Platform pembelajaran bahasa Jepang terdepan untuk profesional
              Indonesia
            </p>
            <div className="flex justify-center space-x-6 text-gray-300">
              <a href="#" className="hover:text-white transition-colors">
                Tentang Kami
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Program
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Testimoni
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Kontak
              </a>
            </div>
            <div className="border-t border-gray-700 mt-8 pt-8">
              <p className="text-gray-400 text-sm">
                © 2024 YES.co.id. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
