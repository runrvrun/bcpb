import React from "react";
import moment from "moment";
import DatePicker, { setDefaultLocale } from "react-datepicker";

import {
  Button,
  Container,
  Row,
  Col,
  Card,
  CardTitle,
  CardBody,
  Form,
  FormGroup,
  Label,
  Input,
} from "../../../components";
import { ButtonInput } from "../../Forms/DatePicker/components";

import { HeaderMain } from "../../components/HeaderMain";
import { HeaderDemo } from "../../components/HeaderDemo";

setDefaultLocale("en");

const isianToShow = 
  {
    li: ["g_isian_li","g_sumber_informasi"],
    lki: ["g_isian_lki"],
    lkai: ["g_isian_lkai"],
    nhi: ["g_isian_nhi","g_infromasi_paket"],
    sbp: ["g_isian_sbp"],
    ba_pemeriksaan: ["g_isian_ba_pemeriksaan"],
    ba_contoh: ["g_ba_contoh"],
    ltp: ["g_isian_ltp"],
    bast: ["g_isian_bast"],
    ba_cacah: ["g_isian_ba_cacah"],
    li_n: ["g_isian_li_n","g_sumber_informasi_n"],
    lki_n: ["g_isian_lki_n"],
    lkai_n: ["g_isian_lkai_n"],
    nhi_n: ["g_isian_nhi_n"],
    sbp_n: ["g_isian_sbp_n"],
    ba_pemeriksaan_n: ["g_isian_ba_pemeriksaan_n"],
    ba_contoh_n: ["g_ba_contoh_n"],
    ltp_n: ["g_isian_ltp_n"],
    bast_n: ["g_isian_bast_n"],
    ba_cacah_n: ["g_isian_ba_cacah_n"],
  };

export class AddPengawasan extends React.Component {
  state = {
    tglDok: moment().toDate(),
    tglSii: moment().toDate(),
    tglSiiDok: moment().toDate(),
    tglSie: moment().toDate(),
    tglSieDok: moment().toDate(),
    tglDispLI: moment().toDate(),
    showIsian: []
  };

