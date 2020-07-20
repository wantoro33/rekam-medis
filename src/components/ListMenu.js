const listMenu = [
  {
    name: "master",
    label: "Master",
    items: [
      { name: "penyakit", label: "Penyakit", target: "/penyakit" },
      { name: "tindakan", label: "Tindakan", target: "/tindakan" },
      "divider",
      {
        name: "kelLayananLab",
        label: "Kelompok Layanan Lab",
        target: "/kellayanlab",
      },
      { name: "layananLab", label: "Layanan Lab", target: "/layananlab" },
      { name: "obat", label: "Obat", target: "/obat" },
      "divider",
      { name: "departemen", label: "Departemen", target: "/departemen" },
      { name: "employee", label: "Employee", target: "/employee" },
      {
        name: "keluargaKaryawan",
        label: "Keluarga Karyawan",
        target: "/keluargakaryawan",
      },
    ],
  },
  "divider",
  {
    name: "data",
    label: "Data",
    items: [
      { name: "rmPasien", label: "Rekam Medis Pasien", target: "/rmpasien" },
      {
        name: "inputHasilLab",
        label: "Input Pemeriksaan Hasil Lab",
        target: "/inputhasillab",
      },
    ],
  },
  "divider",
  {
    name: "stock",
    label: "Stock",
    items: [
      { name: "stockAwal", label: "Stok Awal", target: "/stockawal" },
      {
        name: "pakaiObatNonResep",
        label: "Pemakaian Obat Non Resep",
        target: "/pakaiobatnonresep",
      },
      { name: "tambahObat", label: "Penambahan Obat", target: "/tambahObat" },
      { name: "returObat", label: "Retur Obat", target: "/returobat" },
      { name: "obatRusak", label: "Obat Rusak / ED", target: "obatrusak" },
    ],
  },
  "divider",
  {
    name: "laporan",
    label: "Laporan",
    items: [
      {
        name: "riwayatRMPasien",
        label: "Riwayat Rekam Medis Pasien",
        target: "/riwayatrmpasien",
      },
      {
        name: "kunjunganPoli",
        label: "Kunjungan Poliklinik",
        target: "/kunjunganpoli",
      },
      {
        name: "penyakitTerbesar",
        label: "10 Penyakit Terbesar",
        target: "/penyakitterbesar",
      },
      { name: "stockObat", label: "Stok Obat", target: "/stockobat" },
    ],
  },
  "divider",
];

// const listMenu = [
//     { name: 'master', label: 'Master', target: '/master'},
//     { name: 'data', label: 'Data', target: '/data'},
//     { name: 'stock', label: 'Stock', target: '/stock'},
//     { name: 'laporan', label: 'Laporan', target: '/laporan'},
// ]

export default listMenu;
