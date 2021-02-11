import React from "react";
import moment from "moment";
import axios from "axios";

import {
  Button,
  Container,
  Row,
  Col,
  Card,
  CardTitle,
  CardBody,
  EmptyLayout,
  FormGroup,
  Label,
  Input,
} from "../../../../components";
import { Formik, Field, Form } from "formik";

import { HeaderMain } from "../../../components/HeaderMain";
import { HeaderDemo } from "../../../components/HeaderDemo";

export class AddPengawasan extends React.Component {
  state = {
    showIsian: [],
  };

  render() {
    return (
      <React.Fragment>
        <Container>
          <HeaderMain title="Dokumen Pengawasan" className="mb-5 mt-4" />
          <Formik
            initialValues={{
bacacah_ahlipertama: "",
bacacah_ahlipertama_nip: "",
bacacah_alamat: "",
bacacah_bentuk: "",
bacacah_berat: "",
bacacah_jenis: "",
bacacah_jenispaket: "",
bacacah_jumlah: "",
bacacah_negara: "",
bacacah_nodok: "",
bacacah_nodok_kantor: "",
bacacah_nodok_tahun: "",
bacacah_nomorpaket: "",
bacacah_pencacah1: "",
bacacah_pencacah1_jabatan: "",
bacacah_pencacah1_nip: "",
bacacah_pencacah1_pangkat: "",
bacacah_pencacah2: "",
bacacah_pencacah2_jabatan: "",
bacacah_pencacah2_nip: "",
bacacah_pencacah2_pangkat: "",
bacacah_penerima: "",
bacacah_tgldok: "",
bacacah_warna: "",
bacontoh_alamat: "",
bacontoh_bentuk: "",
bacontoh_beratpaket: "",
bacontoh_contoh: "",
bacontoh_jenispaket: "",
bacontoh_jumlah: "",
bacontoh_lokasi: "",
bacontoh_mengetahui: "",
bacontoh_mengetahui_nip: "",
bacontoh_menguasai: "",
bacontoh_negara: "",
bacontoh_nodok: "",
bacontoh_nodok_kantor: "",
bacontoh_nodok_tahun: "",
bacontoh_nomorpaket: "",
bacontoh_nomorsprin: "",
bacontoh_pemilik: "",
bacontoh_pengambil1: "",
bacontoh_pengambil1_jabatan: "",
bacontoh_pengambil1_nip: "",
bacontoh_pengambil1_pangkat: "",
bacontoh_pengambil2: "",
bacontoh_pengambil2_jabatan: "",
bacontoh_pengambil2_nip: "",
bacontoh_pengambil2_pangkat: "",
bacontoh_saksi: "",
bacontoh_saksi_nip: "",
bacontoh_tgldok: "",
bacontoh_tglsprin: "",
bacontoh_tujuan: "",
bacontoh_warna: "",
bariksa_alamat: "",
bariksa_barang_berat: "",
bariksa_barang_jenis: "",
bariksa_barang_jumlah: "",
bariksa_barang_kemasan: "",
bariksa_barang_nomor: "",
bariksa_barang_pemilik: "",
bariksa_identitas: "",
bariksa_nodok: "",
bariksa_nodok_kantor: "",
bariksa_nodok_tahun: "",
bariksa_nomorsprin: "",
bariksa_pekerjaan: "",
bariksa_pemeriksa1: "",
bariksa_pemeriksa1_jabatan: "",
bariksa_pemeriksa1_nip: "",
bariksa_pemeriksa1_pangkat: "",
bariksa_pemeriksa2: "",
bariksa_pemeriksa2_jabatan: "",
bariksa_pemeriksa2_nip: "",
bariksa_pemeriksa2_pangkat: "",
bariksa_pengangkut: "",
bariksa_saksi: "",
bariksa_saksi_nip: "",
bariksa_tempatlahir: "",
bariksa_tgldok: "",
bariksa_tgllahir: "",
bariksa_tglsprin: "",
bast_alamat: "",
bast_bentuk: "",
bast_berat: "",
bast_jenis: "",
bast_jenispaket: "",
bast_jumlah: "",
bast_negaraasal: "",
bast_nodok: "",
bast_nodok_kantor: "",
bast_nodok_tahun: "",
bast_nomorpaket: "",
bast_penerima: "",
bast_petugas: "",
bast_petugas_jabatan: "",
bast_petugas_nip: "",
bast_petugas_pangkat: "",
bast_saksi1: "",
bast_saksi1_nip: "",
bast_saksi2: "",
bast_saksi2_nip: "",
bast_tgldok: "",
bast_warna: "",
li_ahli: "",
li_ahli_nip: "",
li_catatan: "",
li_disposisi: "",
li_isi_informasi: "",
li_nodok: "",
li_nodok_kantor: "",
li_nodok_tahun: "",
li_penyusun: "",
li_penyusun_nip: "",
li_sumber_external: false,
li_sumber_external_media: "",
li_sumber_external_nomor: "",
li_sumber_external_tgl: "",
li_sumber_external_tgldok: "",
li_sumber_internal: false,
li_sumber_internal_media: "",
li_sumber_internal_nomor: "",
li_sumber_internal_tgl: "",
li_sumber_internal_tgldok: "",
li_tgldisp: "",
li_tgldok: "",
li_tglsie: "",
li_tglsiedok: "",
li_tglsii: "",
li_tglsiidok: "",
lkai_ahli: "",
lkai_ahli_nip: "",
lkai_analis: "",
lkai_analis_nip: "",
lkai_catatan: "",
lkai_hasil: "",
lkai_kesimpulan: "",
lkai_nodok: "",
lkai_nodok_kantor: "",
lkai_nodok_tahun: "",
lkai_prosedur: "",
lkai_rekomendasi_informasi_text: "",
lkai_rekomendasi_lainnya_text: "",
lkai_tgldok: "",
lkai_tujuan: "",
lki_ahli: "",
lki_ahli_nip: "",
lki_catatan: "",
lki_disposisi: "",
lki_kesimpulan: "",
lki_nodok: "",
lki_nodok_kantor: "",
lki_nodok_tahun: "",
lki_penyusun: "",
lki_penyusun_nip: "",
lki_sumber: "",
lki_tgldisp: "",
lki_tgldok: "",
lki_validitas: "",
ltp_alamat: "",
ltp_bentuk: "",
ltp_catatan: "",
ltp_diberikan: "",
ltp_diberikan_alamat: "",
ltp_diberikan_jam: "",
ltp_dilaporkan: "",
ltp_jenis: "",
ltp_jumlah: "",
ltp_kantor: "",
ltp_kategori: "",
ltp_kemasan: "",
ltp_lokasi: "",
ltp_negara: "",
ltp_nodok: "",
ltp_nodok_kantor: "",
ltp_nodok_tahun: "",
ltp_nomor: "",
ltp_nomorsprin: "",
ltp_penerima: "",
ltp_pengirim: "",
ltp_penindak: "",
ltp_penindak_nip: "",
ltp_tempat: "",
ltp_tgl: "",
ltp_tglberi: "",
ltp_tgldok: "",
ltp_tglsprin: "",
ltp_uraian: "",
ltp_waktu: "",
ltp_warna: "",
nhi_alamatpenerima: "",
nhi_datalainnya: "",
nhi_indikasi: "",
nhi_jenisbarang: "",
nhi_jenispaket: "",
nhi_kepalaseksi: "",
nhi_kepalaseksi_nip: "",
nhi_kualifikasi: "",
nhi_negaraasal: "",
nhi_nodok: "",
nhi_nodok_kantor: "",
nhi_nodok_tahun: "",
nhi_nomorpaket: "",
nhi_penerima: "",
nhi_penerimapaket: "",
nhi_pengirimpaket: "",
nhi_sifat: "",
nhi_tgldok: "",
sbp_alasan: "",
sbp_barang_berat: "",
sbp_barang_jenis: "",
sbp_barang_jumlah: "",
sbp_barang_kemasan: "",
sbp_barang_negara: "",
sbp_barang_nomor: "",
sbp_barang_pemilik: "",
sbp_dugaan: "",
sbp_nodok: "",
sbp_nodok_kantor: "",
sbp_nodok_tahun: "",
sbp_nomorsprin: "",
sbp_pengangkut: "",
sbp_pengangkut_nip: "",
sbp_penindak1: "",
sbp_penindak1_nip: "",
sbp_penindak2: "",
sbp_penindak2_nip: "",
sbp_sarana_bendera: "",
sbp_sarana_kapal: "",
sbp_sarana_kapasitas: "",
sbp_sarana_merk: "",
sbp_sarana_nahkoda: "",
sbp_sarana_nama: "",
sbp_sarana_noreg: "",
sbp_sarana_novoy: "",
sbp_tanggal: "",
sbp_terjadi: "",
sbp_tgldok: "",
sbp_tglsprin: "",
sbp_tindakan: "",
sbp_uraian: "",
sbp_waktu_end: "",
sbp_waktu_start: "",
selected: "",
            }}
            onSubmit={(values, { setSubmitting }) => {
              var token = sessionStorage.getItem("token");
              const options = { headers: { Authorization: `Bearer ${token}` } };
              axios
                .post(
                  "http://localhost:8080/dokumen",
                  {
bacacah_ahlipertama: values.bacacah_ahlipertama,
bacacah_ahlipertama_nip: values.bacacah_ahlipertama_nip,
bacacah_alamat: values.bacacah_alamat,
bacacah_bentuk: values.bacacah_bentuk,
bacacah_berat: values.bacacah_berat,
bacacah_jenis: values.bacacah_jenis,
bacacah_jenispaket: values.bacacah_jenispaket,
bacacah_jumlah: values.bacacah_jumlah,
bacacah_negara: values.bacacah_negara,
bacacah_nodok: values.bacacah_nodok,
bacacah_nodok_kantor: values.bacacah_nodok_kantor,
bacacah_nodok_tahun: values.bacacah_nodok_tahun,
bacacah_nomorpaket: values.bacacah_nomorpaket,
bacacah_pencacah1: values.bacacah_pencacah1,
bacacah_pencacah1_jabatan: values.bacacah_pencacah1_jabatan,
bacacah_pencacah1_nip: values.bacacah_pencacah1_nip,
bacacah_pencacah1_pangkat: values.bacacah_pencacah1_pangkat,
bacacah_pencacah2: values.bacacah_pencacah2,
bacacah_pencacah2_jabatan: values.bacacah_pencacah2_jabatan,
bacacah_pencacah2_nip: values.bacacah_pencacah2_nip,
bacacah_pencacah2_pangkat: values.bacacah_pencacah2_pangkat,
bacacah_penerima: values.bacacah_penerima,
bacacah_tgldok: values.bacacah_tgldok,
bacacah_warna: values.bacacah_warna,
bacontoh_alamat: values.bacontoh_alamat,
bacontoh_bentuk: values.bacontoh_bentuk,
bacontoh_beratpaket: values.bacontoh_beratpaket,
bacontoh_contoh: values.bacontoh_contoh,
bacontoh_jenispaket: values.bacontoh_jenispaket,
bacontoh_jumlah: values.bacontoh_jumlah,
bacontoh_lokasi: values.bacontoh_lokasi,
bacontoh_mengetahui: values.bacontoh_mengetahui,
bacontoh_mengetahui_nip: values.bacontoh_mengetahui_nip,
bacontoh_menguasai: values.bacontoh_menguasai,
bacontoh_negara: values.bacontoh_negara,
bacontoh_nodok: values.bacontoh_nodok,
bacontoh_nodok_kantor: values.bacontoh_nodok_kantor,
bacontoh_nodok_tahun: values.bacontoh_nodok_tahun,
bacontoh_nomorpaket: values.bacontoh_nomorpaket,
bacontoh_nomorsprin: values.bacontoh_nomorsprin,
bacontoh_pemilik: values.bacontoh_pemilik,
bacontoh_pengambil1: values.bacontoh_pengambil1,
bacontoh_pengambil1_jabatan: values.bacontoh_pengambil1_jabatan,
bacontoh_pengambil1_nip: values.bacontoh_pengambil1_nip,
bacontoh_pengambil1_pangkat: values.bacontoh_pengambil1_pangkat,
bacontoh_pengambil2: values.bacontoh_pengambil2,
bacontoh_pengambil2_jabatan: values.bacontoh_pengambil2_jabatan,
bacontoh_pengambil2_nip: values.bacontoh_pengambil2_nip,
bacontoh_pengambil2_pangkat: values.bacontoh_pengambil2_pangkat,
bacontoh_saksi: values.bacontoh_saksi,
bacontoh_saksi_nip: values.bacontoh_saksi_nip,
bacontoh_tgldok: values.bacontoh_tgldok,
bacontoh_tglsprin: values.bacontoh_tglsprin,
bacontoh_tujuan: values.bacontoh_tujuan,
bacontoh_warna: values.bacontoh_warna,
bariksa_alamat: values.bariksa_alamat,
bariksa_barang_berat: values.bariksa_barang_berat,
bariksa_barang_jenis: values.bariksa_barang_jenis,
bariksa_barang_jumlah: values.bariksa_barang_jumlah,
bariksa_barang_kemasan: values.bariksa_barang_kemasan,
bariksa_barang_nomor: values.bariksa_barang_nomor,
bariksa_barang_pemilik: values.bariksa_barang_pemilik,
bariksa_identitas: values.bariksa_identitas,
bariksa_nodok: values.bariksa_nodok,
bariksa_nodok_kantor: values.bariksa_nodok_kantor,
bariksa_nodok_tahun: values.bariksa_nodok_tahun,
bariksa_nomorsprin: values.bariksa_nomorsprin,
bariksa_pekerjaan: values.bariksa_pekerjaan,
bariksa_pemeriksa1: values.bariksa_pemeriksa1,
bariksa_pemeriksa1_jabatan: values.bariksa_pemeriksa1_jabatan,
bariksa_pemeriksa1_nip: values.bariksa_pemeriksa1_nip,
bariksa_pemeriksa1_pangkat: values.bariksa_pemeriksa1_pangkat,
bariksa_pemeriksa2: values.bariksa_pemeriksa2,
bariksa_pemeriksa2_jabatan: values.bariksa_pemeriksa2_jabatan,
bariksa_pemeriksa2_nip: values.bariksa_pemeriksa2_nip,
bariksa_pemeriksa2_pangkat: values.bariksa_pemeriksa2_pangkat,
bariksa_pengangkut: values.bariksa_pengangkut,
bariksa_saksi: values.bariksa_saksi,
bariksa_saksi_nip: values.bariksa_saksi_nip,
bariksa_tempatlahir: values.bariksa_tempatlahir,
bariksa_tgldok: values.bariksa_tgldok,
bariksa_tgllahir: values.bariksa_tgllahir,
bariksa_tglsprin: values.bariksa_tglsprin,
bast_alamat: values.bast_alamat,
bast_bentuk: values.bast_bentuk,
bast_berat: values.bast_berat,
bast_jenis: values.bast_jenis,
bast_jenispaket: values.bast_jenispaket,
bast_jumlah: values.bast_jumlah,
bast_negaraasal: values.bast_negaraasal,
bast_nodok: values.bast_nodok,
bast_nodok_kantor: values.bast_nodok_kantor,
bast_nodok_tahun: values.bast_nodok_tahun,
bast_nomorpaket: values.bast_nomorpaket,
bast_penerima: values.bast_penerima,
bast_petugas: values.bast_petugas,
bast_petugas_jabatan: values.bast_petugas_jabatan,
bast_petugas_nip: values.bast_petugas_nip,
bast_petugas_pangkat: values.bast_petugas_pangkat,
bast_saksi1: values.bast_saksi1,
bast_saksi1_nip: values.bast_saksi1_nip,
bast_saksi2: values.bast_saksi2,
bast_saksi2_nip: values.bast_saksi2_nip,
bast_tgldok: values.bast_tgldok,
bast_warna: values.bast_warna,
li_ahli: values.li_ahli,
li_ahli_nip: values.li_ahli_nip,
li_catatan: values.li_catatan,
li_disposisi: values.li_disposisi,
li_isi_informasi: values.li_isi_informasi,
li_nodok: values.li_nodok,
li_nodok_kantor: values.li_nodok_kantor,
li_nodok_tahun: values.li_nodok_tahun,
li_penyusun: values.li_penyusun,
li_penyusun_nip: values.li_penyusun_nip,
li_sumber_external: values.li_sumber_external,
li_sumber_external_media: values.li_sumber_external_media,
li_sumber_external_nomor: values.li_sumber_external_nomor,
li_sumber_external_tgl: values.li_sumber_external_tgl,
li_sumber_external_tgldok: values.li_sumber_external_tgldok,
li_sumber_internal: values.li_sumber_internal,
li_sumber_internal_media: values.li_sumber_internal_media,
li_sumber_internal_nomor: values.li_sumber_internal_nomor,
li_sumber_internal_tgl: values.li_sumber_internal_tgl,
li_sumber_internal_tgldok: values.li_sumber_internal_tgldok,
li_tgldisp: values.li_tgldisp,
li_tgldok: values.li_tgldok,
li_tglsie: values.li_tglsie,
li_tglsiedok: values.li_tglsiedok,
li_tglsii: values.li_tglsii,
li_tglsiidok: values.li_tglsiidok,
lkai_ahli: values.lkai_ahli,
lkai_ahli_nip: values.lkai_ahli_nip,
lkai_analis: values.lkai_analis,
lkai_analis_nip: values.lkai_analis_nip,
lkai_catatan: values.lkai_catatan,
lkai_hasil: values.lkai_hasil,
lkai_kesimpulan: values.lkai_kesimpulan,
lkai_nodok: values.lkai_nodok,
lkai_nodok_kantor: values.lkai_nodok_kantor,
lkai_nodok_tahun: values.lkai_nodok_tahun,
lkai_prosedur: values.lkai_prosedur,
lkai_rekomendasi_informasi_text: values.lkai_rekomendasi_informasi_text,
lkai_rekomendasi_lainnya_text: values.lkai_rekomendasi_lainnya_text,
lkai_tgldok: values.lkai_tgldok,
lkai_tujuan: values.lkai_tujuan,
lki_ahli: values.lki_ahli,
lki_ahli_nip: values.lki_ahli_nip,
lki_catatan: values.lki_catatan,
lki_disposisi: values.lki_disposisi,
lki_kesimpulan: values.lki_kesimpulan,
lki_nodok: values.lki_nodok,
lki_nodok_kantor: values.lki_nodok_kantor,
lki_nodok_tahun: values.lki_nodok_tahun,
lki_penyusun: values.lki_penyusun,
lki_penyusun_nip: values.lki_penyusun_nip,
lki_sumber: values.lki_sumber,
lki_tgldisp: values.lki_tgldisp,
lki_tgldok: values.lki_tgldok,
lki_validitas: values.lki_validitas,
ltp_alamat: values.ltp_alamat,
ltp_bentuk: values.ltp_bentuk,
ltp_catatan: values.ltp_catatan,
ltp_diberikan: values.ltp_diberikan,
ltp_diberikan_alamat: values.ltp_diberikan_alamat,
ltp_diberikan_jam: values.ltp_diberikan_jam,
ltp_dilaporkan: values.ltp_dilaporkan,
ltp_jenis: values.ltp_jenis,
ltp_jumlah: values.ltp_jumlah,
ltp_kantor: values.ltp_kantor,
ltp_kategori: values.ltp_kategori,
ltp_kemasan: values.ltp_kemasan,
ltp_lokasi: values.ltp_lokasi,
ltp_negara: values.ltp_negara,
ltp_nodok: values.ltp_nodok,
ltp_nodok_kantor: values.ltp_nodok_kantor,
ltp_nodok_tahun: values.ltp_nodok_tahun,
ltp_nomor: values.ltp_nomor,
ltp_nomorsprin: values.ltp_nomorsprin,
ltp_penerima: values.ltp_penerima,
ltp_pengirim: values.ltp_pengirim,
ltp_penindak: values.ltp_penindak,
ltp_penindak_nip: values.ltp_penindak_nip,
ltp_tempat: values.ltp_tempat,
ltp_tgl: values.ltp_tgl,
ltp_tglberi: values.ltp_tglberi,
ltp_tgldok: values.ltp_tgldok,
ltp_tglsprin: values.ltp_tglsprin,
ltp_uraian: values.ltp_uraian,
ltp_waktu: values.ltp_waktu,
ltp_warna: values.ltp_warna,
nhi_alamatpenerima: values.nhi_alamatpenerima,
nhi_datalainnya: values.nhi_datalainnya,
nhi_indikasi: values.nhi_indikasi,
nhi_jenisbarang: values.nhi_jenisbarang,
nhi_jenispaket: values.nhi_jenispaket,
nhi_kepalaseksi: values.nhi_kepalaseksi,
nhi_kepalaseksi_nip: values.nhi_kepalaseksi_nip,
nhi_kualifikasi: values.nhi_kualifikasi,
nhi_negaraasal: values.nhi_negaraasal,
nhi_nodok: values.nhi_nodok,
nhi_nodok_kantor: values.nhi_nodok_kantor,
nhi_nodok_tahun: values.nhi_nodok_tahun,
nhi_nomorpaket: values.nhi_nomorpaket,
nhi_penerima: values.nhi_penerima,
nhi_penerimapaket: values.nhi_penerimapaket,
nhi_pengirimpaket: values.nhi_pengirimpaket,
nhi_sifat: values.nhi_sifat,
nhi_tgldok: values.nhi_tgldok,
sbp_alasan: values.sbp_alasan,
sbp_barang_berat: values.sbp_barang_berat,
sbp_barang_jenis: values.sbp_barang_jenis,
sbp_barang_jumlah: values.sbp_barang_jumlah,
sbp_barang_kemasan: values.sbp_barang_kemasan,
sbp_barang_negara: values.sbp_barang_negara,
sbp_barang_nomor: values.sbp_barang_nomor,
sbp_barang_pemilik: values.sbp_barang_pemilik,
sbp_dugaan: values.sbp_dugaan,
sbp_nodok: values.sbp_nodok,
sbp_nodok_kantor: values.sbp_nodok_kantor,
sbp_nodok_tahun: values.sbp_nodok_tahun,
sbp_nomorsprin: values.sbp_nomorsprin,
sbp_pengangkut: values.sbp_pengangkut,
sbp_pengangkut_nip: values.sbp_pengangkut_nip,
sbp_penindak1: values.sbp_penindak1,
sbp_penindak1_nip: values.sbp_penindak1_nip,
sbp_penindak2: values.sbp_penindak2,
sbp_penindak2_nip: values.sbp_penindak2_nip,
sbp_sarana_bendera: values.sbp_sarana_bendera,
sbp_sarana_kapal: values.sbp_sarana_kapal,
sbp_sarana_kapasitas: values.sbp_sarana_kapasitas,
sbp_sarana_merk: values.sbp_sarana_merk,
sbp_sarana_nahkoda: values.sbp_sarana_nahkoda,
sbp_sarana_nama: values.sbp_sarana_nama,
sbp_sarana_noreg: values.sbp_sarana_noreg,
sbp_sarana_novoy: values.sbp_sarana_novoy,
sbp_tanggal: values.sbp_tanggal,
sbp_terjadi: values.sbp_terjadi,
sbp_tgldok: values.sbp_tgldok,
sbp_tglsprin: values.sbp_tglsprin,
sbp_tindakan: values.sbp_tindakan,
sbp_uraian: values.sbp_uraian,
sbp_waktu_end: values.sbp_waktu_end,
sbp_waktu_start: values.sbp_waktu_start,
selected: values.selected,
                  },
                  options
                )
                .then((response) => {
                  // console.log(response.data.InsertedID);
                  // open page for print
                  // redirect back to list
                  window.open("/dokumen/pengawasan/print/"+response.data.InsertedID, "_blank");
                  this.props.history.push("/dokumen/pengawasan");
                })
                .catch((error) => {
                  console.log(error);
                });
            }}
          >
            {(props) => {
              const {
                values,
                touched,
                errors,
                isSubmitting,
                handleChange,
                handleBlur,
                handleSubmit,
              } = props;
              return (
                <div>
                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <Row>
                        <Col lg={12}>
                          <HeaderDemo
                            no={1}
                            title="Pilih Dokumen"
                            subTitle="Tipe dokumen dan dokumen yang akan dibuat"
                          />
                        </Col>
                      </Row>
                      {/* END Header 1 */}
                      {/* START Section 1 */}
                      <Row>
                        <Col lg={12}>
                          <Card className="mb-3">
                            <CardBody>
                              {/* START Form */}
                              <FormGroup>
                                <FormGroup check inline>
                                  <Label check>
                                    <Input
                                      type="radio"
                                      name="tipe_dokumen"
                                      value="biasa"
                                      defaultChecked
                                      onChange={this._handleChangeTipedok}
                                    />{" "}
                                    Biasa
                                  </Label>
                                </FormGroup>
                                <FormGroup check inline>
                                  <Label check>
                                    <Input
                                      type="radio"
                                      name="tipe_dokumen"
                                      value="npp"
                                      onChange={this._handleChangeTipedok}
                                    />{" "}
                                    NPP
                                  </Label>
                                </FormGroup>
                              </FormGroup>
                              <FormGroup id="biasa">
                                <FormGroup check inline>
                                  <Label check>
                                    <Field
                                      type="checkbox"
                                      name="selected"
                                      id="li"
                                      value="li"
                                      onChange={(e) => {
                                        props.handleChange(e);
                                        this._handleChangeDok(e);
                                      }}
                                    />{" "}
                                    LI
                                  </Label>
                                </FormGroup>
                                <FormGroup check inline>
                                  <Label check>
                                    <Field
                                      type="checkbox"
                                      name="selected"
                                      id="lki"
                                      value="lki"
                                      onChange={(e) => {
                                        this._handleChangeDok(e);
                                        props.handleChange(e);
                                      }}
                                    />{" "}
                                    LKI
                                  </Label>
                                </FormGroup>
                                <FormGroup check inline>
                                  <Label check>
                                    <Field
                                      type="checkbox"
                                      name="selected"
                                      id="lkai"
                                      value="lkai"
                                      onChange={(e) => {
                                        this._handleChangeDok(e);
                                        props.handleChange(e);
                                      }}
                                    />{" "}
                                    LKAI
                                  </Label>
                                </FormGroup>
                                <FormGroup check inline>
                                  <Label check>
                                  <Field
                                      type="checkbox"
                                      name="selected"
                                      id="nhi"
                                      value="nhi"
                                      onChange={(e) => {
                                        this._handleChangeDok(e);
                                        props.handleChange(e);
                                      }}
                                    />{" "}
                                    NHI
                                  </Label>
                                </FormGroup>
                                <FormGroup check inline>
                                  <Label check>
                                  <Field
                                      type="checkbox"
                                      name="selected"
                                      id="sbp"
                                      value="sbp"
                                      onChange={(e) => {
                                        this._handleChangeDok(e);
                                        props.handleChange(e);
                                      }}
                                    />{" "}
                                    SBP
                                  </Label>
                                </FormGroup>
                                <FormGroup check inline>
                                  <Label check>
                                  <Field
                                      type="checkbox"
                                      name="selected"
                                      id="bariksa"
                                      value="bariksa"
                                      onChange={(e) => {
                                        this._handleChangeDok(e);
                                        props.handleChange(e);
                                      }}
                                    />{" "}
                                    BA Pemeriksaan
                                  </Label>
                                </FormGroup>
                                <FormGroup check inline>
                                  <Label check>
                                  <Field
                                      type="checkbox"
                                      name="selected"
                                      id="bacontoh"
                                      value="bacontoh"
                                      onChange={(e) => {
                                        this._handleChangeDok(e);
                                        props.handleChange(e);
                                      }}
                                    />{" "}
                                    BA Contoh
                                  </Label>
                                </FormGroup>
                                <FormGroup check inline>
                                  <Label check>
                                  <Field
                                      type="checkbox"
                                      name="selected"
                                      id="ltp"
                                      value="ltp"
                                      onChange={(e) => {
                                        this._handleChangeDok(e);
                                        props.handleChange(e);
                                      }}
                                    />{" "}
                                    LTP
                                  </Label>
                                </FormGroup>
                                <FormGroup check inline>
                                  <Label check>
                                    <Field
                                      type="checkbox"
                                      name="selected"
                                      id="bast"
                                      value="bast"
                                      onChange={(e) => {
                                        this._handleChangeDok(e);
                                        props.handleChange(e);
                                      }}
                                    />{" "}
                                    BAST
                                  </Label>
                                </FormGroup>
                                <FormGroup check inline>
                                  <Label check>
                                    <Field
                                      type="checkbox"
                                      name="selected"
                                      id="bacacah"
                                      value="bacacah"
                                      onChange={(e) => {
                                        this._handleChangeDok(e);
                                        props.handleChange(e);
                                      }}
                                    />{" "}
                                    BA Cacah
                                  </Label>
                                </FormGroup>
                              </FormGroup>
                              <FormGroup id="npp" style={{ display: "none" }}>
                                <FormGroup check inline>
                                  <Label check>
                                    <Field
                                      type="checkbox"
                                      name="selected"
                                      id="lin"
                                      value="lin"
                                      onChange={(e) => {
                                        this._handleChangeDok(e);
                                        props.handleChange(e);
                                      }}
                                    />{" "}
                                    LI-N
                                  </Label>
                                </FormGroup>
                                <FormGroup check inline>
                                  <Label check>
                                    <Field
                                      type="checkbox"
                                      name="selected"
                                      id="lkin"
                                      value="lkin"
                                      onChange={(e) => {
                                        this._handleChangeDok(e);
                                        props.handleChange(e);
                                      }}
                                    />{" "}
                                    LKI-N
                                  </Label>
                                </FormGroup>
                                <FormGroup check inline>
                                  <Label check>
                                    <Field
                                      type="checkbox"
                                      name="selected"
                                      id="lkain"
                                      value="lkain"
                                      onChange={(e) => {
                                        this._handleChangeDok(e);
                                        props.handleChange(e);
                                      }}
                                    />{" "}
                                    LKAI-N
                                  </Label>
                                </FormGroup>
                                <FormGroup check inline>
                                  <Label check>
                                    <Field
                                      type="checkbox"
                                      name="selected"
                                      id="nhin"
                                      value="nhin"
                                      onChange={(e) => {
                                        this._handleChangeDok(e);
                                        props.handleChange(e);
                                      }}
                                    />{" "}
                                    NHI-N
                                  </Label>
                                </FormGroup>
                                <FormGroup check inline>
                                  <Label check>
                                    <Field
                                      type="checkbox"
                                      name="selected"
                                      id="sbpn"
                                      value="sbpn"
                                      onChange={(e) => {
                                        this._handleChangeDok(e);
                                        props.handleChange(e);
                                      }}
                                    />{" "}
                                    SBP-N
                                  </Label>
                                </FormGroup>
                                <FormGroup check inline>
                                  <Label check>
                                    <Field
                                      type="checkbox"
                                      name="selected"
                                      id="bariksan"
                                      value="bariksan"
                                      onChange={(e) => {
                                        this._handleChangeDok(e);
                                        props.handleChange(e);
                                      }}
                                    />{" "}
                                    BA Pemeriksaan-N
                                  </Label>
                                </FormGroup>
                                <FormGroup check inline>
                                  <Label check>
                                    <Field
                                      type="checkbox"
                                      name="selected"
                                      id="bacontohn"
                                      value="bacontohn"
                                      onChange={(e) => {
                                        this._handleChangeDok(e);
                                        props.handleChange(e);
                                      }}
                                    />{" "}
                                    BA Contoh-N
                                  </Label>
                                </FormGroup>
                                <FormGroup check inline>
                                  <Label check>
                                    <Field
                                      type="checkbox"
                                      name="selected"
                                      id="lptn"
                                      value="lptn"
                                      onChange={(e) => {
                                        this._handleChangeDok(e);
                                        props.handleChange(e);
                                      }}
                                    />{" "}
                                    LTP-N
                                  </Label>
                                </FormGroup>
                                <FormGroup check inline>
                                  <Label check>
                                    <Field
                                      type="checkbox"
                                      name="selected"
                                      id="bastn"
                                      value="bastn"
                                      onChange={(e) => {
                                        this._handleChangeDok(e);
                                        props.handleChange(e);
                                      }}
                                    />{" "}
                                    BAST-N
                                  </Label>
                                </FormGroup>
                                <FormGroup check inline>
                                  <Label check>
                                    <Field
                                      type="checkbox"
                                      name="selected"
                                      id="bacacahn"
                                      value="bacacahn"
                                      onChange={(e) => {
                                        this._handleChangeDok(e);
                                        props.handleChange(e);
                                      }}
                                    />{" "}
                                    BA Cacah-N
                                  </Label>
                                </FormGroup>
                              </FormGroup>
                            </CardBody>
                          </Card>
                        </Col>
                      </Row>

                      <Row>
                        <Col lg={12}>
                          <HeaderDemo
                            no={2}
                            title="Isian"
                            className="mt-5"
                            subTitle="Informasi Dokumen"
                          />
                        </Col>
                      </Row>
                      <Row>
                        <Col lg={12}>
                          <Card className="mb-3">
                            <CardBody>
                              <div id="g_li" style={{ display: "none" }}>
                                <CardTitle tag="h4">LEMBAR INFORMASI</CardTitle>
                                <FormGroup row>
                                  <Label sm={3}>
                                    Nomor
                                  </Label>
                                  <Col sm={9}>
                                    <div
                                      style={{
                                        width: "10%",
                                        display: "inline",
                                      }}
                                    >
                                      LI-
                                    </div>
                                    <Input
                                      type="text"
                                      name="li_nodok"
                                      id="li_nodok"
                                      placeholder="93"
                                      value={values.li_nodok}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      style={{
                                        width: "10%",
                                        display: "inline",
                                      }}
                                    />
                                    <Input
                                      type="text"
                                      name="li_nodok_kantor"
                                      id="li_nodok_kantor"
                                      placeholder="/WBC.08/KPP.MP.030201/"
                                      value={values.li_nodok_kantor}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      style={{
                                        width: "40%",
                                        display: "inline",
                                      }}
                                    />
                                    <Input
                                      type="text"
                                      name="li_nodok_tahun"
                                      id="li_nodok_tahun"
                                      value={values.li_nodok_tahun}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      placeholder="2020"
                                      style={{
                                        width: "13%",
                                        display: "inline",
                                      }}
                                    />
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Label sm={3}>Tanggal Dokumen</Label>
                                  <Col sm={9}>
                                    <Input
                                      type="text"
                                      name="li_tgldok"
                                      id="li_tgldok"
                                      value={
                                        values.li_tgldok
                                      }
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      placeholder=""
                                    />
                                  </Col>
                                </FormGroup>
                                <FormGroup>
                                  <Label for="li_sumber" sm={3}>
                                    Sumber Informasi
                                  </Label>
                                  <Col sm={9}>
                                    <FormGroup>
                                      <FormGroup check>
                                        <Label check>
                                          <Field
                                            type="checkbox"
                                            name="li_sumber_internal"
                                            onChange={(e) => {
                                              props.handleChange(e);
                                              this._handleChangeSIInternal(e);
                                            }}
                                          />{" "}
                                          Internal
                                        </Label>
                                        <Col
                                          id="li_sumber_internal"
                                          style={{ display: "none" }}
                                        >
                                          <FormGroup row>
                                            <Label
                                              for="li_sumber_internal_media"
                                              sm={4}
                                            >
                                              Media
                                            </Label>
                                            <Col sm={8}>
                                              <Input
                                                type="text"
                                                name="li_sumber_internal_media"
                                                id="li_sumber_internal_media"
                                                value={
                                                  values.li_sumber_internal_media
                                                }
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                placeholder=""
                                              />
                                            </Col>
                                          </FormGroup>
                                          <FormGroup row>
                                            <Label sm={4}>Tanggal Terima</Label>
                                            <Col sm={8}>
                                              <Input
                                                type="text"
                                                name="li_sumber_internal_tgl"
                                                id="li_sumber_internal_tgl"
                                                value={
                                                  values.li_sumber_internal_tgl
                                                }
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                placeholder=""
                                              />
                                            </Col>
                                          </FormGroup>
                                          <FormGroup row>
                                            <Label
                                              for="li_sumber_internal_nomor"
                                              sm={4}
                                            >
                                              Nomor Dokumen
                                            </Label>
                                            <Col sm={8}>
                                              <Input
                                                type="text"
                                                name="li_sumber_internal_nomor"
                                                id="li_sumber_internal_nomor"
                                                value={
                                                  values.li_sumber_internal_nomor
                                                }
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                placeholder=""
                                              />
                                            </Col>
                                          </FormGroup>
                                          <FormGroup row>
                                            <Label sm={4}>
                                              Tanggal Dokumen
                                            </Label>
                                            <Col sm={8}>
                                              <Input
                                                type="text"
                                                name="li_sumber_internal_tgldok"
                                                id="li_sumber_internal_tgldok"
                                                value={
                                                  values.li_sumber_internal_tgldok
                                                }
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                placeholder=""
                                              />
                                            </Col>
                                          </FormGroup>
                                        </Col>
                                      </FormGroup>
                                    </FormGroup>
                                    <FormGroup>
                                      <FormGroup check>
                                        <Label check>
                                        <Field
                                            type="checkbox"
                                            name="li_sumber_external"
                                            onChange={(e) => {
                                              props.handleChange(e);
                                              this._handleChangeSIExternal(e);
                                            }}
                                          />{" "}
                                          External
                                        </Label>
                                        <Col
                                          id="li_sumber_external"
                                          style={{ display: "none" }}
                                        >
                                          <FormGroup row>
                                            <Label
                                              for="li_sumber_external_media"
                                              sm={4}
                                            >
                                              Media
                                            </Label>
                                            <Col sm={8}>
                                              <Input
                                                type="text"
                                                name="li_sumber_external_media"
                                                id="li_sumber_external_media"
                                                value={
                                                  values.li_sumber_external_media
                                                }
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                placeholder=""
                                              />
                                            </Col>
                                          </FormGroup>
                                          <FormGroup row>
                                            <Label sm={4}>Tanggal Terima</Label>
                                            <Col sm={8}>
                                              <Input
                                                type="text"
                                                name="li_sumber_external_tgl"
                                                id="li_sumber_external_tgl"
                                                value={
                                                  values.li_sumber_external_tgl
                                                }
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                placeholder=""
                                              />
                                            </Col>
                                          </FormGroup>
                                          <FormGroup row>
                                            <Label
                                              for="li_sumber_external_nomor"
                                              sm={4}
                                            >
                                              Nomor Dokumen
                                            </Label>
                                            <Col sm={8}>
                                              <Input
                                                type="text"
                                                name="li_sumber_external_nomor"
                                                id="li_sumber_external_nomor"
                                                value={
                                                  values.li_sumber_external_nomor
                                                }
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                placeholder=""
                                              />
                                            </Col>
                                          </FormGroup>
                                          <FormGroup row>
                                            <Label sm={4}>
                                              Tanggal Dokumen
                                            </Label>
                                            <Col sm={8}>
                                              <Input
                                                type="text"
                                                name="li_sumber_external_tgldok"
                                                id="li_sumber_external_tgldok"
                                                value={
                                                  values.li_sumber_external_tgldok
                                                }
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                placeholder=""
                                              />
                                            </Col>
                                          </FormGroup>
                                        </Col>
                                      </FormGroup>
                                    </FormGroup>
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Label for="li_isi_informasi" sm={3}>
                                    Isi informasi
                                  </Label>
                                  <Col sm={9}>
                                    <Input
                                      type="textarea"
                                      name="li_isi_informasi"
                                      id="li_isi_informasi"
                                      value={values.li_isi_informasi}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      placeholder=""
                                    />
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Label for="li_disposisi" sm={3}>
                                    Disposisi
                                  </Label>
                                  <Col sm={9}>
                                    <Input
                                      type="text"
                                      name="li_disposisi"
                                      id="li_disposisi"
                                      value={values.li_disposisi}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      placeholder=""
                                    />
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Label sm={3}>Tanggal Disposisi</Label>
                                  <Col sm={9}>
                                    <Input
                                      type="text"
                                      name="li_tgldisp"
                                      id="li_tgldisp"
                                      value={values.li_tgldisp}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      placeholder=""
                                    />
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Label for="li_tindak" sm={3}>
                                    Tindak Lanjut
                                  </Label>
                                  <Col sm={9}>
                                    <FormGroup check inline>
                                      <Label check>
                                        <Input
                                          name="li_tindak_klasifikasi"
                                          type="radio"
                                          value={values.li_tindak_klasifikasi}
                                          onChange={handleChange}
                                          onBlur={handleBlur}
                                          defaultChecked
                                        />{" "}
                                        Klasifikasi
                                      </Label>
                                    </FormGroup>
                                    <FormGroup check inline>
                                      <Label check>
                                        <Input
                                          name="li_tindak_arsip"
                                          type="radio"
                                          value={values.li_tindak_arsip}
                                          onChange={handleChange}
                                          onBlur={handleBlur}
                                        />{" "}
                                        Arsip
                                      </Label>
                                    </FormGroup>
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Label for="li_catatan" sm={3}>
                                    Catatan
                                  </Label>
                                  <Col sm={9}>
                                    <Input
                                      type="textarea"
                                      name="li_catatan"
                                      id="li_catatan"
                                      value={values.li_catatan}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      placeholder=""
                                    />
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Label for="li_ahli" sm={3}>
                                    Ahli Pertama
                                  </Label>
                                  <Col sm={9}>
                                    <Input
                                      type="text"
                                      name="li_ahli"
                                      id="li_ahli"
                                      value={values.li_ahli}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      placeholder=""
                                    />
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Label for="li_ahli_nip" sm={3}>
                                    NIP Ahli Pertama
                                  </Label>
                                  <Col sm={9}>
                                    <Input
                                      type="text"
                                      name="li_ahli_nip"
                                      id="li_ahli_nip"
                                      value={values.li_ahli_nip}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      placeholder=""
                                    />
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Label for="li_penyusun" sm={3}>
                                    Penyusun
                                  </Label>
                                  <Col sm={9}>
                                    <Input
                                      type="text"
                                      name="li_penyusun"
                                      id="li_penyusun"
                                      value={values.li_penyusun}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      placeholder=""
                                    />
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Label for="li_penyusun_nip" sm={3}>
                                    NIP Penyusun
                                  </Label>
                                  <Col sm={9}>
                                    <Input
                                      type="text"
                                      name="li_penyusun_nip"
                                      id="li_penyusun_nip"
                                      value={values.li_penyusun_nip}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      placeholder=""
                                    />
                                  </Col>
                                </FormGroup>
                                <hr />
                              </div>
                              <div id="g_lki" style={{ display: "none" }}>
                                <CardTitle tag="h4">
                                  LEMBAR KLASIFIKASI INFORMASI
                                </CardTitle>
                                <FormGroup row>
                                  <Label for="lki_nodok" sm={3}>
                                    Nomor
                                  </Label>
                                  <Col sm={9}>
                                    <div
                                      style={{
                                        width: "10%",
                                        display: "inline",
                                      }}
                                    >
                                      LKI-
                                    </div>
                                    <Input
                                      type="text"
                                      name="lki_nodok"
                                      id="lki_nodok"
                                      value={values.lki_nodok}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      placeholder="93"
                                      style={{
                                        width: "10%",
                                        display: "inline",
                                      }}
                                    />
                                    <Input
                                      type="text"
                                      name="lki_nodok_kantor"
                                      id="lki_nodok_kantor"
                                      value={values.lki_nodok_kantor}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      placeholder="/WBC.08/KPP.MP.030201/"
                                      style={{
                                        width: "40%",
                                        display: "inline",
                                      }}
                                    />
                                    <Input
                                      type="text"
                                      name="lki_nodok_tahun"
                                      id="lki_nodok_tahun"
                                      value={values.lki_nodok_tahun}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      placeholder="2020"
                                      style={{
                                        width: "13%",
                                        display: "inline",
                                      }}
                                    />
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Label sm={3}>Tanggal Dokumen</Label>
                                  <Col sm={9}>
                                    <Input
                                      type="text"
                                      name="lki_tgldok"
                                      id="lki_tgldok"
                                      value={
                                        values.lki_tgldok
                                      }
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      placeholder=""
                                    />
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Label for="lki_sumber" sm={3}>
                                    Sumber & Validitas
                                  </Label>
                                  <Col sm={3}>
                                    <Input
                                      type="text"
                                      name="lki_sumber"
                                      id="lki_sumber"
                                      value={values.lki_sumber}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      placeholder="A"
                                    />
                                  </Col>
                                  <Col sm={3}>
                                    <Input
                                      type="text"
                                      name="lki_validitas"
                                      id="lki_validitas"
                                      placeholder="1"
                                    />
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Label for="lki_kesimpulan" sm={3}>
                                    Kesimpulan
                                  </Label>
                                  <Col sm={9}>
                                    <Input
                                      type="textarea"
                                      name="lki_kesimpulan"
                                      id="lki_kesimpulan"
                                      value={values.lki_kesimpulan}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      placeholder=""
                                    />
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Label for="lki_disposisi" sm={3}>
                                    Disposisi
                                  </Label>
                                  <Col sm={9}>
                                    <Input
                                      type="text"
                                      name="lki_disposisi"
                                      id="lki_disposisi"
                                      value={values.lki_disposisi}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      placeholder=""
                                    />
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Label sm={3}>Tanggal Disposisi</Label>
                                  <Col sm={9}>
                                    <Input
                                      type="text"
                                      name="lki_tgldisp"
                                      id="lki_tgldisp"
                                      value={
                                        values.lki_tgldisp
                                      }
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      placeholder=""
                                    />
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Label for="lki_tindak" sm={3}>
                                    Tindak Lanjut
                                  </Label>
                                  <Col sm={9}>
                                    <FormGroup check inline>
                                      <Label check>
                                        <Input
                                          name="lki_tindak_analisis"
                                          type="radio"
                                          value={values.lki_tindak_analisis}
                                          onChange={handleChange}
                                          onBlur={handleBlur}
                                          defaultChecked
                                        />{" "}
                                        Analisis
                                      </Label>
                                    </FormGroup>
                                    <FormGroup check inline>
                                      <Label check>
                                        <Input
                                          name="lki_tindak_arsip"
                                          type="radio"
                                          value={values.lki_tindak_arsip}
                                          onChange={handleChange}
                                          onBlur={handleBlur}
                                        />{" "}
                                        Arsip
                                      </Label>
                                    </FormGroup>
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Label for="lki_catatan" sm={3}>
                                    Catatan
                                  </Label>
                                  <Col sm={9}>
                                    <Input
                                      type="textarea"
                                      name="lki_catatan"
                                      id="lki_catatan"
                                      value={values.lki_catatan}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      placeholder=""
                                    />
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Label for="lki_ahli" sm={3}>
                                    Ahli Pertama
                                  </Label>
                                  <Col sm={9}>
                                    <Input
                                      type="text"
                                      name="lki_ahli"
                                      id="lki_ahli"
                                      value={values.lki_ahli}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      placeholder=""
                                    />
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Label for="lki_ahli_nip" sm={3}>
                                    NIP Ahli Pertama
                                  </Label>
                                  <Col sm={9}>
                                    <Input
                                      type="text"
                                      name="lki_ahli_nip"
                                      id="lki_ahli_nip"
                                      value={values.lki_ahli_nip}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      placeholder=""
                                    />
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Label for="lki_penyusun" sm={3}>
                                    Penyusun
                                  </Label>
                                  <Col sm={9}>
                                    <Input
                                      type="text"
                                      name="lki_penyusun"
                                      id="lki_penyusun"
                                      value={values.lki_penyusun}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      placeholder=""
                                    />
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Label for="lki_penyusun_nip" sm={3}>
                                    NIP Penyusun
                                  </Label>
                                  <Col sm={9}>
                                    <Input
                                      type="text"
                                      name="lki_penyusun_nip"
                                      id="lki_penyusun_nip"
                                      value={values.lki_penyusun_nip}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      placeholder=""
                                    />
                                  </Col>
                                </FormGroup>
                                <hr />
                              </div>
                              <div id="g_lkai" style={{ display: "none" }}>
                                <CardTitle tag="h4">
                                  LEMBAR KERJA ANALISIS INTELIJEN
                                </CardTitle>
                                <FormGroup row>
                                  <Label for="lkai_nodok" sm={3}>
                                    Nomor
                                  </Label>
                                  <Col sm={9}>
                                    <div
                                      style={{
                                        width: "10%",
                                        display: "inline",
                                      }}
                                    >
                                      LI-
                                    </div>
                                    <Input
                                      type="text"
                                      name="lkai_nodok"
                                      id="lkai_nodok"
                                      value={values.lkai_nodok}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      placeholder="93"
                                      style={{
                                        width: "10%",
                                        display: "inline",
                                      }}
                                    />
                                    <Input
                                      type="text"
                                      name="lkai_nodok_kantor"
                                      id="lkai_nodok_kantor"
                                      value={values.lkai_nodok_kantor}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      placeholder="/WBC.08/KPP.MP.030201/"
                                      style={{
                                        width: "40%",
                                        display: "inline",
                                      }}
                                    />
                                    <Input
                                      type="text"
                                      name="lkai_nodok_tahun"
                                      id="lkai_nodok_tahun"
                                      value={values.lkai_nodok_tahun}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      placeholder="2020"
                                      style={{
                                        width: "13%",
                                        display: "inline",
                                      }}
                                    />
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Label sm={3}>Tanggal Dokumen</Label>
                                  <Col sm={9}>
                                    <Input
                                      type="text"
                                      name="lkai_tgldok"
                                      id="lkai_tgldok"
                                      value={
                                        values.lkai_tgldok
                                      }
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      placeholder=""
                                    />
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Label for="lkai_prosedur" sm={3}>
                                    Prosedur Analisis
                                  </Label>
                                  <Col sm={9}>
                                    <Input
                                      type="textarea"
                                      name="lkai_prosedur"
                                      id="lkai_prosedur"
                                      value={values.lkai_prosedur}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      placeholder=""
                                    />
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Label for="lkai_hasil" sm={3}>
                                    Hasil Analisis
                                  </Label>
                                  <Col sm={9}>
                                    <Input
                                      type="textarea"
                                      name="lkai_hasil"
                                      id="lkai_hasil"
                                      value={values.lkai_hasil}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      placeholder=""
                                    />
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Label for="lkai_kesimpulan" sm={3}>
                                    Kesimpulan
                                  </Label>
                                  <Col sm={9}>
                                    <Input
                                      type="textarea"
                                      name="lkai_kesimpulan"
                                      id="lkai_kesimpulan"
                                      value={values.lkai_kesimpulan}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      placeholder=""
                                    />
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Label for="lkai_rekomendasi" sm={3}>
                                    Rekomendasi
                                  </Label>
                                  <Col sm={9}>
                                    <FormGroup check inline>
                                      <Label check>
                                        <Input
                                          name="lkai_rekomendasi_nhi"
                                          type="radio"
                                          value={values.lkai_rekomendasi_nhi}
                                          onChange={handleChange}
                                          onBlur={handleBlur}
                                          defaultChecked
                                        />{" "}
                                        NHI
                                      </Label>
                                    </FormGroup>
                                    <FormGroup check inline>
                                      <Label check>
                                        <Input
                                          name="lkai_rekomendasi_nip"
                                          type="radio"
                                          value={values.lkai_rekomendasi_nip}
                                          onChange={handleChange}
                                          onBlur={handleBlur}
                                        />{" "}
                                        NIP
                                      </Label>
                                    </FormGroup>
                                    <FormGroup check inline>
                                      <Label check>
                                        <Input
                                          name="lkai_rekomendasi_ni"
                                          type="radio"
                                          value={values.lkai_rekomendasi_ni}
                                          onChange={handleChange}
                                          onBlur={handleBlur}
                                        />{" "}
                                        NI
                                      </Label>
                                    </FormGroup>
                                    <FormGroup check inline>
                                      <Label check>
                                        <Input
                                          name="lkai_rekomendasi_lainnya"
                                          type="radio"
                                          value={
                                            values.lkai_rekomendasi_lainnya
                                          }
                                          onChange={handleChange}
                                          onBlur={handleBlur}
                                        />{" "}
                                        Rekomendasi Lainnya
                                      </Label>
                                      <Input
                                        type="textarea"
                                        name="lkai_rekomendasi_lainnya_text"
                                        id="lkai_rekomendasi_lainnya_text"
                                        value={
                                          values.lkai_rekomendasi_lainnya_text
                                        }
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        placeholder=""
                                      />
                                    </FormGroup>
                                    <FormGroup check inline>
                                      <Label check>
                                        <Input
                                          name="lkai_rekomendasi_informasi"
                                          type="radio"
                                          value={
                                            values.lkai_rekomendasi_informasi
                                          }
                                          onChange={handleChange}
                                          onBlur={handleBlur}
                                        />{" "}
                                        Informasi Lainnya
                                      </Label>
                                      <Input
                                        type="textarea"
                                        name="lkai_rekomendasi_informasi_text"
                                        id="lkai_rekomendasi_informasi_text"
                                        value={
                                          values.lkai_rekomendasi_informasi_text
                                        }
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        placeholder=""
                                      />
                                    </FormGroup>
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Label for="lkai_tujuan" sm={3}>
                                    Tujuan
                                  </Label>
                                  <Col sm={9}>
                                    <Input
                                      type="text"
                                      name="lkai_tujuan"
                                      id="lkai_tujuan"
                                      value={values.lkai_tujuan}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      placeholder=""
                                    />
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Label for="lkai_analis" sm={3}>
                                    Analis
                                  </Label>
                                  <Col sm={9}>
                                    <Input
                                      type="text"
                                      name="lkai_analis"
                                      id="lkai_analis"
                                      value={values.lkai_analis}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      placeholder=""
                                    />
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Label for="lkai_analis_nip" sm={3}>
                                    NIP Analis
                                  </Label>
                                  <Col sm={9}>
                                    <Input
                                      type="text"
                                      name="lkai_analis_nip"
                                      id="lkai_analis_nip"
                                      value={values.lkai_analis_nip}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      placeholder=""
                                    />
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Label for="lkai_keputusan" sm={3}>
                                    Keputusan
                                  </Label>
                                  <Col sm={9}>
                                    <FormGroup check inline>
                                      <Label check>
                                        <Input
                                          name="lkai_keputusan_setuju"
                                          type="radio"
                                          value={values.lkai_keputusan_setuju}
                                          onChange={handleChange}
                                          onBlur={handleBlur}
                                          defaultChecked
                                        />{" "}
                                        Setuju
                                      </Label>
                                    </FormGroup>
                                    <FormGroup check inline>
                                      <Label check>
                                        <Input
                                          name="lkai_keputusan_tidaksetuju"
                                          type="radio"
                                          value={
                                            values.lkai_keputusan_tidaksetuju
                                          }
                                          onChange={handleChange}
                                          onBlur={handleBlur}
                                        />{" "}
                                        Tidak Setuju
                                      </Label>
                                    </FormGroup>
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Label for="lkai_catatan" sm={3}>
                                    Catatan
                                  </Label>
                                  <Col sm={9}>
                                    <Input
                                      type="text"
                                      name="lkai_catatan"
                                      id="lkai_catatan"
                                      value={values.lkai_catatan}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      placeholder=""
                                    />
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Label for="lkai_ahli" sm={3}>
                                    Ahli Pertama
                                  </Label>
                                  <Col sm={9}>
                                    <Input
                                      type="text"
                                      name="lkai_ahli"
                                      id="lkai_ahli"
                                      value={values.lkai_ahli}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      placeholder=""
                                    />
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Label for="lkai_ahli_nip" sm={3}>
                                    NIP Ahli Pertama
                                  </Label>
                                  <Col sm={9}>
                                    <Input
                                      type="text"
                                      name="lkai_ahli_nip"
                                      id="lkai_ahli_nip"
                                      value={values.lkai_ahli_nip}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      placeholder=""
                                    />
                                  </Col>
                                </FormGroup>
                                <hr />
                              </div>
                              <div id="g_nhi" style={{ display: "none" }}>
                                <CardTitle tag="h4">
                                  NOTA HASIL INTELIJEN
                                </CardTitle>
                                <FormGroup row>
                                  <Label for="nhi_nodok" sm={3}>
                                    Nomor
                                  </Label>
                                  <Col sm={9}>
                                    <div
                                      style={{
                                        width: "10%",
                                        display: "inline",
                                      }}
                                    >
                                      NHI-
                                    </div>
                                    <Input
                                      type="text"
                                      name="nhi_nodok"
                                      id="nhi_nodok"
                                      value={values.nhi_nodok}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      placeholder="93"
                                      style={{
                                        width: "10%",
                                        display: "inline",
                                      }}
                                    />
                                    <Input
                                      type="text"
                                      name="nhi_nodok_kantor"
                                      id="nhi_nodok_kantor"
                                      value={values.nhi_nodok_kantor}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      placeholder="/WBC.08/KPP.MP.030201/"
                                      style={{
                                        width: "40%",
                                        display: "inline",
                                      }}
                                    />
                                    <Input
                                      type="text"
                                      name="nhi_nodok_tahun"
                                      id="nhi_nodok_tahun"
                                      value={values.nhi_nodok_tahun}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      placeholder="2020"
                                      style={{
                                        width: "13%",
                                        display: "inline",
                                      }}
                                    />
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Label sm={3}>Tanggal Dokumen</Label>
                                  <Col sm={9}>
                                    <Input
                                      type="text"
                                      name="nhi_tgldok"
                                      id="nhi_tgldok"
                                      value={
                                        values.nhi_tgldok
                                      }
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      placeholder=""
                                    />
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Label for="nhi_sifat" sm={3}>
                                    Sifat
                                  </Label>
                                  <Col sm={9}>
                                    <Input
                                      type="text"
                                      name="nhi_sifat"
                                      id="nhi_sifat"
                                      value={values.nhi_sifat}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      placeholder=""
                                    />
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Label for="nhi_kualifikasi" sm={3}>
                                    Kualifikasi
                                  </Label>
                                  <Col sm={9}>
                                    <Input
                                      type="text"
                                      name="nhi_kualifikasi"
                                      id="nhi_kualifikasi"
                                      value={values.nhi_kualifikasi}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      placeholder=""
                                    />
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Label for="nhi_penerima" sm={3}>
                                    Penerima
                                  </Label>
                                  <Col sm={9}>
                                    <Input
                                      type="text"
                                      name="nhi_penerima"
                                      id="nhi_penerima"
                                      value={values.nhi_penerima}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      placeholder=""
                                    />
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Label for="nhi_jenispaket" sm={3}>
                                    Jenis Paket
                                  </Label>
                                  <Col sm={9}>
                                    <Input
                                      type="text"
                                      name="nhi_jenispaket"
                                      id="nhi_jenispaket"
                                      value={values.nhi_jenispaket}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      placeholder=""
                                    />
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Label for="nhi_nomorpaket" sm={3}>
                                    Nomor Paket
                                  </Label>
                                  <Col sm={9}>
                                    <Input
                                      type="text"
                                      name="nhi_nomorpaket"
                                      id="nhi_nomorpaket"
                                      value={values.nhi_nomorpaket}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      placeholder=""
                                    />
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Label for="nhi_negaraasal" sm={3}>
                                    Negara Asal
                                  </Label>
                                  <Col sm={9}>
                                    <Input
                                      type="text"
                                      name="nhi_negaraasal"
                                      id="nhi_negaraasal"
                                      value={values.nhi_negaraasal}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      placeholder=""
                                    />
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Label for="nhi_pengirimpaket" sm={3}>
                                    Pengirim Paket
                                  </Label>
                                  <Col sm={9}>
                                    <Input
                                      type="text"
                                      name="nhi_pengirimpaket"
                                      id="nhi_pengirimpaket"
                                      value={values.nhi_pengirimpaket}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      placeholder=""
                                    />
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Label for="nhi_penerimapaket" sm={3}>
                                    Nama Penerima
                                  </Label>
                                  <Col sm={9}>
                                    <Input
                                      type="text"
                                      name="nhi_penerimapaket"
                                      id="nhi_penerimapaket"
                                      value={values.nhi_penerimapaket}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      placeholder=""
                                    />
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Label for="nhi_alamatpenerima" sm={3}>
                                    Alamat Penerima
                                  </Label>
                                  <Col sm={9}>
                                    <Input
                                      type="textarea"
                                      name="nhi_alamatpenerima"
                                      id="nhi_alamatpenerima"
                                      value={values.nhi_alamatpenerima}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      placeholder=""
                                    />
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Label for="nhi_jenisbarang" sm={3}>
                                    Jenis/Jumlah Barang
                                  </Label>
                                  <Col sm={9}>
                                    <Input
                                      type="text"
                                      name="nhi_jenisbarang"
                                      id="nhi_jenisbarang"
                                      value={values.nhi_jenisbarang}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      placeholder=""
                                    />
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Label for="nhi_datalainnya" sm={3}>
                                    Data Lainnya
                                  </Label>
                                  <Col sm={9}>
                                    <Input
                                      type="text"
                                      name="nhi_datalainnya"
                                      id="nhi_datalainnya"
                                      value={values.nhi_datalainnya}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      placeholder=""
                                    />
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Label for="nhi_indikasi" sm={3}>
                                    Indikasi
                                  </Label>
                                  <Col sm={9}>
                                    <Input
                                      type="text"
                                      name="nhi_indikasi"
                                      id="nhi_indikasi"
                                      value={values.nhi_indikasi}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      placeholder=""
                                    />
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Label for="nhi_kepalaseksi" sm={3}>
                                    Kepala Seksi
                                  </Label>
                                  <Col sm={9}>
                                    <Input
                                      type="text"
                                      name="nhi_kepalaseksi"
                                      id="nhi_kepalaseksi"
                                      value={values.nhi_kepalaseksi}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      placeholder=""
                                    />
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Label for="nhi_kepalaseksi_nip" sm={3}>
                                    NIP Kepala Seksi
                                  </Label>
                                  <Col sm={9}>
                                    <Input
                                      type="text"
                                      name="nhi_kepalaseksi_nip"
                                      id="nhi_kepalaseksi_nip"
                                      value={values.nhi_kepalaseksi_nip}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      placeholder=""
                                    />
                                  </Col>
                                </FormGroup>
                                <hr />
                              </div>
                              <div id="g_sbp" style={{ display: "none" }}>
                                <CardTitle tag="h4">
                                  SURAT BUKTI PENINDAKAN
                                </CardTitle>
                                <FormGroup row>
                                  <Label for="sbp_nodok" sm={3}>
                                    Nomor
                                  </Label>
                                  <Col sm={9}>
                                    <div
                                      style={{
                                        width: "10%",
                                        display: "inline",
                                      }}
                                    >
                                      LI-
                                    </div>
                                    <Input
                                      type="text"
                                      name="sbp_nodok"
                                      id="sbp_nodok"
                                      value={values.sbp_nodok}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      placeholder="93"
                                      style={{
                                        width: "10%",
                                        display: "inline",
                                      }}
                                    />
                                    <Input
                                      type="text"
                                      name="sbp_nodok_kantor"
                                      id="sbp_nodok_kantor"
                                      value={values.sbp_nodok_kantor}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      placeholder="/WBC.08/KPP.MP.030201/"
                                      style={{
                                        width: "40%",
                                        display: "inline",
                                      }}
                                    />
                                    <Input
                                      type="text"
                                      name="sbp_nodok_tahun"
                                      id="sbp_nodok_tahun"
                                      value={values.sbp_nodok_tahun}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      placeholder="2020"
                                      style={{
                                        width: "13%",
                                        display: "inline",
                                      }}
                                    />
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Label sm={3}>Tanggal Dokumen</Label>
                                  <Col sm={9}>
                                    <Input
                                      type="text"
                                      name="sbp_tgldok"
                                      id="sbp_tgldok"
                                      value={
                                        values.sbp_tgldok
                                      }
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      placeholder=""
                                    />
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Label for="sbp_nomorsprin" sm={3}>
                                    Nomor Surat Perintah
                                  </Label>
                                  <Col sm={9}>
                                    <Input
                                      type="text"
                                      name="sbp_nomorsprin"
                                      id="sbp_nomorsprin"
                                      value={values.sbp_nomorsprin}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      placeholder=""
                                    />
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Label sm={3}>Tanggal Surat Perintah</Label>
                                  <Col sm={9}>
                                    <Input
                                      type="text"
                                      name="sbp_tglsprin"
                                      id="sbp_tglsprin"
                                      value={
                                        values.sbp_tglsprin
                                      }
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      placeholder=""
                                    />
                                  </Col>
                                </FormGroup>
                                <FormGroup>
                                  <FormGroup check>
                                    <Label check>Sarana Pengangkut</Label>
                                    <FormGroup row>
                                      <Label for="sbp_sarana_nama" sm={4}>
                                        Nama
                                      </Label>
                                      <Col sm={8}>
                                        <Input
                                          type="text"
                                          name="sbp_sarana_nama"
                                          id="sbp_sarana_nama"
                                          value={values.sbp_sarana_nama}
                                          onChange={handleChange}
                                          onBlur={handleBlur}
                                          placeholder=""
                                        />
                                      </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                      <Label for="sbp_sarana_bendera" sm={4}>
                                        Bendera
                                      </Label>
                                      <Col sm={8}>
                                        <Input
                                          type="text"
                                          name="sbp_sarana_bendera"
                                          id="sbp_sarana_bendera"
                                          value={values.sbp_sarana_bendera}
                                          onChange={handleChange}
                                          onBlur={handleBlur}
                                          placeholder=""
                                        />
                                      </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                      <Label for="sbp_sarana_noreg" sm={4}>
                                        No. Register
                                      </Label>
                                      <Col sm={8}>
                                        <Input
                                          type="text"
                                          name="sbp_sarana_noreg"
                                          id="sbp_sarana_noreg"
                                          value={values.sbp_sarana_noreg}
                                          onChange={handleChange}
                                          onBlur={handleBlur}
                                          placeholder=""
                                        />
                                      </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                      <Label for="sbp_sarana_novoy" sm={4}>
                                        No Voy
                                      </Label>
                                      <Col sm={8}>
                                        <Input
                                          type="text"
                                          name="sbp_sarana_novoy"
                                          id="sbp_sarana_novoy"
                                          value={values.sbp_sarana_novoy}
                                          onChange={handleChange}
                                          onBlur={handleBlur}
                                          placeholder=""
                                        />
                                      </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                      <Label for="sbp_sarana_kapasitas" sm={4}>
                                        Kapasitas Muatan (GT)
                                      </Label>
                                      <Col sm={8}>
                                        <Input
                                          type="text"
                                          name="sbp_sarana_kapasitas"
                                          id="sbp_sarana_kapasitas"
                                          value={values.sbp_sarana_kapasitas}
                                          onChange={handleChange}
                                          onBlur={handleBlur}
                                          placeholder=""
                                        />
                                      </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                      <Label for="sbp_sarana_mrek" sm={4}>
                                        Merk/Kapasitas Mesin
                                      </Label>
                                      <Col sm={8}>
                                        <Input
                                          type="text"
                                          name="sbp_sarana_merk"
                                          id="sbp_sarana_merk"
                                          value={values.sbp_sarana_merk}
                                          onChange={handleChange}
                                          onBlur={handleBlur}
                                          placeholder=""
                                        />
                                      </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                      <Label for="sbp_sarana_nahkoda" sm={4}>
                                        Nahkoda
                                      </Label>
                                      <Col sm={8}>
                                        <Input
                                          type="text"
                                          name="sbp_sarana_nahkoda"
                                          id="sbp_sarana_nahkoda"
                                          value={values.sbp_sarana_nahkoda}
                                          onChange={handleChange}
                                          onBlur={handleBlur}
                                          placeholder=""
                                        />
                                      </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                      <Label for="sbp_sarana_kapal" sm={4}>
                                        Kapal
                                      </Label>
                                      <Col sm={8}>
                                        <Input
                                          type="text"
                                          name="sbp_sarana_kapal"
                                          id="sbp_sarana_kapal"
                                          value={values.sbp_sarana_kapal}
                                          onChange={handleChange}
                                          onBlur={handleBlur}
                                          placeholder=""
                                        />
                                      </Col>
                                    </FormGroup>
                                  </FormGroup>
                                  <FormGroup check>
                                    <Label check>Barang</Label>
                                    <FormGroup row>
                                      <Label for="sbp_barang_kemasan" sm={4}>
                                        Jenis Kemasan
                                      </Label>
                                      <Col sm={8}>
                                        <Input
                                          type="text"
                                          name="sbp_barang_kemasan"
                                          id="sbp_barang_kemasan"
                                          value={values.sbp_barang_kemasan}
                                          onChange={handleChange}
                                          onBlur={handleBlur}
                                          placeholder=""
                                        />
                                      </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                      <Label for="sbp_barang_jumlah" sm={4}>
                                        Jumlah Kemasan
                                      </Label>
                                      <Col sm={8}>
                                        <Input
                                          type="text"
                                          name="sbp_barang_jumlah"
                                          id="sbp_barang_jumlah"
                                          value={values.sbp_barang_jumlah}
                                          onChange={handleChange}
                                          onBlur={handleBlur}
                                          placeholder=""
                                        />
                                      </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                      <Label for="sbp_barang_jenis" sm={4}>
                                        Jumlah/Jenis Barang
                                      </Label>
                                      <Col sm={8}>
                                        <Input
                                          type="text"
                                          name="sbp_barang_jenis"
                                          id="sbp_barang_jenis"
                                          value={values.sbp_barang_jenis}
                                          onChange={handleChange}
                                          onBlur={handleBlur}
                                          placeholder=""
                                        />
                                      </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                      <Label for="sbp_barang_berat" sm={4}>
                                        Berat Paket
                                      </Label>
                                      <Col sm={8}>
                                        <Input
                                          type="text"
                                          name="sbp_barang_berat"
                                          id="sbp_barang_berat"
                                          value={values.sbp_barang_berat}
                                          onChange={handleChange}
                                          onBlur={handleBlur}
                                          placeholder=""
                                        />
                                      </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                      <Label for="sbp_barang_pemilik" sm={4}>
                                        Pemilik Barang/Alamat
                                      </Label>
                                      <Col sm={8}>
                                        <Input
                                          type="text"
                                          name="sbp_barang_pemilik"
                                          id="sbp_barang_pemilik"
                                          value={values.sbp_barang_pemilik}
                                          onChange={handleChange}
                                          onBlur={handleBlur}
                                          placeholder=""
                                        />
                                      </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                      <Label for="sbp_barang_negara" sm={4}>
                                        Negara Asal
                                      </Label>
                                      <Col sm={8}>
                                        <Input
                                          type="text"
                                          name="sbp_barang_negara"
                                          id="sbp_barang_negara"
                                          value={values.sbp_barang_negara}
                                          onChange={handleChange}
                                          onBlur={handleBlur}
                                          placeholder=""
                                        />
                                      </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                      <Label for="sbp_barang_nomor" sm={4}>
                                        Jenis/Nomor Paket
                                      </Label>
                                      <Col sm={8}>
                                        <Input
                                          type="text"
                                          name="sbp_barang_nomor"
                                          id="sbp_barang_nomor"
                                          value={values.sbp_barang_nomor}
                                          onChange={handleChange}
                                          onBlur={handleBlur}
                                          placeholder=""
                                        />
                                      </Col>
                                    </FormGroup>
                                  </FormGroup>
                                  <FormGroup row>
                                    <Label for="sbp_uraian" sm={4}>
                                      Uraian Penindakan
                                    </Label>
                                    <Col sm={8}>
                                      <Input
                                        type="textarea"
                                        name="sbp_uraian"
                                        id="sbp_uraian"
                                        value={values.sbp_uraian}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        placeholder=""
                                      />
                                    </Col>
                                  </FormGroup>
                                  <FormGroup row>
                                    <Label for="sbp_alasan" sm={4}>
                                      Alasan Penindakan
                                    </Label>
                                    <Col sm={8}>
                                      <Input
                                        type="textarea"
                                        name="sbp_alasan"
                                        id="sbp_alasan"
                                        value={values.sbp_alasan}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        placeholder=""
                                      />
                                    </Col>
                                  </FormGroup>
                                  <FormGroup row>
                                    <Label for="sbp_dugaan" sm={4}>
                                      Dugaan Pelanggaran
                                    </Label>
                                    <Col sm={8}>
                                      <Input
                                        type="textarea"
                                        name="sbp_dugaan"
                                        id="sbp_dugaan"
                                        value={values.sbp_dugaan}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        placeholder=""
                                      />
                                    </Col>
                                  </FormGroup>
                                  <FormGroup row>
                                    <Label for="sbp_tindakan" sm={4}>
                                      Tindakan Yang Dilakukan
                                    </Label>
                                    <Col sm={8}>
                                      <Input
                                        type="textarea"
                                        name="sbp_tindakan"
                                        id="sbp_tindakan"
                                        value={values.sbp_tindakan}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        placeholder=""
                                      />
                                    </Col>
                                  </FormGroup>
                                  <FormGroup row>
                                    <Label for="sbp_waktu" sm={4}>
                                      Waktu Penindakan
                                    </Label>
                                    <Col sm={4}>
                                      <Input
                                        type="text"
                                        name="sbp_waktu_start"
                                        id="sbp_waktu_start"
                                        value={values.sbp_waktu_start}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        placeholder=""
                                      />
                                    </Col>
                                    <Col sm={4}>
                                      <Input
                                        type="text"
                                        name="sbp_waktu_end"
                                        id="sbp_waktu_end"
                                        value={values.sbp_waktu_end}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        placeholder=""
                                      />
                                    </Col>
                                  </FormGroup>
                                  <FormGroup row>
                                    <Label for="sbp_terjadi" sm={4}>
                                      Hal-hal yang terjadi
                                    </Label>
                                    <Col sm={8}>
                                      <Input
                                        type="textarea"
                                        name="sbp_terjadi"
                                        id="sbp_terjadi"
                                        value={values.sbp_terjadi}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        placeholder=""
                                      />
                                    </Col>
                                  </FormGroup>
                                  <FormGroup row>
                                    <Label for="sbp_tanggal" sm={4}>
                                      Tanggal Penindakan
                                    </Label>
                                    <Col sm={8}>
                                      <Input
                                        type="textarea"
                                        name="sbp_tanggal"
                                        id="sbp_tanggal"
                                        value={values.sbp_tanggal}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        placeholder=""
                                      />
                                    </Col>
                                  </FormGroup>
                                  <FormGroup row>
                                    <Label for="sbp_pengangkut" sm={3}>
                                      Pengangkut/Pemilik
                                    </Label>
                                    <Col sm={9}>
                                      <Input
                                        type="text"
                                        name="sbp_pengangkut"
                                        id="sbp_pengangkut"
                                        value={values.sbp_pengangkut}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        placeholder=""
                                      />
                                    </Col>
                                  </FormGroup>
                                  <FormGroup row>
                                    <Label for="sbp_pengangkut_nip" sm={3}>
                                      NIPPOS Pengangkut/Pemilik
                                    </Label>
                                    <Col sm={9}>
                                      <Input
                                        type="text"
                                        name="sbp_pengangkut_nip"
                                        id="sbp_pengangkut_nip"
                                        value={values.sbp_pengangkut_nip}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        placeholder=""
                                      />
                                    </Col>
                                  </FormGroup>
                                  <FormGroup row>
                                    <Label for="sbp_penindak1" sm={3}>
                                      Penindak 1
                                    </Label>
                                    <Col sm={9}>
                                      <Input
                                        type="text"
                                        name="sbp_penindak1"
                                        id="sbp_penindak1"
                                        value={values.sbp_penindak1}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        placeholder=""
                                      />
                                    </Col>
                                  </FormGroup>
                                  <FormGroup row>
                                    <Label for="sbp_penindak1_nip" sm={3}>
                                      NIP Penindak 1
                                    </Label>
                                    <Col sm={9}>
                                      <Input
                                        type="text"
                                        name="sbp_penindak1_nip"
                                        id="sbp_penindak1_nip"
                                        value={values.sbp_penindak1_nip}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        placeholder=""
                                      />
                                    </Col>
                                  </FormGroup>
                                  <FormGroup row>
                                    <Label for="sbp_penindak2" sm={3}>
                                      Penindak 2
                                    </Label>
                                    <Col sm={9}>
                                      <Input
                                        type="text"
                                        name="sbp_penindak2"
                                        id="sbp_penindak2"
                                        value={values.sbp_penindak2}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        placeholder=""
                                      />
                                    </Col>
                                  </FormGroup>
                                  <FormGroup row>
                                    <Label for="sbp_penindak2_nip" sm={3}>
                                      NIP Penindak 2
                                    </Label>
                                    <Col sm={9}>
                                      <Input
                                        type="text"
                                        name="sbp_penindak2_nip"
                                        id="sbp_penindak2_nip"
                                        value={values.sbp_penindak2_nip}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        placeholder=""
                                      />
                                    </Col>
                                  </FormGroup>
                                </FormGroup>
                                <hr />
                              </div>
                              <div id="g_bariksa" style={{ display: "none" }}>
                                <CardTitle tag="h4">
                                  BERITA ACARA PEMERIKSAAN
                                </CardTitle>
                                <FormGroup row>
                                  <Label for="bariksa_nodok" sm={3}>
                                    Nomor
                                  </Label>
                                  <Col sm={9}>
                                    <div
                                      style={{
                                        width: "10%",
                                        display: "inline",
                                      }}
                                    >
                                      BA-
                                    </div>
                                    <Input
                                      type="text"
                                      name="bariksa_nodok"
                                      id="bariksa_nodok"
                                      value={values.bariksa_nodok}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      placeholder="93"
                                      style={{
                                        width: "10%",
                                        display: "inline",
                                      }}
                                    />
                                    <Input
                                      type="text"
                                      name="bariksa_nodok_kantor"
                                      id="bariksa_nodok_kantor"
                                      value={values.bariksa_nodok_kantor}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      placeholder="/WBC.08/KPP.MP.030201/"
                                      style={{
                                        width: "40%",
                                        display: "inline",
                                      }}
                                    />
                                    /PERIKSA/
                                    <Input
                                      type="text"
                                      name="bariksa_nodok_tahun"
                                      id="bariksa_nodok_tahun"
                                      value={values.bariksa_nodok_tahun}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      placeholder="2020"
                                      style={{
                                        width: "13%",
                                        display: "inline",
                                      }}
                                    />
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Label sm={3}>Tanggal Dokumen</Label>
                                  <Col sm={9}>
                                    <Input
                                      type="text"
                                      name="bariksa_tgldok"
                                      id="bariksa_tgldok"
                                      value={
                                        values.bariksa_tgldok
                                      }
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      placeholder=""
                                    />
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Label for="bariksa_nomorsprin" sm={3}>
                                    Nomor Surat Perintah
                                  </Label>
                                  <Col sm={9}>
                                    <Input
                                      type="text"
                                      name="bariksa_nomorsprin"
                                      id="bariksa_nomorsprin"
                                      value={values.bariksa_nomorsprin}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      placeholder=""
                                    />
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Label sm={3}>Tanggal Surat Perintah</Label>
                                  <Col sm={9}>
                                    <Input
                                      type="text"
                                      name="bariksa_tglsprin"
                                      id="bariksa_tglsprin"
                                      value={
                                        values.bariksa_tglsprin
                                      }
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      placeholder=""
                                    />
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Label for="bariksa_pemeriksa1" sm={3}>
                                    Pemeriksa 1
                                  </Label>
                                  <Col sm={9}>
                                    <Input
                                      type="text"
                                      name="bariksa_pemeriksa1"
                                      id="bariksa_pemeriksa1"
                                      value={values.bariksa_pemeriksa1}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      placeholder=""
                                    />
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Label for="bariksa_pemeriksa1_nip" sm={3}>
                                    NIP Pemeriksa 1
                                  </Label>
                                  <Col sm={9}>
                                    <Input
                                      type="text"
                                      name="bariksa_pemeriksa1_nip"
                                      id="bariksa_pemeriksa1_nip"
                                      value={values.bariksa_pemeriksa1_nip}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      placeholder=""
                                    />
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Label
                                    for="bariksa_pemeriksa1_pangkat"
                                    sm={3}
                                  >
                                    Pangkat/Gol Pemeriksa 1
                                  </Label>
                                  <Col sm={9}>
                                    <Input
                                      type="text"
                                      name="bariksa_pemeriksa1_pangkat"
                                      id="bariksa_pemeriksa1_pangkat"
                                      value={values.bariksa_pemeriksa1_pangkat}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      placeholder=""
                                    />
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Label
                                    for="bariksa_pemeriksa1_jabatan"
                                    sm={3}
                                  >
                                    Jabatan Pemeriksa 1
                                  </Label>
                                  <Col sm={9}>
                                    <Input
                                      type="text"
                                      name="bariksa_pemeriksa1_jabatan"
                                      id="bariksa_pemeriksa1_jabatan"
                                      value={values.bariksa_pemeriksa1_jabatan}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      placeholder=""
                                    />
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Label for="bariksa_pemeriksa2" sm={3}>
                                    Pemeriksa 2
                                  </Label>
                                  <Col sm={9}>
                                    <Input
                                      type="text"
                                      name="bariksa_pemeriksa2"
                                      id="bariksa_pemeriksa2"
                                      value={values.bariksa_pemeriksa2}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      placeholder=""
                                    />
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Label for="bariksa_pemeriksa2_nip" sm={3}>
                                    NIP Pemeriksa 2
                                  </Label>
                                  <Col sm={9}>
                                    <Input
                                      type="text"
                                      name="bariksa_pemeriksa2_nip"
                                      id="bariksa_pemeriksa2_nip"
                                      value={values.bariksa_pemeriksa2_nip}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      placeholder=""
                                    />
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Label
                                    for="bariksa_pemeriksa2_pangkat"
                                    sm={3}
                                  >
                                    Pangkat/Gol Pemeriksa 2
                                  </Label>
                                  <Col sm={9}>
                                    <Input
                                      type="text"
                                      name="bariksa_pemeriksa2_pangkat"
                                      id="bariksa_pemeriksa2_pangkat"
                                      value={values.bariksa_pemeriksa2_pangkat}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      placeholder=""
                                    />
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Label
                                    for="bariksa_pemeriksa2_jabatan"
                                    sm={3}
                                  >
                                    Jabatan Pemeriksa 2
                                  </Label>
                                  <Col sm={9}>
                                    <Input
                                      type="text"
                                      name="bariksa_pemeriksa2_jabatan"
                                      id="bariksa_pemeriksa2_jabatan"
                                      value={values.bariksa_pemeriksa2_jabatan}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      placeholder=""
                                    />
                                  </Col>
                                </FormGroup>
                                <FormGroup check>
                                  <Label check>Barang</Label>
                                  <FormGroup row>
                                    <Label for="bariksa_barang_pemilik" sm={4}>
                                      Pemilik Barang
                                    </Label>
                                    <Col sm={8}>
                                      <Input
                                        type="text"
                                        name="bariksa_barang_pemilik"
                                        id="bariksa_barang_pemilik"
                                        value={values.bariksa_barang_pemilik}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        placeholder=""
                                      />
                                    </Col>
                                  </FormGroup>
                                  <FormGroup row>
                                    <Label for="bariksa_barang_kemasan" sm={4}>
                                      Jenis Kemasan
                                    </Label>
                                    <Col sm={8}>
                                      <Input
                                        type="text"
                                        name="bariksa_barang_kemasan"
                                        id="bariksa_barang_kemasan"
                                        value={values.bariksa_barang_kemasan}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        placeholder=""
                                      />
                                    </Col>
                                  </FormGroup>
                                  <FormGroup row>
                                    <Label for="bariksa_barang_jumlah" sm={4}>
                                      Jumlah Kemasan
                                    </Label>
                                    <Col sm={8}>
                                      <Input
                                        type="text"
                                        name="bariksa_barang_jumlah"
                                        id="bariksa_barang_jumlah"
                                        value={values.bariksa_barang_jumlah}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        placeholder=""
                                      />
                                    </Col>
                                  </FormGroup>
                                  <FormGroup row>
                                    <Label for="bariksa_barang_berat" sm={4}>
                                      Berat Paket
                                    </Label>
                                    <Col sm={8}>
                                      <Input
                                        type="text"
                                        name="bariksa_barang_berat"
                                        id="bariksa_barang_berat"
                                        value={values.bariksa_barang_berat}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        placeholder=""
                                      />
                                    </Col>
                                  </FormGroup>
                                  <FormGroup row>
                                    <Label for="bariksa_barang_jenis" sm={4}>
                                      Jumlah/Jenis Barang
                                    </Label>
                                    <Col sm={8}>
                                      <Input
                                        type="text"
                                        name="bariksa_barang_jenis"
                                        id="bariksa_barang_jenis"
                                        value={values.bariksa_barang_jenis}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        placeholder=""
                                      />
                                    </Col>
                                  </FormGroup>
                                  <FormGroup row>
                                    <Label for="bariksa_barang_nomor" sm={4}>
                                      Jenis/Nomor Paket
                                    </Label>
                                    <Col sm={8}>
                                      <Input
                                        type="text"
                                        name="bariksa_barang_nomor"
                                        id="bariksa_barang_nomor"
                                        value={values.bariksa_barang_nomor}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        placeholder=""
                                      />
                                    </Col>
                                  </FormGroup>
                                </FormGroup>
                                <FormGroup row>
                                  <Label for="bariksa_pengangkut" sm={3}>
                                    Pengangkut
                                  </Label>
                                  <Col sm={9}>
                                    <Input
                                      type="text"
                                      name="bariksa_pengangkut"
                                      id="bariksa_pengangkut"
                                      value={values.bariksa_pengangkut}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      placeholder=""
                                    />
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Label for="bariksa_tempatlahir" sm={3}>
                                    Tempat Lahir Pengangkut
                                  </Label>
                                  <Col sm={9}>
                                    <Input
                                      type="text"
                                      name="bariksa_tempatlahir"
                                      id="bariksa_tempatlahir"
                                      value={values.bariksa_tempatlahir}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      placeholder=""
                                    />
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Label sm={3}>Tanggal Lahir Pengangkut</Label>
                                  <Col sm={9}>
                                    <Input
                                      type="text"
                                      name="bariksa_tgllahir"
                                      id="bariksa_tgllahir"
                                      value={
                                        values.bariksa_tgllahir
                                      }
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      placeholder=""
                                    />
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Label for="bariksa_alamat" sm={3}>
                                    Alamat Pengangkut
                                  </Label>
                                  <Col sm={9}>
                                    <Input
                                      type="textarea"
                                      name="bariksa_alamat"
                                      id="bariksa_alamat"
                                      value={values.bariksa_alamat}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      placeholder=""
                                    />
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Label for="bariksa_pekerjaan" sm={3}>
                                    Pekerjaan Pengangkut
                                  </Label>
                                  <Col sm={9}>
                                    <Input
                                      type="textarea"
                                      name="bariksa_pekerjaan"
                                      id="bariksa_pekerjaan"
                                      value={values.bariksa_pekerjaan}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      placeholder=""
                                    />
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Label for="bariksa_identitas" sm={3}>
                                    No Identitas Pengangkut
                                  </Label>
                                  <Col sm={9}>
                                    <Input
                                      type="textarea"
                                      name="bariksa_identitas"
                                      id="bariksa_identitas"
                                      value={values.bariksa_identitas}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      placeholder=""
                                    />
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Label for="bariksa_saksi" sm={3}>
                                    Saksi
                                  </Label>
                                  <Col sm={9}>
                                    <Input
                                      type="text"
                                      name="bariksa_saksi"
                                      id="bariksa_saksi"
                                      value={values.bariksa_saksi}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      placeholder=""
                                    />
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Label for="bariksa_saksi_nip" sm={3}>
                                    NIPPOS Saksi
                                  </Label>
                                  <Col sm={9}>
                                    <Input
                                      type="text"
                                      name="bariksa_saksi_nip"
                                      id="bariksa_saksi_nip"
                                      value={values.bariksa_saksi_nip}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      placeholder=""
                                    />
                                  </Col>
                                </FormGroup>
                                <hr />
                              </div>
                              <div id="g_bacontoh" style={{ display: "none" }}>
                                <CardTitle tag="h4">
                                  BERITA ACARA PENGAMBILAN CONTOH
                                </CardTitle>
                                <FormGroup row>
                                  <Label for="bacontoh_nodok" sm={3}>
                                    Nomor
                                  </Label>
                                  <Col sm={9}>
                                    <div
                                      style={{
                                        width: "10%",
                                        display: "inline",
                                      }}
                                    >
                                      LI-
                                    </div>
                                    <Input
                                      type="text"
                                      name="bacontoh_nodok"
                                      id="bacontoh_nodok"
                                      value={values.bacontoh_nodok}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      placeholder="93"
                                      style={{
                                        width: "10%",
                                        display: "inline",
                                      }}
                                    />
                                    <Input
                                      type="text"
                                      name="bacontoh_nodok_kantor"
                                      id="bacontoh_nodok_kantor"
                                      value={values.bacontoh_nodok_kantor}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      placeholder="/WBC.08/KPP.MP.030201/"
                                      style={{
                                        width: "40%",
                                        display: "inline",
                                      }}
                                    />
                                    <Input
                                      type="text"
                                      name="bacontoh_nodok_tahun"
                                      id="bacontoh_nodok_tahun"
                                      value={values.bacontoh_nodok_tahun}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      placeholder="2020"
                                      style={{
                                        width: "13%",
                                        display: "inline",
                                      }}
                                    />
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Label sm={3}>Tanggal Dokumen</Label>
                                  <Col sm={9}>
                                    <Input
                                      type="text"
                                      name="bacontoh_tgldok"
                                      id="bacontoh_tgldok"
                                      value={values.bacontoh_tgldok}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      placeholder=""
                                    />
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Label for="bacontoh_nomorsprin" sm={3}>
                                    Nomor Surat Perintah
                                  </Label>
                                  <Col sm={9}>
                                    <Input
                                      type="text"
                                      name="bacontoh_nomorsprin"
                                      id="bacontoh_nomorsprin"
                                      value={values.bacontoh_nomorsprin}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      placeholder=""
                                    />
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Label sm={3}>Tanggal Surat Perintah</Label>
                                  <Col sm={9}>
                                    <Input
                                      type="text"
                                      name="bacontoh_tglsprin"
                                      id="bacontoh_tglsprin"
                                      value={values.bacontoh_tglsprin}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      placeholder=""
                                    />
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Label for="bacontoh_pengambil1" sm={3}>
                                    Pengambil 1
                                  </Label>
                                  <Col sm={9}>
                                    <Input
                                      type="text"
                                      name="bacontoh_pengambil1"
                                      id="bacontoh_pengambil1"
                                      value={values.bacontoh_pengambil1}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      placeholder=""
                                    />
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Label for="bacontoh_pengambil1_nip" sm={3}>
                                    NIP Pengambil 1
                                  </Label>
                                  <Col sm={9}>
                                    <Input
                                      type="text"
                                      name="bacontoh_pengambil1_nip"
                                      id="bacontoh_pengambil1_nip"
                                      value={values.bacontoh_pengambil1_nip}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      placeholder=""
                                    />
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Label
                                    for="bacontoh_pengambil1_pangkat"
                                    sm={3}
                                  >
                                    Pangkat/Gol Pengambil 1
                                  </Label>
                                  <Col sm={9}>
                                    <Input
                                      type="text"
                                      name="bacontoh_pengambil1_pangkat"
                                      id="bacontoh_pengambil1_pangkat"
                                      value={values.bacontoh_pengambil1_pangkat}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      placeholder=""
                                    />
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Label
                                    for="bacontoh_pengambil1_jabatan"
                                    sm={3}
                                  >
                                    Jabatan Pengambil 1
                                  </Label>
                                  <Col sm={9}>
                                    <Input
                                      type="text"
                                      name="bacontoh_pengambil1_jabatan"
                                      id="bacontoh_pengambil1_jabatan"
                                      value={values.bacontoh_pengambil1_jabatan}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      placeholder=""
                                    />
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Label for="bacontoh_pengambil2" sm={3}>
                                    Pengambil 2
                                  </Label>
                                  <Col sm={9}>
                                    <Input
                                      type="text"
                                      name="bacontoh_pengambil2"
                                      id="bacontoh_pengambil2"
                                      value={values.bacontoh_pengambil2}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      placeholder=""
                                    />
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Label for="bacontoh_pengambil2_nip" sm={3}>
                                    NIP Pengambil 2
                                  </Label>
                                  <Col sm={9}>
                                    <Input
                                      type="text"
                                      name="bacontoh_pengambil2_nip"
                                      id="bacontoh_pengambil2_nip"
                                      value={values.bacontoh_pengambil2_nip}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      placeholder=""
                                    />
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Label
                                    for="bacontoh_pengambil2_pangkat"
                                    sm={3}
                                  >
                                    Pangkat/Gol Pengambil 2
                                  </Label>
                                  <Col sm={9}>
                                    <Input
                                      type="text"
                                      name="bacontoh_pengambil2_pangkat"
                                      id="bacontoh_pengambil2_pangkat"
                                      value={values.bacontoh_pengambil2_pangkat}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      placeholder=""
                                    />
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Label
                                    for="bacontoh_pengambil2_jabatan"
                                    sm={3}
                                  >
                                    Jabatan Pengambil 2
                                  </Label>
                                  <Col sm={9}>
                                    <Input
                                      type="text"
                                      name="bacontoh_pengambil2_jabatan"
                                      id="bacontoh_pengambil2_jabatan"
                                      value={values.bacontoh_pengambil2_jabatan}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      placeholder=""
                                    />
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Label for="bacontoh_bentuk" sm={3}>
                                    Bentuk Fisik
                                  </Label>
                                  <Col sm={9}>
                                    <Input
                                      type="text"
                                      name="bacontoh_bentuk"
                                      id="bacontoh_bentuk"
                                      value={values.bacontoh_bentuk}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      placeholder=""
                                    />
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Label for="bacontoh_warna" sm={3}>
                                    Warna
                                  </Label>
                                  <Col sm={9}>
                                    <Input
                                      type="text"
                                      name="bacontoh_warna"
                                      id="bacontoh_warna"
                                      value={values.bacontoh_warna}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      placeholder=""
                                    />
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Label for="bacontoh_jumlah" sm={3}>
                                    Jumlah Bruto
                                  </Label>
                                  <Col sm={9}>
                                    <Input
                                      type="text"
                                      name="bacontoh_jumlah"
                                      id="bacontoh_jumlah"
                                      value={values.bacontoh_jumlah}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      placeholder=""
                                    />
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Label for="bacontoh_contoh" sm={3}>
                                    Jumlah Contoh
                                  </Label>
                                  <Col sm={9}>
                                    <Input
                                      type="text"
                                      name="bacontoh_contoh"
                                      id="bacontoh_contoh"
                                      value={values.bacontoh_contoh}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      placeholder=""
                                    />
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Label for="bacontoh_tujuan" sm={3}>
                                    Tujuan
                                  </Label>
                                  <Col sm={9}>
                                    <Input
                                      type="text"
                                      name="bacontoh_tujuan"
                                      id="bacontoh_tujuan"
                                      value={values.bacontoh_tujuan}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      placeholder=""
                                    />
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Label for="bacontoh_lokasi" sm={3}>
                                    Tempat/lokasi
                                  </Label>
                                  <Col sm={9}>
                                    <Input
                                      type="text"
                                      name="bacontoh_lokasi"
                                      id="bacontoh_lokasi"
                                      value={values.bacontoh_lokasi}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      placeholder=""
                                    />
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Label for="bacontoh_jenispaket" sm={3}>
                                    Jenis Paket
                                  </Label>
                                  <Col sm={9}>
                                    <Input
                                      type="text"
                                      name="bacontoh_jenispaket"
                                      id="bacontoh_jenispaket"
                                      value={values.bacontoh_jenispaket}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      placeholder=""
                                    />
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Label for="bacontoh_negara" sm={3}>
                                    Negara
                                  </Label>
                                  <Col sm={9}>
                                    <Input
                                      type="text"
                                      name="bacontoh_negara"
                                      id="bacontoh_negara"
                                      value={values.bacontoh_negara}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      placeholder=""
                                    />
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Label for="bacontoh_nomorpaket" sm={3}>
                                    Nomor Paket
                                  </Label>
                                  <Col sm={9}>
                                    <Input
                                      type="text"
                                      name="bacontoh_nomorpaket"
                                      id="bacontoh_nomorpaket"
                                      value={values.bacontoh_nomorpaket}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      placeholder=""
                                    />
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Label for="bacontoh_beratpaket" sm={3}>
                                    Berat Paket
                                  </Label>
                                  <Col sm={9}>
                                    <Input
                                      type="text"
                                      name="bacontoh_beratpaket"
                                      id="bacontoh_beratpaket"
                                      value={values.bacontoh_beratpaket}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      placeholder=""
                                    />
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Label for="bacontoh_pemilik" sm={3}>
                                    Nama Pemilik Barang
                                  </Label>
                                  <Col sm={9}>
                                    <Input
                                      type="text"
                                      name="bacontoh_pemilik"
                                      id="bacontoh_pemilik"
                                      value={values.bacontoh_pemilik}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      placeholder=""
                                    />
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Label for="bacontoh_menguasai" sm={3}>
                                    Yang Menguasai
                                  </Label>
                                  <Col sm={9}>
                                    <Input
                                      type="text"
                                      name="bacontoh_menguasai"
                                      id="bacontoh_menguasai"
                                      value={values.bacontoh_menguasai}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      placeholder=""
                                    />
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Label for="bacontoh_alamat" sm={3}>
                                    Alamat
                                  </Label>
                                  <Col sm={9}>
                                    <Input
                                      type="text"
                                      name="bacontoh_alamat"
                                      id="bacontoh_alamat"
                                      value={values.bacontoh_alamat}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      placeholder=""
                                    />
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Label for="bacontoh_saksi" sm={3}>
                                    Saksi
                                  </Label>
                                  <Col sm={9}>
                                    <Input
                                      type="text"
                                      name="bacontoh_saksi"
                                      id="bacontoh_saksi"
                                      value={values.bacontoh_saksi}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      placeholder=""
                                    />
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Label for="bacontoh_saksi_nip" sm={3}>
                                    NIPPOS Saksi
                                  </Label>
                                  <Col sm={9}>
                                    <Input
                                      type="text"
                                      name="bacontoh_saksi_nip"
                                      id="bacontoh_saksi_nip"
                                      value={values.bacontoh_saksi_nip}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      placeholder=""
                                    />
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Label for="bacontoh_mengetahui" sm={3}>
                                    Mengetahui
                                  </Label>
                                  <Col sm={9}>
                                    <Input
                                      type="text"
                                      name="bacontoh_mengetahui"
                                      id="bacontoh_mengetahui"
                                      value={values.bacontoh_mengetahui}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      placeholder=""
                                    />
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Label for="bacontoh_mengetahui_nip" sm={3}>
                                    NIP Mengetahui
                                  </Label>
                                  <Col sm={9}>
                                    <Input
                                      type="text"
                                      name="bacontoh_mengetahui_nip"
                                      id="bacontoh_mengetahui_nip"
                                      value={values.bacontoh_mengetahui_nip}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      placeholder=""
                                    />
                                  </Col>
                                </FormGroup>
                                <hr />
                              </div>
                              <div id="g_ltp" style={{ display: "none" }}>
                                <CardTitle tag="h4">
                                  LAPORAN TUGAS PENINDAKAN
                                </CardTitle>
                                <FormGroup row>
                                  <Label for="ltp_nodok" sm={3}>
                                    Nomor
                                  </Label>
                                  <Col sm={9}>
                                    <div
                                      style={{
                                        width: "10%",
                                        display: "inline",
                                      }}
                                    >
                                      LI-
                                    </div>
                                    <Input
                                      type="text"
                                      name="ltp_nodok"
                                      id="ltp_nodok"
                                      value={values.ltp_nodok}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      placeholder="93"
                                      style={{
                                        width: "10%",
                                        display: "inline",
                                      }}
                                    />
                                    <Input
                                      type="text"
                                      name="ltp_nodok_kantor"
                                      id="ltp_nodok_kantor"
                                      value={values.ltp_nodok_kantor}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      placeholder="/WBC.08/KPP.MP.030201/"
                                      style={{
                                        width: "40%",
                                        display: "inline",
                                      }}
                                    />
                                    <Input
                                      type="text"
                                      name="ltp_nodok_tahun"
                                      id="ltp_nodok_tahun"
                                      value={values.ltp_nodok_tahun}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      placeholder="2020"
                                      style={{
                                        width: "13%",
                                        display: "inline",
                                      }}
                                    />
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Label sm={3}>Tanggal Dokumen</Label>
                                  <Col sm={9}>
                                    <Input
                                      type="text"
                                      name="ltp_tgldok"
                                      id="ltp_tgldok"
                                      value={values.ltp_tgldok}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      placeholder=""
                                    />
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Label for="ltp_nomorsprin" sm={3}>
                                    Nomor Surat Perintah
                                  </Label>
                                  <Col sm={9}>
                                    <Input
                                      type="text"
                                      name="ltp_nomorsprin"
                                      id="ltp_nomorsprin"
                                      value={values.ltp_nomorsprin}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      placeholder=""
                                    />
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Label sm={3}>Tanggal Surat Perintah</Label>
                                  <Col sm={9}>
                                    <Input
                                      type="text"
                                      name="ltp_tglsprin"
                                      id="ltp_tglsprin"
                                      value={values.ltp_tglsprin}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      placeholder=""
                                    />
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Label for="ltp_kategori" sm={3}>
                                    Kategori Penindakan
                                  </Label>
                                  <Col sm={9}>
                                    <Input
                                      type="text"
                                      name="ltp_kategori"
                                      id="ltp_kategori"
                                      value={values.ltp_kategori}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      placeholder=""
                                    />
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Label for="ltp_uraian" sm={3}>
                                    Uraian Penindakan
                                  </Label>
                                  <Col sm={9}>
                                    <Input
                                      type="textarea"
                                      name="ltp_uraian"
                                      id="ltp_uraian"
                                      value={values.ltp_uraian}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      placeholder=""
                                    />
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Label for="ltp_bentuk" sm={3}>
                                    Bentuk Fisik
                                  </Label>
                                  <Col sm={9}>
                                    <Input
                                      type="text"
                                      name="ltp_bentuk"
                                      id="ltp_bentuk"
                                      value={values.ltp_bentuk}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      placeholder=""
                                    />
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Label for="ltp_warna" sm={3}>
                                    Warna
                                  </Label>
                                  <Col sm={9}>
                                    <Input
                                      type="text"
                                      name="ltp_warna"
                                      id="ltp_warna"
                                      value={values.ltp_warna}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      placeholder=""
                                    />
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Label for="ltp_kemasan" sm={3}>
                                    Kemasan
                                  </Label>
                                  <Col sm={9}>
                                    <Input
                                      type="text"
                                      name="ltp_kemasan"
                                      id="ltp_kemasan"
                                      value={values.ltp_kemasan}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      placeholder=""
                                    />
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Label for="ltp_jumlah" sm={3}>
                                    Jumlah Bruto
                                  </Label>
                                  <Col sm={9}>
                                    <Input
                                      type="text"
                                      name="ltp_jumlah"
                                      id="ltp_jumlah"
                                      value={values.ltp_jumlah}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      placeholder=""
                                    />
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Label for="ltp_jenis" sm={3}>
                                    Jenis
                                  </Label>
                                  <Col sm={9}>
                                    <Input
                                      type="text"
                                      name="ltp_jenis"
                                      id="ltp_jenis"
                                      value={values.ltp_jenis}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      placeholder=""
                                    />
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Label for="ltp_tempat" sm={3}>
                                    Tempat
                                  </Label>
                                  <Col sm={9}>
                                    <Input
                                      type="text"
                                      name="ltp_tempat"
                                      id="ltp_tempat"
                                      value={values.ltp_tempat}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      placeholder=""
                                    />
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Label sm={3}>Tanggal</Label>
                                  <Col sm={9}>
                                    <Input
                                      type="text"
                                      name="ltp_tgl"
                                      id="ltp_tgl"
                                      value={values.ltp_tgl}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      placeholder=""
                                    />
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Label for="ltp_waktu" sm={3}>
                                    Waktu
                                  </Label>
                                  <Col sm={9}>
                                    <Input
                                      type="text"
                                      name="ltp_waktu"
                                      id="ltp_waktu"
                                      value={values.ltp_waktu}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      placeholder=""
                                    />
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Label for="ltp_kantor" sm={3}>
                                    Kantor Bea &amp; Cukai
                                  </Label>
                                  <Col sm={9}>
                                    <Input
                                      type="text"
                                      name="ltp_kantor"
                                      id="ltp_kantor"
                                      value={values.ltp_kantor}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      placeholder=""
                                    />
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Label for="ltp_nomor" sm={3}>
                                    Nomor Kiriman Pos
                                  </Label>
                                  <Col sm={9}>
                                    <Input
                                      type="text"
                                      name="ltp_nomor"
                                      id="ltp_nomor"
                                      value={values.ltp_nomor}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      placeholder=""
                                    />
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Label for="ltp_negara" sm={3}>
                                    Negara Asal
                                  </Label>
                                  <Col sm={9}>
                                    <Input
                                      type="text"
                                      name="ltp_negara"
                                      id="ltp_negara"
                                      value={values.ltp_negara}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      placeholder=""
                                    />
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Label for="ltp_pengirim" sm={3}>
                                    Pengirim
                                  </Label>
                                  <Col sm={9}>
                                    <Input
                                      type="text"
                                      name="ltp_pengirim"
                                      id="ltp_pengirim"
                                      value={values.ltp_pengirim}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      placeholder=""
                                    />
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Label for="ltp_penerima" sm={3}>
                                    Penerima
                                  </Label>
                                  <Col sm={9}>
                                    <Input
                                      type="text"
                                      name="ltp_penerima"
                                      id="ltp_penerima"
                                      value={values.ltp_penerima}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      placeholder=""
                                    />
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Label for="ltp_alamat" sm={3}>
                                    Alamat
                                  </Label>
                                  <Col sm={9}>
                                    <Input
                                      type="textarea"
                                      name="ltp_alamat"
                                      id="ltp_alamat"
                                      value={values.ltp_alamat}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      placeholder=""
                                    />
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Label for="ltp_lokasi" sm={3}>
                                    Tempat / lokasi penindakan
                                  </Label>
                                  <Col sm={9}>
                                    <Input
                                      type="text"
                                      name="ltp_lokasi"
                                      id="ltp_lokasi"
                                      value={values.ltp_lokasi}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      placeholder=""
                                    />
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Label for="ltp_diberikan" sm={3}>
                                    Diberikan kepada
                                  </Label>
                                  <Col sm={9}>
                                    <Input
                                      type="text"
                                      name="ltp_diberikan"
                                      id="ltp_diberikan"
                                      value={values.ltp_diberikan}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      placeholder=""
                                    />
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Label for="ltp_diberikan_alamat" sm={3}>
                                    Alamat
                                  </Label>
                                  <Col sm={9}>
                                    <Input
                                      type="text"
                                      name="ltp_diberikan_alamat"
                                      id="ltp_diberikan_alamat"
                                      value={values.ltp_diberikan_alamat}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      placeholder=""
                                    />
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Label sm={3}>Tanggal</Label>
                                  <Col sm={9}>
                                    <Input
                                      type="text"
                                      name="ltp_tglberi"
                                      id="ltp_tglberi"
                                      value={values.ltp_tglberi}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      placeholder=""
                                    />
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Label for="ltp_diberikan_jam" sm={3}>
                                    Jam
                                  </Label>
                                  <Col sm={9}>
                                    <Input
                                      type="text"
                                      name="ltp_diberikan_jam"
                                      id="ltp_diberikan_jam"
                                      value={values.ltp_diberikan_jam}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      placeholder=""
                                    />
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Label for="ltp_dilaporkan" sm={3}>
                                    Dilaporkan kepada
                                  </Label>
                                  <Col sm={9}>
                                    <Input
                                      type="text"
                                      name="ltp_dilaporkan"
                                      id="ltp_dilaporkan"
                                      value={values.ltp_dilaporkan}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      placeholder=""
                                    />
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Label for="ltp_catatan" sm={3}>
                                    Catatan
                                  </Label>
                                  <Col sm={9}>
                                    <Input
                                      type="textarea"
                                      name="ltp_catatan"
                                      id="ltp_catatan"
                                      value={values.ltp_catatan}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      placeholder=""
                                    />
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Label for="ltp_penindak" sm={3}>
                                    Penindak
                                  </Label>
                                  <Col sm={9}>
                                    <Input
                                      type="text"
                                      name="ltp_penindak"
                                      id="ltp_penindak"
                                      value={values.ltp_penindak}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      placeholder=""
                                    />
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Label for="ltp_penindak_nip" sm={3}>
                                    NIP Penindak
                                  </Label>
                                  <Col sm={9}>
                                    <Input
                                      type="text"
                                      name="ltp_penindak_nip"
                                      id="ltp_penindak_nip"
                                      value={values.ltp_penindak_nip}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      placeholder=""
                                    />
                                  </Col>
                                </FormGroup>
                                <hr />
                              </div>
                              <div id="g_bast" style={{ display: "none" }}>
                                <CardTitle tag="h4">
                                  BERITA ACARA SERAH TERIMA BARANG BUKTI
                                </CardTitle>
                                <FormGroup row>
                                  <Label for="bast_nodok" sm={3}>
                                    Nomor
                                  </Label>
                                  <Col sm={9}>
                                    <div
                                      style={{
                                        width: "10%",
                                        display: "inline",
                                      }}
                                    >
                                      LI-
                                    </div>
                                    <Input
                                      type="text"
                                      name="bast_nodok"
                                      id="bast_nodok"
                                      value={values.bast_nodok}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      placeholder="93"
                                      style={{
                                        width: "10%",
                                        display: "inline",
                                      }}
                                    />
                                    <Input
                                      type="text"
                                      name="bast_nodok_kantor"
                                      id="bast_nodok_kantor"
                                      value={values.bast_nodok_kantor}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      placeholder="/WBC.08/KPP.MP.030201/"
                                      style={{
                                        width: "40%",
                                        display: "inline",
                                      }}
                                    />
                                    <Input
                                      type="text"
                                      name="bast_nodok_tahun"
                                      id="bast_nodok_tahun"
                                      value={values.bast_nodok_tahun}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      placeholder="2020"
                                      style={{
                                        width: "13%",
                                        display: "inline",
                                      }}
                                    />
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Label sm={3}>Tanggal Dokumen</Label>
                                  <Col sm={9}>
                                    <Input
                                      type="text"
                                      name="bast_tgldok"
                                      id="bast_tgldok"
                                      value={values.bast_tgldok}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      placeholder=""
                                    />
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Label for="bast_petugas" sm={3}>
                                    Petugas
                                  </Label>
                                  <Col sm={9}>
                                    <Input
                                      type="text"
                                      name="bast_petugas"
                                      id="bast_petugas"
                                      value={values.bast_petugas}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      placeholder=""
                                    />
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Label for="bast_petugas_pangkat" sm={3}>
                                    Pangkat
                                  </Label>
                                  <Col sm={9}>
                                    <Input
                                      type="text"
                                      name="bast_petugas_pangkat"
                                      id="bast_petugas_pangkat"
                                      value={values.bast_petugas_pangkat}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      placeholder=""
                                    />
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Label for="bast_petugas_nip" sm={3}>
                                    NIP Petugas
                                  </Label>
                                  <Col sm={9}>
                                    <Input
                                      type="text"
                                      name="bast_petugas_nip"
                                      id="bast_petugas_nip"
                                      value={values.bast_petugas_nip}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      placeholder=""
                                    />
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Label for="bast_petugas_jabatan" sm={3}>
                                    Jabatan
                                  </Label>
                                  <Col sm={9}>
                                    <Input
                                      type="text"
                                      name="bast_petugas_jabatan"
                                      id="bast_petugas_jabatan"
                                      value={values.bast_petugas_jabatan}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      placeholder=""
                                    />
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Label for="bast_penerima" sm={3}>
                                    Penerima
                                  </Label>
                                  <Col sm={9}>
                                    <Input
                                      type="text"
                                      name="bast_penerima"
                                      id="bast_penerima"
                                      value={values.bast_penerima}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      placeholder=""
                                    />
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Label for="bast_alamat" sm={3}>
                                    Alamat
                                  </Label>
                                  <Col sm={9}>
                                    <Input
                                      type="text"
                                      name="bast_alamat"
                                      id="bast_alamat"
                                      value={values.bast_alamat}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      placeholder=""
                                    />
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Label for="bast_jenispaket" sm={3}>
                                    Jenis Paket
                                  </Label>
                                  <Col sm={9}>
                                    <Input
                                      type="text"
                                      name="bast_jenispaket"
                                      id="bast_jenispaket"
                                      value={values.bast_jenispaket}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      placeholder=""
                                    />
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Label for="bast_nomorpaket" sm={3}>
                                    Nomor Paket
                                  </Label>
                                  <Col sm={9}>
                                    <Input
                                      type="text"
                                      name="bast_nomorpaket"
                                      id="bast_nomorpaket"
                                      value={values.bast_nomorpaket}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      placeholder=""
                                    />
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Label for="bast_berat" sm={3}>
                                    Berat Paket
                                  </Label>
                                  <Col sm={9}>
                                    <Input
                                      type="text"
                                      name="bast_berat"
                                      id="bast_berat"
                                      value={values.bast_berat}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      placeholder=""
                                    />
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Label for="bast_negaraasal" sm={3}>
                                    Negara Asal
                                  </Label>
                                  <Col sm={9}>
                                    <Input
                                      type="text"
                                      name="bast_negaraasal"
                                      id="bast_negaraasal"
                                      value={values.bast_negaraasal}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      placeholder=""
                                    />
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Label for="bast_jenis" sm={3}>
                                    Jenis
                                  </Label>
                                  <Col sm={9}>
                                    <Input
                                      type="text"
                                      name="bast_jenis"
                                      id="bast_jenis"
                                      value={values.bast_jenis}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      placeholder=""
                                    />
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Label for="bast_bentuk" sm={3}>
                                    Bentuk Fisik
                                  </Label>
                                  <Col sm={9}>
                                    <Input
                                      type="text"
                                      name="bast_bentuk"
                                      id="bast_bentuk"
                                      value={values.bast_bentuk}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      placeholder=""
                                    />
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Label for="bast_warna" sm={3}>
                                    Warna
                                  </Label>
                                  <Col sm={9}>
                                    <Input
                                      type="text"
                                      name="bast_warna"
                                      id="bast_warna"
                                      value={values.bast_warna}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      placeholder=""
                                    />
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Label for="bast_jumlah" sm={3}>
                                    Jumlah
                                  </Label>
                                  <Col sm={9}>
                                    <Input
                                      type="text"
                                      name="bast_jumlah"
                                      id="bast_jumlah"
                                      value={values.bast_jumlah}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      placeholder=""
                                    />
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Label for="bast_saksi1" sm={3}>
                                    Saksi 1
                                  </Label>
                                  <Col sm={9}>
                                    <Input
                                      type="text"
                                      name="bast_saksi1"
                                      id="bast_saksi1"
                                      value={values.bast_saksi1}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      placeholder=""
                                    />
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Label for="bast_saksi1_nip" sm={3}>
                                    NIP Saksi 1
                                  </Label>
                                  <Col sm={9}>
                                    <Input
                                      type="text"
                                      name="bast_saksi1_nip"
                                      id="bast_saksi1_nip"
                                      value={values.bast_saksi1_nip}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      placeholder=""
                                    />
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Label for="bast_saksi2" sm={3}>
                                    Saksi 2
                                  </Label>
                                  <Col sm={9}>
                                    <Input
                                      type="text"
                                      name="bast_saksi2"
                                      id="bast_saksi2"
                                      value={values.bast_saksi2}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      placeholder=""
                                    />
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Label for="bast_saksi2_nip" sm={3}>
                                    NIP Saksi 2
                                  </Label>
                                  <Col sm={9}>
                                    <Input
                                      type="text"
                                      name="bast_saksi2_nip"
                                      id="bast_saksi2_nip"
                                      value={values.bast_saksi2_nip}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      placeholder=""
                                    />
                                  </Col>
                                </FormGroup>
                                <hr />
                              </div>
                              <div id="g_bacacah" style={{ display: "none" }}>
                                <CardTitle tag="h4">
                                  BERITA ACARA PENCACAHAN
                                </CardTitle>
                                <FormGroup row>
                                  <Label for="bacacah_nodok" sm={3}>
                                    Nomor
                                  </Label>
                                  <Col sm={9}>
                                    <div
                                      style={{
                                        width: "10%",
                                        display: "inline",
                                      }}
                                    >
                                      LI-
                                    </div>
                                    <Input
                                      type="text"
                                      name="bacacah_nodok"
                                      id="bacacah_nodok"
                                      value={values.bacacah_nodok}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      placeholder="93"
                                      style={{
                                        width: "10%",
                                        display: "inline",
                                      }}
                                    />
                                    <Input
                                      type="text"
                                      name="bacacah_nodok_kantor"
                                      id="bacacah_nodok_kantor"
                                      value={values.bacacah_nodok_kantor}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      placeholder="/WBC.08/KPP.MP.030201/"
                                      style={{
                                        width: "40%",
                                        display: "inline",
                                      }}
                                    />
                                    <Input
                                      type="text"
                                      name="bacacah_nodok_tahun"
                                      id="bacacah_nodok_tahun"
                                      value={values.bacacah_nodok_tahun}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      placeholder="2020"
                                      style={{
                                        width: "13%",
                                        display: "inline",
                                      }}
                                    />
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Label sm={3}>Tanggal Dokumen</Label>
                                  <Col sm={9}>
                                    <Input
                                      type="text"
                                      name="bacacah_tgldok"
                                      id="bacacah_tgldok"
                                      value={values.bacacah_tgldok}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      placeholder=""
                                    />
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Label for="bacacah_pencacah1" sm={3}>
                                    Pencacah 1
                                  </Label>
                                  <Col sm={9}>
                                    <Input
                                      type="text"
                                      name="bacacah_pencacah1"
                                      id="bacacah_pencacah1"
                                      value={values.bacacah_pencacah1}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      placeholder=""
                                    />
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Label for="bacacah_pencacah1_nip" sm={3}>
                                    NIP Pencacah 1
                                  </Label>
                                  <Col sm={9}>
                                    <Input
                                      type="text"
                                      name="bacacah_pencacah1_nip"
                                      id="bacacah_pencacah1_nip"
                                      value={values.bacacah_pencacah1_nip}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      placeholder=""
                                    />
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Label for="bacacah_pencacah1_pangkat" sm={3}>
                                    Pangkat/Gol Pencacah 1
                                  </Label>
                                  <Col sm={9}>
                                    <Input
                                      type="text"
                                      name="bacacah_pencacah1_pangkat"
                                      id="bacacah_pencacah1_pangkat"
                                      value={values.bacacah_pencacah1_pangkat}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      placeholder=""
                                    />
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Label for="bacacah_pencacah1_jabatan" sm={3}>
                                    Jabatan Pencacah 1
                                  </Label>
                                  <Col sm={9}>
                                    <Input
                                      type="text"
                                      name="bacacah_pencacah1_jabatan"
                                      id="bacacah_pencacah1_jabatan"
                                      value={values.bacacah_pencacah1_jabatan}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      placeholder=""
                                    />
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Label for="bacacah_pencacah2" sm={3}>
                                    Pencacah 2
                                  </Label>
                                  <Col sm={9}>
                                    <Input
                                      type="text"
                                      name="bacacah_pencacah2"
                                      id="bacacah_pencacah2"
                                      value={values.bacacah_pencacah2}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      placeholder=""
                                    />
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Label for="bacacah_pencacah2_nip" sm={3}>
                                    NIP Pencacah 2
                                  </Label>
                                  <Col sm={9}>
                                    <Input
                                      type="text"
                                      name="bacacah_pencacah2_nip"
                                      id="bacacah_pencacah2_nip"
                                      value={values.bacacah_pencacah2_nip}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      placeholder=""
                                    />
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Label for="bacacah_pencacah2_pangkat" sm={3}>
                                    Pangkat/Gol Pencacah 2
                                  </Label>
                                  <Col sm={9}>
                                    <Input
                                      type="text"
                                      name="bacacah_pencacah2_pangkat"
                                      id="bacacah_pencacah2_pangkat"
                                      value={values.bacacah_pencacah2_pangkat}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      placeholder=""
                                    />
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Label for="bacacah_pencacah2_jabatan" sm={3}>
                                    Jabatan Pencacah 2
                                  </Label>
                                  <Col sm={9}>
                                    <Input
                                      type="text"
                                      name="bacacah_pencacah2_jabatan"
                                      id="bacacah_pencacah2_jabatan"
                                      value={values.bacacah_pencacah2_jabatan}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      placeholder=""
                                    />
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Label for="bacacah_jenispaket" sm={3}>
                                    Jenis Paket
                                  </Label>
                                  <Col sm={9}>
                                    <Input
                                      type="text"
                                      name="bacacah_jenispaket"
                                      id="bacacah_jenispaket"
                                      value={values.bacacah_jenispaket}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      placeholder=""
                                    />
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Label for="bacacah_nomorpaket" sm={3}>
                                    Nomor Paket
                                  </Label>
                                  <Col sm={9}>
                                    <Input
                                      type="text"
                                      name="bacacah_nomorpaket"
                                      id="bacacah_nomorpaket"
                                      value={values.bacacah_nomorpaket}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      placeholder=""
                                    />
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Label for="bacacah_negara" sm={3}>
                                    Negara Asal
                                  </Label>
                                  <Col sm={9}>
                                    <Input
                                      type="text"
                                      name="bacacah_negara"
                                      id="bacacah_negara"
                                      value={values.bacacah_negara}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      placeholder=""
                                    />
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Label for="bacacah_berat" sm={3}>
                                    Berat Paket
                                  </Label>
                                  <Col sm={9}>
                                    <Input
                                      type="text"
                                      name="bacacah_berat"
                                      id="bacacah_berat"
                                      value={values.bacacah_berat}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      placeholder=""
                                    />
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Label for="bacacah_penerima" sm={3}>
                                    Penerima
                                  </Label>
                                  <Col sm={9}>
                                    <Input
                                      type="text"
                                      name="bacacah_penerima"
                                      id="bacacah_penerima"
                                      value={values.bacacah_penerima}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      placeholder=""
                                    />
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Label for="bacacah_alamat" sm={3}>
                                    Alamat
                                  </Label>
                                  <Col sm={9}>
                                    <Input
                                      type="text"
                                      name="bacacah_alamat"
                                      id="bacacah_alamat"
                                      value={values.bacacah_alamat}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      placeholder=""
                                    />
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Label for="bacacah_jenis" sm={3}>
                                    Jenis
                                  </Label>
                                  <Col sm={9}>
                                    <Input
                                      type="text"
                                      name="bacacah_jenis"
                                      id="bacacah_jenis"
                                      value={values.bacacah_alamat}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      placeholder=""
                                    />
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Label for="bacacah_bentuk" sm={3}>
                                    Bentuk Fisik
                                  </Label>
                                  <Col sm={9}>
                                    <Input
                                      type="text"
                                      name="bacacah_bentuk"
                                      id="bacacah_bentuk"
                                      value={values.bacacah_bentuk}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      placeholder=""
                                    />
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Label for="bacacah_warna" sm={3}>
                                    Warna
                                  </Label>
                                  <Col sm={9}>
                                    <Input
                                      type="text"
                                      name="bacacah_warna"
                                      id="bacacah_warna"
                                      value={values.bacacah_warna}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      placeholder=""
                                    />
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Label for="bacacah_jumlah" sm={3}>
                                    Jumlah Bruto
                                  </Label>
                                  <Col sm={9}>
                                    <Input
                                      type="text"
                                      name="bacacah_jumlah"
                                      id="bacacah_jumlah"
                                      value={values.bacacah_jumlah}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      placeholder=""
                                    />
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Label for="bacacah_ahlipertama" sm={3}>
                                    Ahli Pertama
                                  </Label>
                                  <Col sm={9}>
                                    <Input
                                      type="text"
                                      name="bacacah_ahlipertama"
                                      id="bacacah_ahlipertama"
                                      value={values.bacacah_ahlipertama}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      placeholder=""
                                    />
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Label for="bacacah_ahlipertama_nip" sm={3}>
                                    NIP Ahli Pertama
                                  </Label>
                                  <Col sm={9}>
                                    <Input
                                      type="text"
                                      name="bacacah_ahlipertama_nip"
                                      id="bacacah_ahlipertama_nip"
                                      value={values.bacacah_ahlipertama_nip}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      placeholder=""
                                    />
                                  </Col>
                                </FormGroup>
                                <hr />
                              </div>
                              <Button
                                color="primary"
                                block
                                size="lg"
                                type="submit"
                              >
                                <i className="fa fa-print mr-2" />
                                Cetak Dokumen
                              </Button>
                            </CardBody>
                          </Card>
                        </Col>
                      </Row>
                    </div>
                  </form>
                  <div className="d-flex mb-5"></div>
                </div>
              );
            }}
          </Formik>
        </Container>
      </React.Fragment>
    );
  }

