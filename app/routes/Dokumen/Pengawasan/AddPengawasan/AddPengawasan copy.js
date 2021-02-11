import React from "react";
import moment from "moment";
import DatePicker, { setDefaultLocale } from "react-datepicker";
import axios from 'axios';

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

export class AddPengawasan extends React.Component {
  state = {
    showIsian: [],
    liTglDok: moment().toDate(),
    liTglSii: moment().toDate(),
    liTglSiiDok: moment().toDate(),
    liTglSie: moment().toDate(),
    liTglSieDok: moment().toDate(),
    liTglDisp: moment().toDate(),
    lkiTglDok: moment().toDate(),
    lkiTglDisp: moment().toDate(),
    lkaiTglDok: moment().toDate(),
    nhiTglDok: moment().toDate(),
    sbpTglDok: moment().toDate(),
    sbpTglSprin: moment().toDate(),
    bariksaTglDok: moment().toDate(),
    bariksaTglSprin: moment().toDate(),
    bariksaTglLahir: moment().toDate(),
    bacontohTglDok: moment().toDate(),
    bacontohTglSprin: moment().toDate(),
    ltpTglDok: moment().toDate(),
    ltpTglSprin: moment().toDate(),
    ltpTgl: moment().toDate(),
    ltpTglBeri: moment().toDate(),
    bastTglDok: moment().toDate(),
    bacacahTglDok: moment().toDate(),
  };