  render() {
    return (
      <React.Fragment>
        <Container>
          <HeaderMain title="Dokumen Pengawasan" className="mb-5 mt-4" />
          {/* START Header 1 */}
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
                  <Form>
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
                          <Input
                            type="checkbox"
                            name="li"
                            onChange={this._handleChangeDok}
                          />{" "}
                          LI
                        </Label>
                      </FormGroup>
                      <FormGroup check inline>
                        <Label check>
                          <Input
                            type="checkbox"
                            name="lki"
                            onChange={this._handleChangeDok}
                          />{" "}
                          LKI
                        </Label>
                      </FormGroup>
                      <FormGroup check inline>
                        <Label check>
                          <Input
                            type="checkbox"
                            name="lkai"
                            onChange={this._handleChangeDok}
                          />{" "}
                          LKAI
                        </Label>
                      </FormGroup>
                      <FormGroup check inline>
                        <Label check>
                          <Input
                            type="checkbox"
                            name="nhi"
                            onChange={this._handleChangeDok}
                          />{" "}
                          NHI
                        </Label>
                      </FormGroup>
                      <FormGroup check inline>
                        <Label check>
                          <Input
                            type="checkbox"
                            name="sbp"
                            onChange={this._handleChangeDok}
                          />{" "}
                          SBP
                        </Label>
                      </FormGroup>
                      <FormGroup check inline>
                        <Label check>
                          <Input
                            type="checkbox"
                            name="ba_pemeriksaan"
                            onChange={this._handleChangeDok}
                          />{" "}
                          BA Pemeriksaan
                        </Label>
                      </FormGroup>
                      <FormGroup check inline>
                        <Label check>
                          <Input
                            type="checkbox"
                            name="ba_contoh"
                            onChange={this._handleChangeDok}
                          />{" "}
                          BA Contoh
                        </Label>
                      </FormGroup>
                      <FormGroup check inline>
                        <Label check>
                          <Input
                            type="checkbox"
                            name="ltp"
                            onChange={this._handleChangeDok}
                          />{" "}
                          LTP
                        </Label>
                      </FormGroup>
                      <FormGroup check inline>
                        <Label check>
                          <Input
                            type="checkbox"
                            name="bast"
                            onChange={this._handleChangeDok}
                          />{" "}
                          BAST
                        </Label>
                      </FormGroup>
                      <FormGroup check inline>
                        <Label check>
                          <Input
                            type="checkbox"
                            name="ba_cacah"
                            onChange={this._handleChangeDok}
                          />{" "}
                          BA Cacah
                        </Label>
                      </FormGroup>
                    </FormGroup>
                    <FormGroup id="npp" style={{ display: "none" }}>
                    <FormGroup check inline>
                        <Label check>
                          <Input
                            type="checkbox"
                            name="li_n"
                            onChange={this._handleChangeDok}
                          />{" "}
                          LI-N
                        </Label>
                      </FormGroup>
                      <FormGroup check inline>
                        <Label check>
                          <Input
                            type="checkbox"
                            name="lki_n"
                            onChange={this._handleChangeDok}
                          />{" "}
                          LKI-N
                        </Label>
                      </FormGroup>
                      <FormGroup check inline>
                        <Label check>
                          <Input
                            type="checkbox"
                            name="lkai_n"
                            onChange={this._handleChangeDok}
                          />{" "}
                          LKAI-N
                        </Label>
                      </FormGroup>
                      <FormGroup check inline>
                        <Label check>
                          <Input
                            type="checkbox"
                            name="nhi_n"
                            onChange={this._handleChangeDok}
                          />{" "}
                          NHI-N
                        </Label>
                      </FormGroup>
                      <FormGroup check inline>
                        <Label check>
                          <Input
                            type="checkbox"
                            name="sbp_n"
                            onChange={this._handleChangeDok}
                          />{" "}
                          SBP-N
                        </Label>
                      </FormGroup>
                      <FormGroup check inline>
                        <Label check>
                          <Input
                            type="checkbox"
                            name="ba_pemeriksaan_n"
                            onChange={this._handleChangeDok}
                          />{" "}
                          BA Pemeriksaan-N
                        </Label>
                      </FormGroup>
                      <FormGroup check inline>
                        <Label check>
                          <Input
                            type="checkbox"
                            name="ba_contoh_n"
                            onChange={this._handleChangeDok}
                          />{" "}
                          BA Contoh-N
                        </Label>
                      </FormGroup>
                      <FormGroup check inline>
                        <Label check>
                          <Input
                            type="checkbox"
                            name="ltp_n"
                            onChange={this._handleChangeDok}
                          />{" "}
                          LTP-N
                        </Label>
                      </FormGroup>
                      <FormGroup check inline>
                        <Label check>
                          <Input
                            type="checkbox"
                            name="bast_n"
                            onChange={this._handleChangeDok}
                          />{" "}
                          BAST-N
                        </Label>
                      </FormGroup>
                      <FormGroup check inline>
                        <Label check>
                          <Input
                            type="checkbox"
                            name="ba_cacah_n"
                            onChange={this._handleChangeDok}
                          />{" "}
                          BA Cacah-N
                        </Label>
                      </FormGroup>
                    </FormGroup>
                  </Form>
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
                  <Form>
                    <FormGroup row>
                      <Label for="nomor_dokumen" sm={3}>
                        Nomor Dokumen
                      </Label>
                      <Col sm={9}>
                        <div style={{ width: "10%", display: "inline" }}>
                          LI-
                        </div>
                        <Input
                          type="number"
                          name="nomor_dokumen"
                          id="nomor_dokumen"
                          placeholder="93"
                          style={{ width: "10%", display: "inline" }}
                        />
                        <Input
                          type="text"
                          name="nomor_dokumen_kantor"
                          id="nomor_dokumen_kantor"
                          placeholder="/WBC.08/KPP.MP.030201/"
                          style={{ width: "40%", display: "inline" }}
                        />
                        <Input
                          type="number"
                          name="nomor_dokumen_tahun"
                          id="nomor_dokumen_tahun"
                          placeholder="2020"
                          style={{ width: "13%", display: "inline" }}
                        />
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Label for="tanggal_dokumen" sm={3}>
                        Tanggal Dokumen
                      </Label>
                      <Col sm={9}>
                        <DatePicker
                          name="tanggal_dokumen"
                          id="tanggal_dokumen"
                          customInput={<ButtonInput />}
                          selected={this.state.tglDok}
                          onChange={this._handleChangeTglDok}
                        />
                      </Col>
                    </FormGroup>
                    <FormGroup id="g_sumber_informasi" row  style={{ display: "none" }}>
                      <Label for="sumber_informasi" sm={3}>
                        Sumber Informasi
                      </Label>
                      <Col sm={9}>
                        <FormGroup>
                          <FormGroup check>
                            <Label check>
                              <Input
                                type="checkbox"
                                name="sumber_informasi_internal"
                                onChange={this._handleChangeSIInternal}
                              />{" "}
                              Internal
                            </Label>
                            <Col
                              id="sumber_informasi_internal"
                              style={{ display: "none" }}
                            >
                              <FormGroup row>
                                <Label
                                  for="sumber_informasi_internal_media"
                                  sm={4}
                                >
                                  Media
                                </Label>
                                <Col sm={8}>
                                  <Input
                                    type="text"
                                    name="sumber_informasi_internal_media"
                                    id="sumber_informasi_internal_media"
                                    placeholder=""
                                  />
                                </Col>
                              </FormGroup>
                              <FormGroup row>
                                <Label
                                  for="sumber_informasi_internal_tanggal_terima"
                                  sm={4}
                                >
                                  Tanggal Terima
                                </Label>
                                <Col sm={8}>
                                  <DatePicker
                                    name="sumber_informasi_internal_tanggal_terima"
                                    id="sumber_informasi_internal_tanggal_terima"
                                    customInput={<ButtonInput />}
                                    selected={this.state.tglSii}
                                    onChange={this._handleChangeTglSii}
                                  />
                                </Col>
                              </FormGroup>
                              <FormGroup row>
                                <Label
                                  for="sumber_informasi_internal_nomor_dokumen"
                                  sm={4}
                                >
                                  Nomor Dokumen
                                </Label>
                                <Col sm={8}>
                                  <Input
                                    type="text"
                                    name="sumber_informasi_internal_nomor_dokumen"
                                    id="sumber_informasi_internal_nomor_dokumen"
                                    placeholder=""
                                  />
                                </Col>
                              </FormGroup>
                              <FormGroup row>
                                <Label
                                  for="sumber_informasi_internal_tanggal_dokumen"
                                  sm={4}
                                >
                                  Tanggal Dokumen
                                </Label>
                                <Col sm={8}>
                                  <DatePicker
                                    name="sumber_informasi_internal_tanggal_dokumen"
                                    id="sumber_informasi_internal_tanggal_dokumen"
                                    customInput={<ButtonInput />}
                                    selected={this.state.tglSiiDok}
                                    onChange={this._handleChangeTglSiiDok}
                                  />
                                </Col>
                              </FormGroup>
                            </Col>
                          </FormGroup>
                        </FormGroup>
                        <FormGroup>
                          <FormGroup check>
                            <Label check>
                              <Input
                                type="checkbox"
                                name="sumber_informasi_external"
                                onChange={this._handleChangeSIExternal}
                              />{" "}
                              External
                            </Label>
                            <Col
                              id="sumber_informasi_external"
                              style={{ display: "none" }}
                            >
                              <FormGroup row>
                                <Label
                                  for="sumber_informasi_external_media"
                                  sm={4}
                                >
                                  Media
                                </Label>
                                <Col sm={8}>
                                  <Input
                                    type="text"
                                    name="sumber_informasi_external_media"
                                    id="sumber_informasi_external_media"
                                    placeholder=""
                                  />
                                </Col>
                              </FormGroup>
                              <FormGroup row>
                                <Label
                                  for="sumber_informasi_external_tanggal_terima"
                                  sm={4}
                                >
                                  Tanggal Terima
                                </Label>
                                <Col sm={8}>
                                  <DatePicker
                                    name="sumber_informasi_external_tanggal_terima"
                                    id="sumber_informasi_external_tanggal_terima"
                                    customInput={<ButtonInput />}
                                    selected={this.state.tglSie}
                                    onChange={this._handleChangeTglSie}
                                  />
                                </Col>
                              </FormGroup>
                              <FormGroup row>
                                <Label
                                  for="sumber_informasi_external_nomor_dokumen"
                                  sm={4}
                                >
                                  Nomor Dokumen
                                </Label>
                                <Col sm={8}>
                                  <Input
                                    type="text"
                                    name="sumber_informasi_external_nomor_dokumen"
                                    id="sumber_informasi_external_nomor_dokumen"
                                    placeholder=""
                                  />
                                </Col>
                              </FormGroup>
                              <FormGroup row>
                                <Label
                                  for="sumber_informasi_external_tanggal_dokumen"
                                  sm={4}
                                >
                                  Tanggal Dokumen
                                </Label>
                                <Col sm={8}>
                                  <DatePicker
                                    name="sumber_informasi_external_tanggal_dokumen"
                                    id="sumber_informasi_external_tanggal_dokumen"
                                    customInput={<ButtonInput />}
                                    selected={this.state.tglSieDok}
                                    onChange={this._handleChangeTglSieDok}
                                  />
                                </Col>
                              </FormGroup>
                            </Col>
                          </FormGroup>
                        </FormGroup>
                      </Col>
                    </FormGroup>
                    <FormGroup row id="g_isi_informasi" row  style={{ display: "none" }}>
                      <Label for="isi_informasi" sm={3}>
                        Isi informasi
                      </Label>
                      <Col sm={9}>
                        <Input
                          type="textarea"
                          name="isi_informasi"
                          id="isi_informasi"
                          placeholder=""
                        />
                      </Col>
                    </FormGroup>
                    <div id="g_infromasi_paket" style={{ display: "none" }}>
                    <FormGroup row>
                      <Label for="jenis_paket" sm={3}>
                        Jenis Paket
                      </Label>
                      <Col sm={9}>
                        <Input
                          type="text"
                          name="jenis_paket"
                          id="jenis_paket"
                          placeholder=""
                        />
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Label for="nomor_paket" sm={3}>
                        Nomor Paket
                      </Label>
                      <Col sm={9}>
                        <Input
                          type="text"
                          name="nomor_paket"
                          id="nomor_paket"
                          placeholder=""
                        />
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Label for="negara_asal" sm={3}>
                        Negara Asal
                      </Label>
                      <Col sm={9}>
                        <Input
                          type="text"
                          name="negara_asal"
                          id="negara_asal"
                          placeholder=""
                        />
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Label for="pengirim_paket" sm={3}>
                        Pengirim Paket
                      </Label>
                      <Col sm={9}>
                        <Input
                          type="text"
                          name="pengirim_paket"
                          id="pengirim_paket"
                          placeholder=""
                        />
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Label for="penerima_paket" sm={3}>
                        Nama Penerima
                      </Label>
                      <Col sm={9}>
                        <Input
                          type="text"
                          name="penerima_paket"
                          id="penerima_paket"
                          placeholder=""
                        />
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Label for="alamat_penerima" sm={3}>
                        Alamat Penerima
                      </Label>
                      <Col sm={9}>
                        <Input
                          type="textarea"
                          name="alamat_penerima"
                          id="alamat_penerima"
                          placeholder=""
                        />
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Label for="jenis_barang" sm={3}>
                        Jenis/Jumlah Barang
                      </Label>
                      <Col sm={9}>
                        <Input
                          type="text"
                          name="jenis_barang"
                          id="jenis_barang"
                          placeholder=""
                        />
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Label for="data_lainnya" sm={3}>
                        Data Lainnya
                      </Label>
                      <Col sm={9}>
                        <Input
                          type="text"
                          name="data_lainnya"
                          id="data_lainnya"
                          placeholder=""
                        />
                      </Col>
                    </FormGroup>
                    </div>
                    <div id="g_isian_li" style={{ display: "none" }}>
                      <hr />
                      <CardTitle tag="h4">LI</CardTitle>
                      <FormGroup row>
                        <Label for="disposisi_li" sm={3}>
                          Disposisi
                        </Label>
                        <Col sm={9}>
                          <Input
                            type="text"
                            name="disposisi_li"
                            id="disposisi_li"
                            placeholder=""
                          />
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Label for="tanggal_disposisi_li" sm={3}>
                          Tanggal Disposisi
                        </Label>
                        <Col sm={9}>
                          <DatePicker
                            name="tanggal_disposisi_li"
                            id="tanggal_disposisi_li"
                            customInput={<ButtonInput />}
                            selected={this.state.tglDispLI}
                            onChange={this._handleChangeTglDispLI}
                          />
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Label for="tindak_lanjut_li" sm={3}>
                          Tindak Lanjut
                        </Label>
                        <Col sm={9}>
                          <FormGroup check inline>
                            <Label check>
                              <Input
                                name="tindak_lanjut_li_klasifikasi"
                                type="radio"
                                name="radioInline"
                                defaultChecked
                              />{" "}
                              Klasifikasi
                            </Label>
                          </FormGroup>
                          <FormGroup check inline>
                            <Label check>
                              <Input
                                name="tindak_lanjut_li_arsip"
                                type="radio"
                                name="radioInline"
                              />{" "}
                              Arsip
                            </Label>
                          </FormGroup>
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Label for="isi_informasi" sm={3}>
                          Catatan
                        </Label>
                        <Col sm={9}>
                          <Input
                            type="textarea"
                            name="catatan_li"
                            id="catatan_li"
                            placeholder=""
                          />
                        </Col>
                      </FormGroup>                      
                      <FormGroup row>
                        <Label for="ahli_pertama_li" sm={3}>
                          Ahli Pertama
                        </Label>
                        <Col sm={9}>
                          <Input
                            type="text"
                            name="ahli_pertama_li"
                            id="ahli_pertama_li"
                            placeholder=""
                          />
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Label for="nip_ahli_pertama_li" sm={3}>
                          NIP Ahli Pertama
                        </Label>
                        <Col sm={9}>
                          <Input
                            type="text"
                            name="nip_ahli_pertama_li"
                            id="nip_ahli_pertama_li"
                            placeholder=""
                          />
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Label for="penyusun_li" sm={3}>
                          Penyusun
                        </Label>
                        <Col sm={9}>
                          <Input
                            type="text"
                            name="penyusun_li"
                            id="penyusun_li"
                            placeholder=""
                          />
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Label for="nip_penyusun_li" sm={3}>
                          NIP Penyusun
                        </Label>
                        <Col sm={9}>
                          <Input
                            type="text"
                            name="nip_penyusun_li"
                            id="nip_penyusun_li"
                            placeholder=""
                          />
                        </Col>
                      </FormGroup>
                    </div>
                    <div id="g_isian_lki" style={{ display: "none" }}>
                      <hr />
                      <CardTitle tag="h4">LKI</CardTitle>    
                      <FormGroup row>
                        <Label for="sumber" sm={3}>
                          Sumber & Validitas
                        </Label>
                        <Col sm={3}>
                          <Input
                            type="text"
                            name="sumber"
                            id="sumber"
                            placeholder="A"
                          />
                        </Col>
                        <Col sm={3}>
                          <Input
                            type="text"
                            name="validitas"
                            id="validitas"
                            placeholder="1"
                          />
                        </Col>
                      </FormGroup>   
                      <FormGroup row >
                      <Label for="kesimpulan_lki" sm={3}>
                        Kesimpulan
                      </Label>
                      <Col sm={9}>
                        <Input
                          type="textarea"
                          name="kesimpulan_lki"
                          id="kesimpulan_lki"
                          placeholder=""
                        />
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="disposisi_lki" sm={3}>
                          Disposisi
                        </Label>
                        <Col sm={9}>
                          <Input
                            type="text"
                            name="disposisi_lki"
                            id="disposisi_lki"
                            placeholder=""
                          />
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Label for="tanggal_disposisi_lki" sm={3}>
                          Tanggal Disposisi
                        </Label>
                        <Col sm={9}>
                          <DatePicker
                            name="tanggal_disposisi_lki"
                            id="tanggal_disposisi_lki"
                            customInput={<ButtonInput />}
                            selected={this.state.tglDispLI}
                            onChange={this._handleChangeTglDispLI}
                          />
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Label for="tindak_lanjut_lki" sm={3}>
                          Tindak Lanjut
                        </Label>
                        <Col sm={9}>
                          <FormGroup check inline>
                            <Label check>
                              <Input
                                name="tindak_lanjut_lki_analisis"
                                type="radio"
                                name="radioInline"
                                defaultChecked
                              />{" "}
                              Analisis
                            </Label>
                          </FormGroup>
                          <FormGroup check inline>
                            <Label check>
                              <Input
                                name="tindak_lanjut_lki_arsip"
                                type="radio"
                                name="radioInline"
                              />{" "}
                              Arsip
                            </Label>
                          </FormGroup>
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Label for="catatan_lki" sm={3}>
                          Catatan
                        </Label>
                        <Col sm={9}>
                          <Input
                            type="textarea"
                            name="catatan_lki"
                            id="catatan_lki"
                            placeholder=""
                          />
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Label for="ahli_pertama_lki" sm={3}>
                          Ahli Pertama
                        </Label>
                        <Col sm={9}>
                          <Input
                            type="text"
                            name="ahli_pertama_lki"
                            id="ahli_pertama_lki"
                            placeholder=""
                          />
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Label for="nip_ahli_pertama_lki" sm={3}>
                          NIP Ahli Pertama
                        </Label>
                        <Col sm={9}>
                          <Input
                            type="text"
                            name="nip_ahli_pertama_lki"
                            id="nip_ahli_pertama_lki"
                            placeholder=""
                          />
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Label for="penyusun_lki" sm={3}>
                          Penyusun
                        </Label>
                        <Col sm={9}>
                          <Input
                            type="text"
                            name="penyusun_lki"
                            id="penyusun_lki"
                            placeholder=""
                          />
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Label for="nip_penyusun_lki" sm={3}>
                          NIP Penyusun
                        </Label>
                        <Col sm={9}>
                          <Input
                            type="text"
                            name="nip_penyusun_lki"
                            id="nip_penyusun_lki"
                            placeholder=""
                          />
                        </Col>
                      </FormGroup>                 
                    </div>
                    <div id="g_isian_lkai" style={{ display: "none" }}>
                      <hr />
                      <CardTitle tag="h4">LKAI</CardTitle>         
                      <FormGroup row >
                      <Label for="kesimpulan" sm={3}>
                        Prosedur Analisis
                      </Label>
                      <Col sm={9}>
                        <Input
                          type="textarea"
                          name="prosedur_analisis"
                          id="prosedur_analisis"
                          placeholder=""
                        />
                      </Col>
                    </FormGroup>  
                    <FormGroup row >
                      <Label for="kesimpulan" sm={3}>
                        Hasil Analisis
                      </Label>
                      <Col sm={9}>
                        <Input
                          type="textarea"
                          name="hasil_analisis"
                          id="hasil_analisis"
                          placeholder=""
                        />
                      </Col>
                    </FormGroup>    
                    <FormGroup row >
                      <Label for="kesimpulan_lkai" sm={3}>
                        Kesimpulan
                      </Label>
                      <Col sm={9}>
                        <Input
                          type="textarea"
                          name="kesimpulan_lkai"
                          id="kesimpulan_lkai"
                          placeholder=""
                        />
                      </Col>
                    </FormGroup>     
                    <FormGroup row>
                        <Label for="rekomendasi_lkai" sm={3}>
                          Rekomendasi
                        </Label>
                        <Col sm={9}>
                          <FormGroup check inline>
                            <Label check>
                              <Input
                                name="rekomendasi_lkai_nhi"
                                type="radio"
                                name="radioInline"
                                defaultChecked
                              />{" "}
                              NHI
                            </Label>
                          </FormGroup>
                          <FormGroup check inline>
                            <Label check>
                              <Input
                                name="rekomendasi_lkai_nip"
                                type="radio"
                                name="radioInline"
                              />{" "}
                              NIP
                            </Label>
                          </FormGroup>
                          <FormGroup check inline>
                            <Label check>
                              <Input
                                name="rekomendasi_lkai_ni"
                                type="radio"
                                name="radioInline"
                              />{" "}
                              NI
                            </Label>
                          </FormGroup>
                          <FormGroup check inline>
                            <Label check>
                              <Input
                                name="rekomendasi_lkai_lainnya"
                                type="radio"
                                name="radioInline"
                              />{" "}
                              Rekomendasi Lainnya
                            </Label>
                            <Input
                            type="textarea"
                            name="rekomendasi_lkai_lainnya_text"
                            id="rekomendasi_lkai_lainnya_text"
                            placeholder=""
                           />
                          </FormGroup>
                          <FormGroup check inline>
                            <Label check>
                              <Input
                                name="rekomendasi_lkai_informasi"
                                type="radio"
                                name="radioInline"
                              />{" "}
                              Informasi Lainnya
                            </Label>
                            <Input
                            type="textarea"
                            name="rekomendasi_lkai_informasi_text"
                            id="rekomendasi_lkai_informasi_text"
                            placeholder=""
                           />
                          </FormGroup>
                        </Col>
                      </FormGroup>      
                      <FormGroup row>
                        <Label for="tujuan" sm={3}>
                          Tujuan
                        </Label>
                        <Col sm={9}>
                          <Input
                            type="text"
                            name="tujuan"
                            id="tujuan"
                            placeholder=""
                          />
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Label for="analis" sm={3}>
                          Analis
                        </Label>
                        <Col sm={9}>
                          <Input
                            type="text"
                            name="analis"
                            id="analis"
                            placeholder=""
                          />
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Label for="nip_analis" sm={3}>
                          NIP Analis
                        </Label>
                        <Col sm={9}>
                          <Input
                            type="text"
                            name="nip_analis"
                            id="nip_analis"
                            placeholder=""
                          />
                        </Col>
                      </FormGroup>   
                      <FormGroup row>
                        <Label for="keputusan_lkai" sm={3}>
                          Keputusan
                        </Label>
                        <Col sm={9}>
                          <FormGroup check inline>
                            <Label check>
                              <Input
                                name="keputusan_lkai_setuju"
                                type="radio"
                                name="radioInline"
                                defaultChecked
                              />{" "}
                              Setuju
                            </Label>
                          </FormGroup>
                          <FormGroup check inline>
                            <Label check>
                              <Input
                                name="keputusan_lkai_tidak_setuju"
                                type="radio"
                                name="radioInline"
                              />{" "}
                              Tidak Setuju
                            </Label>
                          </FormGroup>
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Label for="catatan_lkai" sm={3}>
                          Catatan
                        </Label>
                        <Col sm={9}>
                          <Input
                            type="text"
                            name="catatan_lkai"
                            id="catatan_lkai"
                            placeholder=""
                          />
                        </Col>
                      </FormGroup>   
                      <FormGroup row>
                        <Label for="ahli_pertama_li" sm={3}>
                          Ahli Pertama
                        </Label>
                        <Col sm={9}>
                          <Input
                            type="text"
                            name="ahli_pertama_li"
                            id="ahli_pertama_li"
                            placeholder=""
                          />
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Label for="nip_ahli_pertama_li" sm={3}>
                          NIP Ahli Pertama
                        </Label>
                        <Col sm={9}>
                          <Input
                            type="text"
                            name="nip_ahli_pertama_li"
                            id="nip_ahli_pertama_li"
                            placeholder=""
                          />
                        </Col>
                      </FormGroup>
                    </div>
                    <div id="g_isian_nhi" style={{ display: "none" }}>
                      <hr />
                      <CardTitle tag="h4">NHI</CardTitle>   
                      <FormGroup row>
                        <Label for="sifat" sm={3}>
                          Sifat
                        </Label>
                        <Col sm={9}>
                          <Input
                            type="text"
                            name="sifat"
                            id="sifat"
                            placeholder=""
                          />
                        </Col>
                      </FormGroup>       
                      <FormGroup row>
                        <Label for="kualifikasi" sm={3}>
                          Kualifikasi
                        </Label>
                        <Col sm={9}>
                          <Input
                            type="text"
                            name="kualifikasi"
                            id="kualifikasi"
                            placeholder=""
                          />
                        </Col>
                      </FormGroup>     
                      <FormGroup row>
                        <Label for="penerima_nhi" sm={3}>
                          Penerima
                        </Label>
                        <Col sm={9}>
                          <Input
                            type="text"
                            name="penerima_nhi"
                            id="penerima_nhi"
                            placeholder=""
                          />
                        </Col>
                      </FormGroup>  
                      <FormGroup row>
                      <Label for="indikasi" sm={3}>
                        Indikasi
                      </Label>
                      <Col sm={9}>
                        <Input
                          type="text"
                          name="indikasi"
                          id="indikasi"
                          placeholder=""
                        />
                      </Col>
                    </FormGroup>
                    </div>
                    <div id="g_isian_sbp" style={{ display: "none" }}>
                      <hr />
                      <CardTitle tag="h4">SBP</CardTitle>                        
                    </div>
                    <div id="g_isian_ba_pemeriksaan" style={{ display: "none" }}>
                      <hr />
                      <CardTitle tag="h4">BA Pemeriksaan</CardTitle>                        
                    </div>
                    <div id="g_isian_ba_contoh" style={{ display: "none" }}>
                      <hr />
                      <CardTitle tag="h4">BA Contoh</CardTitle>                        
                    </div>
                    <div id="g_isian_ltp" style={{ display: "none" }}>
                      <hr />
                      <CardTitle tag="h4">LTP</CardTitle>                        
                    </div>
                    <div id="g_isian_bast" style={{ display: "none" }}>
                      <hr />
                      <CardTitle tag="h4">BAST</CardTitle>                        
                    </div>
                    <div id="g_isian_ba_cacah" style={{ display: "none" }}>
                      <hr />
                      <CardTitle tag="h4">BA Cacah</CardTitle>                        
                    </div>                    
                    <Button color="primary" block size="lg">
                      <i className="fa fa-print mr-2" />
                      Cetak Dokumen
                    </Button>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }

  _handleChangeTglDok = (tglDok) => this.setState({ tglDok });
  _handleChangeTglSii = (tglSii) => this.setState({ tglSii });
  _handleChangeTglSiiDok = (tglSiiDok) => this.setState({ tglSiiDok });
  _handleChangeTglSie = (tglSie) => this.setState({ tglSie });
  _handleChangeTglSieDok = (tglSieDok) => this.setState({ tglSieDok });
  _handleChangeTglDispLI = (tglDispLI) => this.setState({ tglDispLI });

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
      document.getElementById("sumber_informasi_internal").style.display =
        "block";
    } else {
      document.getElementById("sumber_informasi_internal").style.display =
        "none";
    }
  };
  _handleChangeSIExternal = (e) => {
    const checked = e.target.checked;

    if (checked) {
      document.getElementById("sumber_informasi_external").style.display =
        "block";
    } else {
      document.getElementById("sumber_informasi_external").style.display =
        "none";
    }
  };

  _handleChangeDok = (e) => {
    if(e.target.checked){
      // show the field group
      this.state.showIsian[e.target.name] = isianToShow[e.target.name];
      // console.log(this.state.showIsian);
      this._toggleIsian();
    }else{
      // remove the field group
      delete this.state.showIsian[e.target.name];
      // console.log(this.state.showIsian);
      this._toggleIsian();
    }
  };

  _toggleIsian(){    
    // hide all
    {Object.entries(isianToShow).map(([ikey, ivalue]) => {
      {Object.entries(ivalue).map(([key, value]) => {
        try {
        document.getElementById(value).style.display = "none";
        }
        catch(err) {
        }
      })};
    })};
    // loop and show selected
    {Object.entries(this.state.showIsian).map(([gkey, gvalue]) => {
      {Object.entries(gvalue).map(([key, value]) => {
        try {
          document.getElementById(value).style.display = "block";
        }
        catch(err) {
        }
      })};
    })};
  }
  
}

export default AddPengawasan;