  _handleChangeTipedok = (e) => {
    const { name, value } = e.target;

    if (value == "biasa") {
      document.getElementById("biasa").style.display = "block";
      document.getElementById("npp").style.display = "none";
      // uncheck all when changing type
    } else {
      document.getElementById("biasa").style.display = "none";
      document.getElementById("npp").style.display = "block";
      // uncheck all when changing type
    }
  };

  _handleChangeSIInternal = (e) => {
    const checked = e.target.checked;

    if (checked) {
      document.getElementById("li_sumber_internal").style.display = "block";
    } else {
      document.getElementById("li_sumber_internal").style.display = "none";
    }
  };
  _handleChangeSIExternal = (e) => {
    const checked = e.target.checked;

    if (checked) {
      document.getElementById("li_sumber_external").style.display = "block";
    } else {
      document.getElementById("li_sumber_external").style.display = "none";
    }
  };

  _handleChangeDok = (e) => {
    if (e.target.checked) {
      // show the field group
      this.state.showIsian[e.target.id] = "g_" + e.target.id;
      // console.log(this.state.showIsian);
      this._toggleIsian();
    } else {
      // remove the field group
      delete this.state.showIsian[e.target.id];
      // console.log(this.state.showIsian);
      this._toggleIsian();
    }
  };

  _toggleIsian() {
    // hide all
    var group = document.querySelectorAll('[id^="g_"]');
    group.forEach(function (item) {
      document.getElementById(item.id).style.display = "none";
    });
    // loop and show selected
    {
      Object.entries(this.state.showIsian).map(([gkey, gvalue]) => {
        try {
          document.getElementById(gvalue).style.display = "block";
        } catch (err) {}
      });
    }
  }
}

export default AddPengawasan;