  onSubmit = () => { 
    const formData = new FormData(); 
    // get all selected dokumen
    // get only docs under selected type (biasa / npp)
    var tipeDok = document.querySelector('input[name="tipe_dokumen"]:checked').value;
    var dokCheck = document.getElementById(tipeDok); // dok checkbox group
    // get all checkbox input under dokCheck
    var doks = dokCheck.getElementsByTagName('input');
    var dokList = Array.prototype.slice.call(doks);
    // loop all checked and add to 'selected' for insert
    dokList.forEach(function(item){
      if(item.checked){
        formData.append('selected', item.name); 
      }
    });
    // get all form input
    // get all text and append to formData
    var inputtext = document.querySelectorAll('input[type=text]');
    var inputList = Array.prototype.slice.call(inputtext);
    inputList.forEach(function(item){
      formData.append(item.name, item.value); 
    });
    // get all textarea and append to formData
    var inputtext = document.querySelectorAll('textarea');
    var inputList = Array.prototype.slice.call(inputtext);
    inputList.forEach(function(item){
      formData.append(item.name, item.value); 
    });
    // get all number and append to formData
    var inputtext = document.querySelectorAll('input[type=number]');
    var inputList = Array.prototype.slice.call(inputtext);
    inputList.forEach(function(item){
      formData.append(item.name, item.value); 
    });
    // get all dates and append to formData // from state
    formData.append('li_tgldok', this.state.liTglDok); 
    formData.append('li_tglsii', this.state.liTglSii); 
    formData.append('li_tglsiidok', this.state.liTglSiiDok); 
    formData.append('li_tglsie', this.state.liTglSie); 
    formData.append('li_tglsiedok', this.state.liTglSieDok); 
    formData.append('li_tgldisp', this.state.liTglDisp); 
    formData.append('lki_tgldok', this.state.lkiTglDok); 
    formData.append('lki_tgldisp', this.state.lkiTglDisp); 
    formData.append('lkai_tgldok', this.state.lkaiTglDok); 
    formData.append('nhi_tgldok', this.state.nhiTglDok); 
    formData.append('sbp_tgldok', this.state.sbpTglDok); 
    formData.append('sbp_tglsprin', this.state.sbpTglSprin); 
    formData.append('bariksa_tgldok', this.state.bariksaTglDok); 
    formData.append('bariksa_tglsprin', this.state.bariksaTglSprin); 
    formData.append('bariksa_tgllahir', this.state.bariksaTglLahir); 
    formData.append('bacontoh_tgldok', this.state.bacontohTglDok); 
    formData.append('bacontoh_tglsprin', this.state.bacontohTglSprin); 
    formData.append('ltp_tgldok', this.state.ltpTglDok); 
    formData.append('ltp_tglsprin', this.state.ltpTglSprin); 
    formData.append('ltp_tgl', this.state.ltpTgl); 
    formData.append('ltp_tglberi', this.state.ltpTglBeri); 
    formData.append('bast_tgldok', this.state.bastTglDok); 
    formData.append('bacacah_tgldok', this.state.bacacahTglDok); 
    // get all checkbox and append to formData
    var inputtext = document.querySelectorAll('input[type=checkbox]');
    var inputList = Array.prototype.slice.call(inputtext);
    inputList.forEach(function(item){
      formData.append(item.name, item.checked); 
    });    
    // get all radio and append to formData
    var inputtext = document.querySelectorAll('input[type=radio]');
    var inputList = Array.prototype.slice.call(inputtext);
    inputList.forEach(function(item){
      // formData.append(item.name, document.getElementById(item.name).value); 
    });
    // console log formdata
    // for (var pair of formData.entries()) {
      // console.log(pair[0]+ ', ' + pair[1]); 
    // }
    var token = sessionStorage.getItem('token');
    const options = { headers: { Authorization: `Bearer ${token}` } };
    axios.post("http://localhost:8080/dokumen", formData, options); 
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
                            name="bariksa"
                            onChange={this._handleChangeDok}
                          />{" "}
                          BA Pemeriksaan
                        </Label>
                      </FormGroup>
                      <FormGroup check inline>
                        <Label check>
                          <Input
                            type="checkbox"
                            name="bacontoh"
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
                            name="bacacah"
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
                            name="lin"
                            onChange={this._handleChangeDok}
                          />{" "}
                          LI-N
                        </Label>
                      </FormGroup>
                      <FormGroup check inline>
                        <Label check>
                          <Input
                            type="checkbox"
                            name="lkin"
                            onChange={this._handleChangeDok}
                          />{" "}
                          LKI-N
                        </Label>
                      </FormGroup>
                      <FormGroup check inline>
                        <Label check>
                          <Input
                            type="checkbox"
                            name="lkain"
                            onChange={this._handleChangeDok}
                          />{" "}
                          LKAI-N
                        </Label>
                      </FormGroup>
                      <FormGroup check inline>
                        <Label check>
                          <Input
                            type="checkbox"
                            name="nhin"
                            onChange={this._handleChangeDok}
                          />{" "}
                          NHI-N
                        </Label>
                      </FormGroup>
                      <FormGroup check inline>
                        <Label check>
                          <Input
                            type="checkbox"
                            name="sbpn"
                            onChange={this._handleChangeDok}
                          />{" "}
                          SBP-N
                        </Label>
                      </FormGroup>
                      <FormGroup check inline>
                        <Label check>
                          <Input
                            type="checkbox"
                            name="bariksan"
                            onChange={this._handleChangeDok}
                          />{" "}
                          BA Pemeriksaan-N
                        </Label>
                      </FormGroup>
                      <FormGroup check inline>
                        <Label check>
                          <Input
                            type="checkbox"
                            name="bacontohn"
                            onChange={this._handleChangeDok}
                          />{" "}
                          BA Contoh-N
                        </Label>
                      </FormGroup>
                      <FormGroup check inline>
                        <Label check>
                          <Input
                            type="checkbox"
                            name="ltpn"
                            onChange={this._handleChangeDok}
                          />{" "}
                          LTP-N
                        </Label>
                      </FormGroup>
                      <FormGroup check inline>
                        <Label check>
                          <Input
                            type="checkbox"
                            name="bastn"
                            onChange={this._handleChangeDok}
                          />{" "}
                          BAST-N
                        </Label>
                      </FormGroup>
                      <FormGroup check inline>
                        <Label check>
                          <Input
                            type="checkbox"
                            name="bacacahn"
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
                    <div id="g_li" style={{ display: "none" }}>
                      <CardTitle tag="h4">LEMBAR INFORMASI</CardTitle>
                      <FormGroup row>
                        <Label for="li_nodok" sm={3}>
                          Nomor
                        </Label>
                        <Col sm={9}>
                          <div style={{ width: "10%", display: "inline" }}>
                            LI-
                          </div>
                          <Input
                            type="number"
                            name="li_nodok"
                            id="li_nodok"
                            placeholder="93"
                            style={{ width: "10%", display: "inline" }}
                          />
                          <Input
                            type="text"
                            name="li_nodok_kantor"
                            id="li_nodok_kantor"
                            placeholder="/WBC.08/KPP.MP.030201/"
                            style={{ width: "40%", display: "inline" }}
                          />
                          <Input
                            type="number"
                            name="li_nodok_tahun"
                            id="li_nodok_tahun"
                            placeholder="2020"
                            style={{ width: "13%", display: "inline" }}
                          />
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Label sm={3}>
                          Tanggal Dokumen
                        </Label>
                        <Col sm={9}>
                          <DatePicker
                            customInput={<ButtonInput />}
                            selected={this.state.liTglDok}
                            onChange={this._handleChangeLiTglDok}
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
                                <Input
                                  type="checkbox"
                                  name="li_sumber_internal"
                                  onChange={this._handleChangeSIInternal}
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
                                      placeholder=""
                                    />
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Label sm={4}>
                                    Tanggal Terima
                                  </Label>
                                  <Col sm={8}>
                                    <DatePicker
                                      customInput={<ButtonInput />}
                                      selected={this.state.liTglSii}
                                      onChange={this._handleChangeLiTglSii}
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
                                      placeholder=""
                                    />
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Label sm={4}>
                                    Tanggal Dokumen
                                  </Label>
                                  <Col sm={8}>
                                    <DatePicker
                                      customInput={<ButtonInput />}
                                      selected={this.state.liTglSiiDok}
                                      onChange={this._handleChangeLiTglSiiDok}
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
                                  name="li_sumber_external"
                                  onChange={this._handleChangeSIExternal}
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
                                      placeholder=""
                                    />
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Label sm={4}>
                                    Tanggal Terima
                                  </Label>
                                  <Col sm={8}>
                                    <DatePicker
                                      customInput={<ButtonInput />}
                                      selected={this.state.liTglSie}
                                      onChange={this._handleChangeLiTglSie}
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
                                      placeholder=""
                                    />
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Label sm={4}>
                                    Tanggal Dokumen
                                  </Label>
                                  <Col sm={8}>
                                    <DatePicker
                                      customInput={<ButtonInput />}
                                      selected={this.state.liTglSieDok}
                                      onChange={this._handleChangeLiTglSieDok}
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
                            placeholder=""
                          />
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Label sm={3}>Tanggal Disposisi</Label>
                        <Col sm={9}>
                          <DatePicker
                            customInput={<ButtonInput />}
                            selected={this.state.liTglDisp}
                            onChange={this._handleChangeLiTglDisp}
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
                                name="radioInline"
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
                                name="radioInline"
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
                            placeholder=""
                          />
                        </Col>
                      </FormGroup>
                      <hr />
                    </div>
                    <div id="g_lki" style={{ display: "none" }}>
                      <CardTitle tag="h4">LEMBAR KLASIFIKASI INFORMASI</CardTitle>
                      <FormGroup row>
                        <Label for="lki_nodok" sm={3}>
                          Nomor
                        </Label>
                        <Col sm={9}>
                          <div style={{ width: "10%", display: "inline" }}>
                            LKI-
                          </div>
                          <Input
                            type="number"
                            name="lki_nodok"
                            id="lki_nodok"
                            placeholder="93"
                            style={{ width: "10%", display: "inline" }}
                          />
                          <Input
                            type="text"
                            name="lki_nodok_kantor"
                            id="lki_nodok_kantor"
                            placeholder="/WBC.08/KPP.MP.030201/"
                            style={{ width: "40%", display: "inline" }}
                          />
                          <Input
                            type="number"
                            name="lki_nodok_tahun"
                            id="lki_nodok_tahun"
                            placeholder="2020"
                            style={{ width: "13%", display: "inline" }}
                          />
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Label sm={3}>Tanggal Dokumen</Label>
                        <Col sm={9}>
                          <DatePicker
                            customInput={<ButtonInput />}
                            selected={this.state.lkiTglDok}
                            onChange={this._handleChangeLkiTglDok}
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
                            placeholder=""
                          />
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Label sm={3}>Tanggal Disposisi</Label>
                        <Col sm={9}>
                          <DatePicker
                            customInput={<ButtonInput />}
                            selected={this.state.lkiTglDisp}
                            onChange={this._handleChangeLkiTglDisp}
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
                                name="radioInline"
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
                                name="radioInline"
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
                            placeholder=""
                          />
                        </Col>
                      </FormGroup>
                      <hr />
                    </div>
                    <div id="g_lkai" style={{ display: "none" }}>
                      <CardTitle tag="h4">LEMBAR KERJA ANALISIS INTELIJEN</CardTitle>
                      <FormGroup row>
                        <Label for="lkai_nodok" sm={3}>
                          Nomor
                        </Label>
                        <Col sm={9}>
                          <div style={{ width: "10%", display: "inline" }}>
                            LI-
                          </div>
                          <Input
                            type="number"
                            name="lkai_nodok"
                            id="lkai_nodok"
                            placeholder="93"
                            style={{ width: "10%", display: "inline" }}
                          />
                          <Input
                            type="text"
                            name="lkai_nodok_kantor"
                            id="lkai_nodok_kantor"
                            placeholder="/WBC.08/KPP.MP.030201/"
                            style={{ width: "40%", display: "inline" }}
                          />
                          <Input
                            type="number"
                            name="lkai_nodok_tahun"
                            id="lkai_nodok_tahun"
                            placeholder="2020"
                            style={{ width: "13%", display: "inline" }}
                          />
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Label sm={3}>Tanggal Dokumen</Label>
                        <Col sm={9}>
                          <DatePicker
                            customInput={<ButtonInput />}
                            selected={this.state.lkaiTglDok}
                            onChange={this._handleChangeLkaiTglDok}
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
                                name="radioInline"
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
                                name="radioInline"
                              />{" "}
                              NIP
                            </Label>
                          </FormGroup>
                          <FormGroup check inline>
                            <Label check>
                              <Input
                                name="lkai_rekomendasi_ni"
                                type="radio"
                                name="radioInline"
                              />{" "}
                              NI
                            </Label>
                          </FormGroup>
                          <FormGroup check inline>
                            <Label check>
                              <Input
                                name="lkai_rekomendasi_lainnya"
                                type="radio"
                                name="radioInline"
                              />{" "}
                              Rekomendasi Lainnya
                            </Label>
                            <Input
                              type="textarea"
                              name="lkai_rekomendasi_lainnya_text"
                              id="lkai_rekomendasi_lainnya_text"
                              placeholder=""
                            />
                          </FormGroup>
                          <FormGroup check inline>
                            <Label check>
                              <Input
                                name="lkai_rekomendasi_informasi"
                                type="radio"
                                name="radioInline"
                              />{" "}
                              Informasi Lainnya
                            </Label>
                            <Input
                              type="textarea"
                              name="lkai_rekomendasi_informasi_text"
                              id="lkai_rekomendasi_informasi_text"
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
                                name="radioInline"
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
                                name="radioInline"
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
                            placeholder=""
                          />
                        </Col>
                      </FormGroup>
                      <hr />
                    </div>
                    <div id="g_nhi" style={{ display: "none" }}>
                      <CardTitle tag="h4">NOTA HASIL INTELIJEN</CardTitle>
                      <FormGroup row>
                        <Label for="nhi_nodok" sm={3}>
                          Nomor
                        </Label>
                        <Col sm={9}>
                          <div style={{ width: "10%", display: "inline" }}>
                            NHI-
                          </div>
                          <Input
                            type="number"
                            name="nhi_nodok"
                            id="nhi_nodok"
                            placeholder="93"
                            style={{ width: "10%", display: "inline" }}
                          />
                          <Input
                            type="text"
                            name="nhi_nodok_kantor"
                            id="nhi_nodok_kantor"
                            placeholder="/WBC.08/KPP.MP.030201/"
                            style={{ width: "40%", display: "inline" }}
                          />
                          <Input
                            type="number"
                            name="nhi_nodok_tahun"
                            id="nhi_nodok_tahun"
                            placeholder="2020"
                            style={{ width: "13%", display: "inline" }}
                          />
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Label sm={3}>Tanggal Dokumen</Label>
                        <Col sm={9}>
                          <DatePicker
                            customInput={<ButtonInput />}
                            selected={this.state.nhiTglDok}
                            onChange={this._handleChangeNhiTglDok}
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
                            placeholder=""
                          />
                        </Col>
                      </FormGroup>
                      <hr />
                    </div>
                    <div id="g_sbp" style={{ display: "none" }}>
                      <CardTitle tag="h4">SURAT BUKTI PENINDAKAN</CardTitle>
                      <FormGroup row>
                        <Label for="sbp_nodok" sm={3}>
                          Nomor
                        </Label>
                        <Col sm={9}>
                          <div style={{ width: "10%", display: "inline" }}>
                            LI-
                          </div>
                          <Input
                            type="number"
                            name="sbp_nodok"
                            id="sbp_nodok"
                            placeholder="93"
                            style={{ width: "10%", display: "inline" }}
                          />
                          <Input
                            type="text"
                            name="sbp_nodok_kantor"
                            id="sbp_nodok_kantor"
                            placeholder="/WBC.08/KPP.MP.030201/"
                            style={{ width: "40%", display: "inline" }}
                          />
                          <Input
                            type="number"
                            name="sbp_nodok_tahun"
                            id="sbp_nodok_tahun"
                            placeholder="2020"
                            style={{ width: "13%", display: "inline" }}
                          />
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Label sm={3}>Tanggal Dokumen</Label>
                        <Col sm={9}>
                          <DatePicker
                            customInput={<ButtonInput />}
                            selected={this.state.sbpTglDok}
                            onChange={this._handleChangeSbpTglDok}
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
                            placeholder=""
                          />
                        </Col>
                      </FormGroup>                      
                      <FormGroup row>
                        <Label sm={3}>Tanggal Surat Perintah</Label>
                        <Col sm={9}>
                          <DatePicker
                            customInput={<ButtonInput />}
                            selected={this.state.sbpTglSprin}
                            onChange={this._handleChangeSbpTglSprin}
                          />
                        </Col>
                      </FormGroup>
                      <FormGroup>
                            <FormGroup check>
                              <Label check>
                                Sarana Pengangkut
                              </Label>
                                <FormGroup row>
                                  <Label
                                    for="sbp_sarana_nama"
                                    sm={4}
                                  >
                                    Nama
                                  </Label>
                                  <Col sm={8}>
                                    <Input
                                      type="text"
                                      name="sbp_sarana_nama"
                                      id="sbp_sarana_nama"
                                      placeholder=""
                                    />
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Label
                                    for="sbp_sarana_bendera"
                                    sm={4}
                                  >
                                    Bendera
                                  </Label>
                                  <Col sm={8}>
                                    <Input
                                      type="text"
                                      name="sbp_sarana_bendera"
                                      id="sbp_sarana_bendera"
                                      placeholder=""
                                    />
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Label
                                    for="sbp_sarana_noreg"
                                    sm={4}
                                  >
                                    No. Register
                                  </Label>
                                  <Col sm={8}>
                                    <Input
                                      type="text"
                                      name="sbp_sarana_noreg"
                                      id="sbp_sarana_noreg"
                                      placeholder=""
                                    />
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Label
                                    for="sbp_sarana_novoy"
                                    sm={4}
                                  >
                                    No Voy
                                  </Label>
                                  <Col sm={8}>
                                    <Input
                                      type="text"
                                      name="sbp_sarana_novoy"
                                      id="sbp_sarana_novoy"
                                      placeholder=""
                                    />
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Label
                                    for="sbp_sarana_kapasitas"
                                    sm={4}
                                  >
                                    Kapasitas Muatan (GT)
                                  </Label>
                                  <Col sm={8}>
                                    <Input
                                      type="text"
                                      name="sbp_sarana_kapasitas"
                                      id="sbp_sarana_kapasitas"
                                      placeholder=""
                                    />
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Label
                                    for="sbp_sarana_mrek"
                                    sm={4}
                                  >
                                    Merk/Kapasitas Mesin
                                  </Label>
                                  <Col sm={8}>
                                    <Input
                                      type="text"
                                      name="sbp_sarana_merk"
                                      id="sbp_sarana_merk"
                                      placeholder=""
                                    />
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Label
                                    for="sbp_sarana_nahkoda"
                                    sm={4}
                                  >
                                    Nahkoda
                                  </Label>
                                  <Col sm={8}>
                                    <Input
                                      type="text"
                                      name="sbp_sarana_nahkoda"
                                      id="sbp_sarana_nahkoda"
                                      placeholder=""
                                    />
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Label
                                    for="sbp_sarana_kapal"
                                    sm={4}
                                  >
                                    Kapal
                                  </Label>
                                  <Col sm={8}>
                                    <Input
                                      type="text"
                                      name="sbp_sarana_kapal"
                                      id="sbp_sarana_kapal"
                                      placeholder=""
                                    />
                                  </Col>
                                </FormGroup>                                
                            </FormGroup>
                            <FormGroup check>
                              <Label check>
                                Barang
                              </Label>
                                <FormGroup row>
                                  <Label
                                    for="sbp_barang_kemasan"
                                    sm={4}
                                  >
                                    Jenis Kemasan
                                  </Label>
                                  <Col sm={8}>
                                    <Input
                                      type="text"
                                      name="sbp_barang_kemasan"
                                      id="sbp_barang_kemasan"
                                      placeholder=""
                                    />
                                  </Col>
                                </FormGroup>  
                                <FormGroup row>
                                  <Label
                                    for="sbp_barang_jumlah"
                                    sm={4}
                                  >
                                    Jumlah Kemasan
                                  </Label>
                                  <Col sm={8}>
                                    <Input
                                      type="text"
                                      name="sbp_barang_jumlah"
                                      id="sbp_barang_jumlah"
                                      placeholder=""
                                    />
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Label
                                    for="sbp_barang_jenis"
                                    sm={4}
                                  >
                                    Jumlah/Jenis Barang
                                  </Label>
                                  <Col sm={8}>
                                    <Input
                                      type="text"
                                      name="sbp_barang_jenis"
                                      id="sbp_barang_jenis"
                                      placeholder=""
                                    />
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Label
                                    for="sbp_barang_berat"
                                    sm={4}
                                  >
                                    Berat Paket
                                  </Label>
                                  <Col sm={8}>
                                    <Input
                                      type="text"
                                      name="sbp_barang_berat"
                                      id="sbp_barang_berat"
                                      placeholder=""
                                    />
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Label
                                    for="sbp_barang_pemilik"
                                    sm={4}
                                  >
                                    Pemilik Barang/Alamat
                                  </Label>
                                  <Col sm={8}>
                                    <Input
                                      type="text"
                                      name="sbp_barang_pemilik"
                                      id="sbp_barang_pemilik"
                                      placeholder=""
                                    />
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Label
                                    for="sbp_barang_negara"
                                    sm={4}
                                  >
                                    Negara Asal
                                  </Label>
                                  <Col sm={8}>
                                    <Input
                                      type="text"
                                      name="sbp_barang_negara"
                                      id="sbp_barang_negara"
                                      placeholder=""
                                    />
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Label
                                    for="sbp_barang_nomor"
                                    sm={4}
                                  >
                                    Jenis/Nomor Paket
                                  </Label>
                                  <Col sm={8}>
                                    <Input
                                      type="text"
                                      name="sbp_barang_nomor"
                                      id="sbp_barang_nomor"
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
                                  placeholder=""
                                />
                              </Col>
                              <Col sm={4}>
                                <Input
                                  type="text"
                                  name="sbp_waktu_end"
                                  id="sbp_waktu_end"
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
                                  placeholder=""
                                />
                              </Col>
                            </FormGroup>
                          </FormGroup>
                      <hr />
                    </div>
                    <div id="g_bariksa" style={{ display: "none" }}>
                      <CardTitle tag="h4">BERITA ACARA PEMERIKSAAN</CardTitle>
                      <FormGroup row>
                        <Label for="bariksa_nodok" sm={3}>
                          Nomor
                        </Label>
                        <Col sm={9}>
                          <div style={{ width: "10%", display: "inline" }}>
                            BA-
                          </div>
                          <Input
                            type="number"
                            name="bariksa_nodok"
                            id="bariksa_nodok"
                            placeholder="93"
                            style={{ width: "10%", display: "inline" }}
                          />
                          <Input
                            type="text"
                            name="bariksa_nodok_kantor"
                            id="bariksa_nodok_kantor"
                            placeholder="/WBC.08/KPP.MP.030201/"
                            style={{ width: "40%", display: "inline" }}
                          />/PERIKSA/
                          <Input
                            type="number"
                            name="bariksa_nodok_tahun"
                            id="bariksa_nodok_tahun"
                            placeholder="2020"
                            style={{ width: "13%", display: "inline" }}
                          />
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Label sm={3}>Tanggal Dokumen</Label>
                        <Col sm={9}>
                          <DatePicker
                            customInput={<ButtonInput />}
                            selected={this.state.bariksaTglDok}
                            onChange={this._handleChangeBariksaTglDok}
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
                            placeholder=""
                          />
                        </Col>
                      </FormGroup>                  
                      <FormGroup row>
                        <Label sm={3}>Tanggal Surat Perintah</Label>
                        <Col sm={9}>
                          <DatePicker
                            customInput={<ButtonInput />}
                            selected={this.state.bariksaTglSprin}
                            onChange={this._handleChangeBariksaTglSprin}
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
                            placeholder=""
                          />
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Label for="bariksa_pemeriksa1_pangkat" sm={3}>
                          Pangkat/Gol Pemeriksa 1
                        </Label>
                        <Col sm={9}>
                          <Input
                            type="text"
                            name="bariksa_pemeriksa1_pangkat"
                            id="bariksa_pemeriksa1_pangkat"
                            placeholder=""
                          />
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Label for="bariksa_pemeriksa1_jabatan" sm={3}>
                          Jabatan Pemeriksa 1
                        </Label>
                        <Col sm={9}>
                          <Input
                            type="text"
                            name="bariksa_pemeriksa1_jabatan"
                            id="bariksa_pemeriksa1_jabatan"
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
                            placeholder=""
                          />
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Label for="bariksa_pemeriksa2_pangkat" sm={3}>
                          Pangkat/Gol Pemeriksa 2
                        </Label>
                        <Col sm={9}>
                          <Input
                            type="text"
                            name="bariksa_pemeriksa2_pangkat"
                            id="bariksa_pemeriksa2_pangkat"
                            placeholder=""
                          />
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Label for="bariksa_pemeriksa2_jabatan" sm={3}>
                          Jabatan Pemeriksa 2
                        </Label>
                        <Col sm={9}>
                          <Input
                            type="text"
                            name="bariksa_pemeriksa2_jabatan"
                            id="bariksa_pemeriksa2_jabatan"
                            placeholder=""
                          />
                        </Col>
                      </FormGroup>
                      <FormGroup check>
                              <Label check>
                                Barang
                              </Label>
                                <FormGroup row>
                                  <Label
                                    for="bariksa_barang_pemilik"
                                    sm={4}
                                  >
                                    Pemilik Barang
                                  </Label>
                                  <Col sm={8}>
                                    <Input
                                      type="text"
                                      name="bariksa_barang_pemilik"
                                      id="bariksa_barang_pemilik"
                                      placeholder=""
                                    />
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Label
                                    for="bariksa_barang_kemasan"
                                    sm={4}
                                  >
                                    Jenis Kemasan
                                  </Label>
                                  <Col sm={8}>
                                    <Input
                                      type="text"
                                      name="bariksa_barang_kemasan"
                                      id="bariksa_barang_kemasan"
                                      placeholder=""
                                    />
                                  </Col>
                                </FormGroup>  
                                <FormGroup row>
                                  <Label
                                    for="bariksa_barang_jumlah"
                                    sm={4}
                                  >
                                    Jumlah Kemasan
                                  </Label>
                                  <Col sm={8}>
                                    <Input
                                      type="text"
                                      name="bariksa_barang_jumlah"
                                      id="bariksa_barang_jumlah"
                                      placeholder=""
                                    />
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Label
                                    for="bariksa_barang_berat"
                                    sm={4}
                                  >
                                    Berat Paket
                                  </Label>
                                  <Col sm={8}>
                                    <Input
                                      type="text"
                                      name="bariksa_barang_berat"
                                      id="bariksa_barang_berat"
                                      placeholder=""
                                    />
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Label
                                    for="bariksa_barang_jenis"
                                    sm={4}
                                  >
                                    Jumlah/Jenis Barang
                                  </Label>
                                  <Col sm={8}>
                                    <Input
                                      type="text"
                                      name="bariksa_barang_jenis"
                                      id="bariksa_barang_jenis"
                                      placeholder=""
                                    />
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Label
                                    for="bariksa_barang_nomor"
                                    sm={4}
                                  >
                                    Jenis/Nomor Paket
                                  </Label>
                                  <Col sm={8}>
                                    <Input
                                      type="text"
                                      name="bariksa_barang_nomor"
                                      id="bariksa_barang_nomor"
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
                            placeholder=""
                          />
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Label sm={3}>Tanggal Lahir Pengangkut</Label>
                        <Col sm={9}>
                        <DatePicker
                            customInput={<ButtonInput />}
                            selected={this.state.bariksaTglLahir}
                            onChange={this._handleChangeBariksaTglLahir}
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
                                  placeholder=""
                                />
                              </Col>
                            </FormGroup>
                      <hr />
                    </div>
                    <div id="g_bacontoh" style={{ display: "none" }}>
                      <CardTitle tag="h4">BERITA ACARA PENGAMBILAN CONTOH</CardTitle>
                      <FormGroup row>
                        <Label for="bacontoh_nodok" sm={3}>
                          Nomor
                        </Label>
                        <Col sm={9}>
                          <div style={{ width: "10%", display: "inline" }}>
                            LI-
                          </div>
                          <Input
                            type="number"
                            name="bacontoh_nodok"
                            id="bacontoh_nodok"
                            placeholder="93"
                            style={{ width: "10%", display: "inline" }}
                          />
                          <Input
                            type="text"
                            name="bacontoh_nodok_kantor"
                            id="bacontoh_nodok_kantor"
                            placeholder="/WBC.08/KPP.MP.030201/"
                            style={{ width: "40%", display: "inline" }}
                          />
                          <Input
                            type="number"
                            name="bacontoh_nodok_tahun"
                            id="bacontoh_nodok_tahun"
                            placeholder="2020"
                            style={{ width: "13%", display: "inline" }}
                          />
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Label sm={3}>Tanggal Dokumen</Label>
                        <Col sm={9}>
                          <DatePicker
                            customInput={<ButtonInput />}
                            selected={this.state.bacontohTglDok}
                            onChange={this._handleChangeBacontohTglDok}
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
                            placeholder=""
                          />
                        </Col>
                      </FormGroup>                  
                      <FormGroup row>
                        <Label sm={3}>Tanggal Surat Perintah</Label>
                        <Col sm={9}>
                          <DatePicker
                            customInput={<ButtonInput />}
                            selected={this.state.bacontohTglSprin}
                            onChange={this._handleChangeBacontohTglSprin}
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
                            placeholder=""
                          />
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Label for="bacontoh_pengambil1_pangkat" sm={3}>
                          Pangkat/Gol Pengambil 1
                        </Label>
                        <Col sm={9}>
                          <Input
                            type="text"
                            name="bacontoh_pengambil1_pangkat"
                            id="bacontoh_pengambil1_pangkat"
                            placeholder=""
                          />
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Label for="bacontoh_pengambil1_jabatan" sm={3}>
                          Jabatan Pengambil 1
                        </Label>
                        <Col sm={9}>
                          <Input
                            type="text"
                            name="bacontoh_pengambil1_jabatan"
                            id="bacontoh_pengambil1_jabatan"
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
                            placeholder=""
                          />
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Label for="bacontoh_pengambil2_pangkat" sm={3}>
                          Pangkat/Gol Pengambil 2
                        </Label>
                        <Col sm={9}>
                          <Input
                            type="text"
                            name="bacontoh_pengambil2_pangkat"
                            id="bacontoh_pengambil2_pangkat"
                            placeholder=""
                          />
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Label for="bacontoh_pengambil2_jabatan" sm={3}>
                          Jabatan Pengambil 2
                        </Label>
                        <Col sm={9}>
                          <Input
                            type="text"
                            name="bacontoh_pengambil2_jabatan"
                            id="bacontoh_pengambil2_jabatan"
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
                            placeholder=""
                          />
                        </Col>
                      </FormGroup>
                      <hr />
                    </div>
                    <div id="g_ltp" style={{ display: "none" }}>
                      <CardTitle tag="h4">LAPORAN TUGAS PENINDAKAN</CardTitle>
                      <FormGroup row>
                        <Label for="ltp_nodok" sm={3}>
                          Nomor
                        </Label>
                        <Col sm={9}>
                          <div style={{ width: "10%", display: "inline" }}>
                            LI-
                          </div>
                          <Input
                            type="number"
                            name="ltp_nodok"
                            id="ltp_nodok"
                            placeholder="93"
                            style={{ width: "10%", display: "inline" }}
                          />
                          <Input
                            type="text"
                            name="ltp_nodok_kantor"
                            id="ltp_nodok_kantor"
                            placeholder="/WBC.08/KPP.MP.030201/"
                            style={{ width: "40%", display: "inline" }}
                          />
                          <Input
                            type="number"
                            name="ltp_nodok_tahun"
                            id="ltp_nodok_tahun"
                            placeholder="2020"
                            style={{ width: "13%", display: "inline" }}
                          />
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Label sm={3}>Tanggal Dokumen</Label>
                        <Col sm={9}>
                          <DatePicker
                            customInput={<ButtonInput />}
                            selected={this.state.ltpTglDok}
                            onChange={this._handleChangeLtpTglDok}
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
                            placeholder=""
                          />
                        </Col>
                      </FormGroup>                  
                      <FormGroup row>
                        <Label sm={3}>Tanggal Surat Perintah</Label>
                        <Col sm={9}>
                          <DatePicker
                            customInput={<ButtonInput />}
                            selected={this.state.ltpTglSprin}
                            onChange={this._handleChangeLtpTglSprin}
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
                            placeholder=""
                          />
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Label sm={3}>Tanggal</Label>
                        <Col sm={9}>
                          <DatePicker
                            customInput={<ButtonInput />}
                            selected={this.state.ltpTgl}
                            onChange={this._handleChangeLtpTgl}
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
                            placeholder=""
                          />
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Label sm={3}>Tanggal</Label>
                        <Col sm={9}>
                          <DatePicker
                            customInput={<ButtonInput />}
                            selected={this.state.ltpTglBeri}
                            onChange={this._handleChangeLtpTglBeri}
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
                            placeholder=""
                          />
                        </Col>
                      </FormGroup>
                      <hr />
                    </div>
                    <div id="g_bast" style={{ display: "none" }}>
                      <CardTitle tag="h4">BERITA ACARA SERAH TERIMA BARANG BUKTI</CardTitle>
                      <FormGroup row>
                        <Label for="bast_nodok" sm={3}>
                          Nomor
                        </Label>
                        <Col sm={9}>
                          <div style={{ width: "10%", display: "inline" }}>
                            LI-
                          </div>
                          <Input
                            type="number"
                            name="bast_nodok"
                            id="bast_nodok"
                            placeholder="93"
                            style={{ width: "10%", display: "inline" }}
                          />
                          <Input
                            type="text"
                            name="bast_nodok_kantor"
                            id="bast_nodok_kantor"
                            placeholder="/WBC.08/KPP.MP.030201/"
                            style={{ width: "40%", display: "inline" }}
                          />
                          <Input
                            type="number"
                            name="bast_nodok_tahun"
                            id="bast_nodok_tahun"
                            placeholder="2020"
                            style={{ width: "13%", display: "inline" }}
                          />
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Label sm={3}>Tanggal Dokumen</Label>
                        <Col sm={9}>
                          <DatePicker
                            customInput={<ButtonInput />}
                            selected={this.state.bastTglDok}
                            onChange={this._handleChangeBastTglDok}
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
                            placeholder=""
                          />
                        </Col>
                      </FormGroup>
                      <hr />
                    </div>
                    <div id="g_bacacah" style={{ display: "none" }}>
                      <CardTitle tag="h4">BERITA ACARA PENCACAHAN</CardTitle>
                      <FormGroup row>
                        <Label for="bacacah_nodok" sm={3}>
                          Nomor
                        </Label>
                        <Col sm={9}>
                          <div style={{ width: "10%", display: "inline" }}>
                            LI-
                          </div>
                          <Input
                            type="number"
                            name="bacacah_nodok"
                            id="bacacah_nodok"
                            placeholder="93"
                            style={{ width: "10%", display: "inline" }}
                          />
                          <Input
                            type="text"
                            name="bacacah_nodok_kantor"
                            id="bacacah_nodok_kantor"
                            placeholder="/WBC.08/KPP.MP.030201/"
                            style={{ width: "40%", display: "inline" }}
                          />
                          <Input
                            type="number"
                            name="bacacah_nodok_tahun"
                            id="bacacah_nodok_tahun"
                            placeholder="2020"
                            style={{ width: "13%", display: "inline" }}
                          />
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Label sm={3}>Tanggal Dokumen</Label>
                        <Col sm={9}>
                          <DatePicker
                            customInput={<ButtonInput />}
                            selected={this.state.bacacahTglDok}
                            onChange={this._handleChangeBacacahTglDok}
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
                            placeholder=""
                          />
                        </Col>
                      </FormGroup>
                      <hr />
                    </div>
                    <Button color="primary" block size="lg" onClick={this.onSubmit}>
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

  _handleChangeLiTglDok = (liTglDok) => this.setState({ liTglDok });
  _handleChangeLiTglSii = (liTglSii) => this.setState({ liTglSii });
  _handleChangeLiTglSiiDok = (liTglSiiDok) => this.setState({ liTglSiiDok });
  _handleChangeLiTglSie = (liTglSie) => this.setState({ liTglSie });
  _handleChangeLiTglSieDok = (liTglSieDok) => this.setState({ liTglSieDok });
  _handleChangeLiTglDisp = (liTglDisp) => this.setState({ liTglDisp });
  _handleChangeLkiTglDok = (lkiTglDok) => this.setState({ lkiTglDok });
  _handleChangeLkiTglDisp = (lkiTglDisp) => this.setState({ lkiTglDisp });
  _handleChangeLkaiTglDok = (lkaiTglDok) => this.setState({ lkaiTglDok });
  _handleChangeNhiTglDok = (nhiTglDok) => this.setState({ nhiTglDok });
  _handleChangeSbpTglDok = (sbpTglDok) => this.setState({ sbpTglDok });
  _handleChangeSbpTglSprin = (sbpTglSprin) => this.setState({ sbpTglSprin });
  _handleChangeBariksaTglDok = (bariksaTglDok) => this.setState({ bariksaTglDok });
  _handleChangeBariksaTglSprin = (bariksaTglSprin) => this.setState({ bariksaTglSprin });
  _handleChangeBariksaTglLahir = (bariksaTglLahir) => this.setState({ bariksaTglLahir });
  _handleChangeBacontohTglDok = ( bacontohTglDok) => this.setState({ bacontohTglDok });
  _handleChangeBacontohTglSprin = (bacontohTglSprin) => this.setState({ bacontohTglSprin });
  _handleChangeLtpTglDok = (ltpTglDok) => this.setState({ ltpTglDok });
  _handleChangeLtpTglSprin = (ltpTglSprin) => this.setState({ ltpTglSprin });
  _handleChangeLtpTgl = (ltpTgl) => this.setState({ ltpTgl });
  _handleChangeLtpTglBeri = (ltpTglBeri) => this.setState({ ltpTglBeri });
  _handleChangeBastTglDok = (bastTglDok) => this.setState({ bastTglDok });
  _handleChangeBacacahTglDok = (bacacahTglDok) => this.setState({ bacacahTglDok });

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
      document.getElementById("li_sumber_internal").style.display =
        "block";
    } else {
      document.getElementById("li_sumber_internal").style.display =
        "none";
    }
  };
  _handleChangeSIExternal = (e) => {
    const checked = e.target.checked;

    if (checked) {
      document.getElementById("li_sumber_external").style.display =
        "block";
    } else {
      document.getElementById("li_sumber_external").style.display =
        "none";
    }
  };

  _handleChangeDok = (e) => {
    if (e.target.checked) {
      // show the field group
      this.state.showIsian[e.target.name] = "g_" + e.target.name;
      // console.log(this.state.showIsian);
      this._toggleIsian();
    } else {
      // remove the field group
      delete this.state.showIsian[e.target.name];
      // console.log(this.state.showIsian);
      this._toggleIsian();
    }
  };

  _toggleIsian() {
    // hide all
    var group = document.querySelectorAll('[id^="g_"]');
    group.forEach(function(item){
      document.getElementById(item.id).style.display = "none";
    });
    // loop and show selected
    {Object.entries(this.state.showIsian).map(([gkey, gvalue]) => {
        try {
          document.getElementById(gvalue).style.display = "block";
        }
        catch(err) {
        }
    })};
  }
}

export default AddPengawasan;
