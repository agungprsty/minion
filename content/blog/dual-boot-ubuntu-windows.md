---
title: "Cara Dual Boot Ubuntu dan Windows 10"
date: 2020-07-16T12:29:40+06:00
description : "Disini kamu bisa tau gimana Cara Dual Boot Ubuntu dan Windows 10"
type: post
image: images/blog/post-3.png
author: Mochamad Boval
tags: ["Install","Programming"]
moods: ["Senang"]
---

Hai semuanya &#128075;, kali ini aku mau berbagi info bagaimana sih caranya `Dual Boot Ubuntu dan Windows 10`. Simak baik-baik yah. 

Untuk menggunakan Ubuntu kamu tidak perlu menghapus sistem operasi Windows yang sudah ada di komputer atau laptopmu. Dengan teknik ‘dual boot’, kamu bisa menyimpan Windows dan Ubuntu secara bersama di dalam satu Harddisk. Nantinya kamu hanya perlu memilih sistem operasi apa yang ingin digunakan setiap kali melakukan boot. Bulan April 2020 lalu Ubuntu merilis versi LTS terbaru dengan nama kode ``'Focal Fossa'``, yaitu **Ubuntu 20.04**. Sesuai labelnya yakni `LTS (Long Term Support)`, versi ini akan mendapat dukungan pembaruan, perbaikan, dan keamanan hingga 5 tahun. Untuk kamu yang baru ingin menggunakan Linux khususnya distro Ubuntu, versi ini merupakan pilihan yang tepat.

Namun, sebelum instal pastikan komputermu memenuhi persyaratan sistem minimum dari Ubuntu. Berikut adalah persyaratannya:
1. 2 GHz Dual Core Processor (64-bit)
2. 4 GB RAM
3. 25 GB ruang penyimpanan Harddisk
4. Resolusi layar 1024x768

Perlu diketahui juga bahwa panduan ini dikhususkan untuk komputer yang sudah mendukung arsitektur 64-bit namun masih menggunakan BIOS Legacy dan skema partisi Harddisk MBR (Master Boot Record). Untuk mengetahui apakah komputermu masih menggunakan BIOS Legacy dan skema partisi MBR, silakan baca pos ini dan pos ini.

###### info:
> _Jika komputermu hanya mendukung arsitektur 32-bit, kamu bisa mengikuti panduan dual boot LMDE atau Debian yang masih mendukung arsitektur tersebut._

