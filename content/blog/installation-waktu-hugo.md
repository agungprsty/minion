---
title: "Cara Instal Template IRIS di Hugo"
date: 2020-09-14T12:22:40+06:00
description : "Disini kamu bisa tau gimana Cara Instal Template IRIS Hugo"
type: post
image: images/blog/post-hugo.png
author: Agung Prasetyo
tags: ["Install","Programming"]
moods: ["Senang"]
view: 
- 2
---

## Instal template ini dengan mengikuti langkah-langkah sederhana berikut:

### STEP-1 : Install Hugo

Periksa tautan di bawah ini untuk menginstal hugo di komputer Kalian.
[hugo install documentation](https://gohugo.io/getting-started/installing/)

### STEP-2 : Buat proyek Kalian

Hugo memberikan perintah `new` untuk membuat situs web baru.

```
hugo new site <new_project>
```

### STEP-3 : Install tema
Jalankan perintah ini di Terminal kalian atau jika kalian User windows jalankan di CMD
```
hugo new site Iris-hugo
```
kemudian pergi ke folder tema di dalam folder Iris-hugo. 
Kalian juga dapat menggunakan perintah ini ```cd timer-hugo/themes``` untuk membuka folder ini.
Lalu jalankan perintahnya
```
git clone git@github.com:peaceiris/hugo-theme-iris.git
```

Alternatifnya, Kalian bisa [download the theme as .zip](https://raw.githubusercontent.com/peaceiris/hugo-theme-iris/master/scripts/setup.sh) file dan ekstrak di direktori `themes`.

Setelah itu Anda perlu pergi ke folder `Iris-hugo / exampleSite` dan menyalin atau memotong semua elemen, dan sekarang kembali ke folder root dan menempelkannya di sini.

buka command prompt atau Terminal lagi dan jalankan perintah `cd ../` untuk kembali ke folder root.

### STEP-4 : Host secara lokal

Luncurkan situs web secara lokal dengan menggunakan perintah berikut:

```
hugo server
```

Pergi ke `http://localhost:1313`

Kalian juga dapat memeriksa dokumentasi ini untuk menginstal template ini:
[disini](https://github.com/peaceiris/hugo-theme-irisa).
<!-- {{< youtube Ezd_STvPJbA >}} -->

### STEP-5 : Konfigurasi dasar

Saat membangun situs web, Anda dapat mengatur tema dengan menggunakan opsi `--theme`. Namun, kami menyarankan Anda mengubah file konfigurasi (`config.toml`) dan menyetel tema sebagai default.

```toml
# Ubah tema default yang akan digunakan saat membangun situs dengan Hugo
theme = "iris-hugo"
```

### STEP-6 : Buat halaman konten pertama Anda

```
hugo new blog/post-name.md
```

### STEP-7 : Dan bangun situs web

Saat situs Anda siap untuk diterapkan, jalankan perintah berikut:

```
hugo
```

```toml
# Anda juga dapat membuat versi minified dengan menggunakan perintah ini:
hugo--minify
```

Folder **publik** akan dibuat, berisi semua konten dan aset statis untuk situs web Anda. Sekarang dapat digunakan di server web apa pun.

`Selesai`.

Demikian Blog tentang Cara Mengatur Waktu Hugo. Jangan ragu untuk berkomentar jika mengalami kesulitan.
Sekian dan semoga bermanfaat.