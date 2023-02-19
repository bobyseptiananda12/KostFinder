import { Kos1, Kos2, Kos3, Kos4, Kos5, Kos6, Pria, Wanita, Campuran } from '../../assets'

export const dummyKost = [
    {
        id: 1,
        nama: "Kost Singgahsini Wisma Seruni Tipe A Wonocolo Surabaya",
        gambar: Kos1,
        kos: {
            id: 3,
            jenis: 'Campuran',
            gambar: Campuran,
        },
        harga: '1400000/bulan',
        listrik: 'Tidak Termasuk',
        ready: true
    },
    {
        id: 2,
        nama: "Kost Singgahsini Wisma Seruni Tipe B Wonocolo Surabaya",
        gambar: Kos2,
        kos: {
            id: 3,
            jenis: 'Campuran',
            gambar: Campuran,
        },
        harga: '1800000/bulan',
        listrik: 'Tidak Termasuk',
        ready: true
    },
    {
        id: 3,
        nama: "Kost Apik Ibu Yuli Wonokromo Surabaya",
        gambar: Kos3,
        kos: {
            id: 1,
            jenis: 'Pria',
            gambar: Pria,
        },
        harga: '664000/bulan',
        listrik: 'Termasuk',
        ready: true
    },
    {
        id: 4,
        nama: "Kost D Rainbow Gayungan Surabaya 415DR",
        gambar: Kos4,
        kos: {
            id: 3,
            jenis: 'Campuran',
            gambar: Campuran,
        },
        harga: '2200000/bulan',
        listrik: 'Tidak Termasuk',
        ready: true
    },
    {
        id: 5,
        nama: "Kost La Boende LAF Tipe B Gayungan Surabaya",
        gambar: Kos5,
        kos: {
            id: 3,
            jenis: 'Campuran',
            gambar: Campuran,
        },
        harga: '1400000/bulan',
        listrik: 'Tidak Termasuk',
        ready: true
    },
    {
        id: 6,
        nama: "Kost Omah Kita 2 Jambangan Surabaya",
        gambar: Kos6,
        kos: {
            id: 2,
            jenis: 'Wanita',
            gambar: Wanita,
        },
        harga: '1300000/bulan',
        listrik: 'Tidak Termasuk',
        ready: true
    },
]