Setelah semua persyaratan di atas terpenuhi, kamu perlu menyiapkan perangkat dan mengunduh beberapa berkas serta aplikasi yang nantinya akan digunakan, yaitu:
1. Akses internet (opsional, namun direkomendasikan)
2. [Berkas ISO Ubuntu 20.04 LTS](https://www.ubuntu.com/download/desktop)
3. [EasyBCD](https://neosmart.net/EasyBCD/)
4. [Rufus](https://rufus.ie)
5. USB Flashdisk dengan kapasitas minimum 8 GB

Setelah semua yang dibutuhkan siap, sekarang waktunya menginstal Ubuntu. Omong-omong, cara yang saya gunakan ini akan memisahkan partisi antara Windows dan Ubuntu secara manual. Dengan begitu, data-data di dalam partisi Windows akan tetap aman dan proses hapus akan jadi lebih mudah jika nantinya kamu ingin menghapus Ubuntu.

###### perhatian:
> _Ikuti panduan ini dengan santai namun tetap teliti, karena kesalahan kecil dapat membuat data-data pribadimu hilang. Jika kamu memiliki media penyimpanan eksternal lain, ada baiknya untuk mencadangkan (backup) data-data pentingmu terlebih dahulu._

Berikut adalah tahapannya:

##### Tahap 1 - Membuat Partisi Kosong
Ketik `diskmgmt.msc` pada pencarian Windows untuk membuka `Disk Management`. Pada `partisi (D:)` klik kanan lalu pilih `Shrink Volume`.

[![image](https://mochamadboval.com/images/003/01-shrink-volume.png "Shrink volume")](https://mochamadboval.com/images/003/01-shrink-volume.png)

Masukan kapasitas yang diinginkan untuk partisi baru tersebut lalu klik Shrink. Di sini saya memasukan kapasitas sebesar 100 GB.

[![image](https://mochamadboval.com/images/003/02-menentukan-kapasitas-partisi.png "Menentukan kapasitas partisi")](https://mochamadboval.com/images/003/02-menentukan-kapasitas-partisi.png)

Setelah selesai akan tampil sebuah partisi kosong (unallocated) sesuai kapasitas yang kamu masukan. Biarkan saja karena kita akan mengaturnya nanti.

##### Tahap 2 - Membuat Media Instal di Flashdisk
Colok Flashdisk ke komputer lalu buka aplikasi `Rufus`. Setelah terbuka klik `Select` lalu pilih berkas `ISO Ubuntu` yang telah diunduh.

Biarkan semua pengaturan dalam keadaan *default*. Langsung saja klik `Start` untuk mulai proses.

[![image](https://mochamadboval.com/images/003/03-membuat-bootable-ubuntu.png "Membuat bootable ubuntu")](https://mochamadboval.com/images/003/03-membuat-bootable-ubuntu.png)

Setelah proses selesai kamu akan melihat Flashdisk berisi berkas-berkas dari ISO Ubuntu. Ini menandakan bahwa Flashdisk telah berubah menjadi media instal dan siap digunakan.

[![image](https://mochamadboval.com/images/003/04-berhasil-membuat-bootable-ubuntu.png "Berhasil membuat bootable ubuntu")](https://mochamadboval.com/images/003/04-berhasil-membuat-bootable-ubuntu.png)

##### Tahap 3 - Masuk ke Ubuntu Live USB
Setiap komputer memiliki cara yang berbeda untuk melakukan boot dari *Flashdisk*. Ada yang mengatur urutannya terlebih dahulu di BIOS dan ada juga yang memiliki menu khusus untuk memilih boot. Di laptop HP saya, saya menekan tombol **Esc** lalu menekan **F9** untuk membuka `Boot Device Options`. Setelah itu saya memilih opsi boot dari `Flashdisk`.

[![image](https://mochamadboval.com/images/003/05-memilih-boot-ke-ubuntu.jpg "Memilih bootable ke ubuntu")](https://mochamadboval.com/images/003/05-memilih-boot-ke-ubuntu.jpg)

Setelah berhasil boot dari `Flashdisk`, akan tampil *wizard* dengan opsi **‘Try Ubuntu’** dan **‘Install Ubuntu’**. Karena partisi kosong yang tadi dibuat belum diatur, maka di sini kita akan pilih opsi **Try Ubuntu**.

##### Tahap 4 - Mengatur Partisi
Sampai di tahap ini kamu sudah bisa menggunakan Ubuntu secara Live. Ada baiknya kamu memeriksa apakah semua perangkat (seperti monitor, keyboard, mouse, WiFi, Bluetooth, port USB, dsb) berfungsi sebagaimana mestinya. Jika kamu merasa semua perangkat sudah berfungsi dengan baik, silakan klik ikon `Menu` di kiri bawah lalu buka aplikasi `GParted` untuk mulai mengatur partisi.

Pilih partisi `‘Unallocated’` lalu klik ikon `Create New Partition` di kiri atas (atau bisa juga dengan klik kanan pada partisi lalu pilih `New`).

[![image](https://mochamadboval.com/images/003/06-memilih-partisi-unallocated.png "Memilih partisi unallocated")](https://mochamadboval.com/images/003/06-memilih-partisi-unallocated.png)

Ubah bagian *‘Create as’* menjadi `Extended Partition`. Beri nama ‘Ubuntu’ pada label lalu klik `Add`.

[![image](https://mochamadboval.com/images/003/07-mengatur-partisi-unallocated.png "mengatur partisi unallocated")](https://mochamadboval.com/images/003/07-mengatur-partisi-unallocated.png)

Setelah berubah menjadi partisi `‘Extended’`, sekarang kamu bisa membuat partisi baru di dalamnya. Lakukan cara yang sama seperti di atas untuk membuat 4 partisi baru.

Pada partisi pertama, isi kapasitas sebesar **2048 MB** (2 GB) lalu ubah bagian *‘File system’* menjadi **linux-swap** dan beri nama `‘Swap’` pada label. Partisi ini nantinya digunakan untuk membantu kinerja RAM.

[![image](https://mochamadboval.com/images/003/10-mengatur-partisi-root.png "mengatur partisi root")](https://mochamadboval.com/images/003/10-mengatur-partisi-root.png)

Pada partisi keempat, isi kapasitas yang masih tersisa lalu beri nama `‘Home’` pada label. Partisi ini nantinya digunakan untuk menyimpan berkas-berkas pribadimu.

[![image](https://mochamadboval.com/images/003/11-mengatur-partisi-home.png "mengatur partisi home")](https://mochamadboval.com/images/003/11-mengatur-partisi-home.png)

Inilah tampilan setelah kamu mengatur partisi. Klik ikon **Apply** (ceklis) untuk menyimpan pengaturan.

[![image](https://mochamadboval.com/images/003/12-partisi-setelah-diatur.png "partisi setelah diatur")](https://mochamadboval.com/images/003/12-partisi-setelah-diatur.png)

Inilah tampilan setelah kamu menyimpan pengaturan partisi. Perhatikan tulisan **/dev/sda** (terutama **sda6**) yang ada di dalam partisi `‘Extended’` karena akan penting nantinya.

##### Tahap 5 - Instal Ubuntu
Sebelum instal saya menyarankan untuk terhubung dengan internet terlebih dahulu agar proses instal ikut mengunduh pembaruan. Setelah terhubung internet, klik `Install Ubuntu 20.04 LTS`.

Pilih bahasa yang ingin digunakan saat proses instal lalu klik `Continue`.

Pilih tata letak keyboard yang ingin digunakan lalu klik `Continue`.

Pilih `Normal Installation` dan ceklis kedua opsi yang ada lalu klik `Continue`.

[![image](https://mochamadboval.com/images/003/14-memilih-normal-installation.png "memilih normal installation")](https://mochamadboval.com/images/003/14-memilih-normal-installation.png)

Pada *‘Installation type’* pilih **Something Else** lalu klik **Continue**.

[![image](https://mochamadboval.com/images/003/15-memilih-something-else.png "memilih something else")](https://mochamadboval.com/images/003/15-memilih-something-else.png)

Di bagian ini fokus saja pada `sda6`, `sda7`, dan `sda8`.

[![image](https://mochamadboval.com/images/003/16-installation-type.png "installation type")](https://mochamadboval.com/images/003/16-installation-type.png)

Pada `/dev/sda6` klik **Change**. Ubah `‘Use as’` menjadi **Ext4**, ceklis **Format the Partition**, dan ubah `‘Mount point’ `menjadi **/boot** lalu klik **OK**.

[![image](https://mochamadboval.com/images/003/18-mengatur-partisi-root.png "mengatur partisi root")](https://mochamadboval.com/images/003/18-mengatur-partisi-root.png)

Pada `/dev/sda8` klik **Change**. Ubah `‘Use as’` menjadi **Ext4**, ceklis **Format the Partition**, dan ubah `‘Mount point’` menjadi **/home** lalu klik **OK**.

[![image](https://mochamadboval.com/images/003/19-mengatur-partisi-home.png "mengatur partisi home")](https://mochamadboval.com/images/003/19-mengatur-partisi-home.png)

Ubah *‘Device for boot loader installation’* menjadi **/dev/sda6** (pastikan kembali bagian ini **/dev/sda6** karena kalau tidak diubah akan menimpa boot `Windows`-mu). Inilah tampilan *‘Installation type’* setelah kita atur. Setelah semua sudah benar klik **Install Now**.

[![image](https://mochamadboval.com/images/003/20-mengatur-boot-loader-ubuntu.png "mengatur boot loader ubuntu")](https://mochamadboval.com/images/003/20-mengatur-boot-loader-ubuntu.png)

Pilih kota sesuai zona waktumu lalu klik **Continue**.

Isi semua kolom yang tersedia lalu klik **Continue**.

[![image](https://mochamadboval.com/images/003/21-mengisi-user-dan-password-login.png "mengisi user dan password login")](https://mochamadboval.com/images/003/21-mengisi-user-dan-password-login.png)

Sekarang kamu hanya perlu menunggu proses instalasi selesai. Lama proses instal juga dipengaruhi oleh kecepatan internetmu karena proses instal ikut mengunduh pembaruan. Setelah proses instal selesai akan tampil dua opsi, yaitu `‘Continue Testing’` dan `‘Restart Now’`. Pilih **Restart Now** karena masih ada satu tahap lagi yang perlu dilakukan.

[![image](https://mochamadboval.com/images/003/22-menunggu-instalasi-selesai.png "menunggu instalasi selesai")](https://mochamadboval.com/images/003/22-menunggu-instalasi-selesai.png)

##### Tahap 6 - Menambahkan Boot Ubuntu
Saat restart kamu akan langsung masuk ke Windows tanpa ada opsi untuk memilih sistem operasi yang ingin digunakan. Tenang saja karena sebenarnya Ubuntu telah terinstal dan kamu hanya perlu menambahkan boot-nya. Silakan buka aplikasi **EasyBCD** untuk menambahkan boot Ubuntu.

Klik **Add New Entry** dan pada bagian *‘Operating Systems’* pilih **Linux/BSD**. Ubah bagian *‘Type’* menjadi **GRUB 2**, beri nama `‘Ubuntu 20.04’`, dan ubah bagian *‘Drive’* menjadi **Partition 5 (Linux - 1GiB)** lalu klik ikon **(+)** sekali saja.

[![image](https://mochamadboval.com/images/003/23-menambahkan-boot-ubuntu.png "menambahkan boot ubuntu")](https://mochamadboval.com/images/003/23-menambahkan-boot-ubuntu.png)

Klik **Edit Boot Menu** untuk memeriksa apakah boot Ubuntu sudah berhasil ditambahkan atau belum.

[![image](https://mochamadboval.com/images/003/24-berhasil-menambahkan-boot-ubuntu.png "berhasil menambahkan boot ubuntu")](https://mochamadboval.com/images/003/24-berhasil-menambahkan-boot-ubuntu.png)

Untuk benar-benar memastikan berhasil atau tidaknya silakan **restart** komputermu. Jika berhasil, kamu akan menemui tampilan di mana kamu bisa memilih sistem operasi yang ingin digunakan.

[![image](https://mochamadboval.com/images/003/26-grub-ubuntu.jpg "grub GNU")](https://mochamadboval.com/images/003/26-grub-ubuntu.jpg)

`Selesai`.

Demikian Blog tentang Cara Dual Boot Ubuntu dan Windows 10. Jangan ragu untuk berkomentar jika mengalami kesulitan.
Sekian dan semoga bermanfaat.

*sumber:[disini](https://mochamadboval.com/cara-dual-boot-ubuntu-dan-windows/).*