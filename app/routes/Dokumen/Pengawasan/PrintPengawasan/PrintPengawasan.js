import React from "react";
import ReactDOM from "react-dom";
import axios from 'axios';
import {
  PDFViewer,
  Page,
  Text,
  View,
  Font,
  Document,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";

import { EmptyLayout } from "./../../../../components";

// Create Document Component
export default class PrintPengawasan extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        rowData: [],
    };
  }

  componentDidMount() {
      var token = sessionStorage.getItem('token');
      const options = { headers: { Authorization: `Bearer ${token}` } };
      axios.get("http://localhost:8080/dokumen/"+this.props.match.params.param, options)
          .then(res => {
                  this.setState({ rowData: res.data });
          })
          .catch(err => console.log(err));
  }
  
  render( {rowData} ) {
    return (
  <EmptyLayout>
    <PDFViewer style={styles.viewer}>
      <Document>
        <Page style={styles.body} id="page_li">
          <View style={styles.kop}>
            <Text style={styles.koptitle}>
              KEMENTERIAN KEUANGAN REPUBLIK INDONESIA
            </Text>
            <Text style={styles.koptitle}>
              DIREKTORAT JENDERAL BEA DAN CUKAI
            </Text>
            <Text style={styles.koptitle}>KANTOR WILAYAH DJBC JAKARTA</Text>
            <Text style={styles.koptitle}>
              KPPBC TMP C KANTOR POS PASAR BARU
            </Text>
          </View>
          <Text style={styles.title}>LEMBAR INFORMASI</Text>
          <View style={styles.inline}>
            <Text style={styles.inlinelabel}>Nomor</Text>
            <Text style={styles.inlinetext}>: LI-</Text>
            <Text style={styles.inlinetext}>{this.state.rowData.li_nodok}</Text>
            <Text style={styles.inlinetext}>{this.state.rowData.li_nodok_kantor}</Text>
            <Text style={styles.inlinetext}>{this.state.rowData.li_nodok_tahun}</Text>
          </View>
          <View style={styles.inline}>
            <Text style={styles.inlinelabel}>Tanggal</Text>
            <Text style={styles.inlinetext}>: </Text>
          </View>
          <View style={styles.inline}>
            <Text style={[styles.inlinelabel, { width: 120, marginTop: 12 }]}>
              SUMBER INFORMASI
            </Text>
            <Text style={[styles.inlinetext, { marginTop: 12 }]}>
              : Internal
            </Text>
          </View>
          <View style={styles.inline}>
            <Text style={[styles.inlinelabel, { width: 120 }]}></Text>
            <Text style={[styles.inlinelabel, { width: 90 }]}>
              &nbsp;&nbsp;Media
            </Text>
            <Text style={styles.inlinetext}>: {this.state.rowData.li_sumber_internal_media}</Text>
          </View>
          <View style={styles.inline}>
            <Text style={[styles.inlinelabel, { width: 120 }]}></Text>
            <Text style={[styles.inlinelabel, { width: 90 }]}>
              &nbsp;&nbsp;Tanggal Terima
            </Text>
            <Text style={styles.inlinetext}>: {this.state.rowData.li_sumber_internal_tgl}</Text>
          </View>
          <View style={styles.inline}>
            <Text style={[styles.inlinelabel, { width: 120 }]}></Text>
            <Text style={[styles.inlinelabel, { width: 90 }]}>
              &nbsp;&nbsp;No.Dokumen
            </Text>
            <Text style={styles.inlinetext}>: </Text>
          </View>
          <View style={styles.inline}>
            <Text style={[styles.inlinelabel, { width: 120 }]}></Text>
            <Text style={[styles.inlinelabel, { width: 90, marginBottom:6 }]}>
              &nbsp;&nbsp;Tanggal
            </Text>
            <Text style={styles.inlinetext}>: </Text>
          </View>
          <View style={styles.table}>
            <View style={styles.tableRow}>
              <View style={styles.tableCol}>
                <Text style={[styles.text, styles.center]}>ISI INFORMASI</Text>
              </View>
            </View>
            <View style={styles.tableRow}>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{this.state.rowData.li_isi_informasi}</Text>
              </View>
            </View>
          </View>
          <View style={styles.inline}>
            <Text
              style={[
                styles.inline,
                styles.text,
                { marginTop: 12, width: "50%" },
              ]}
            >
              Disposisi Kepada :
            </Text>
            <Text
              style={[
                styles.inline,
                styles.text,
                { marginTop: 12, width: "50%" },
              ]}
            >
              Tanggal Disposisi :
            </Text>
          </View>
          <View style={styles.inline}>
            <Text style={[styles.inlinelabel, { width: "20%", marginTop: 12 }]}>
              TINDAK LANJUT
            </Text>
            <Text style={[styles.inlinetext, { marginTop: 12 }]}>
              : Klasifikasi
            </Text>
          </View>
          <View style={styles.inline}>
            <Text style={[styles.inlinelabel, { width: "20%", marginTop: 12 }]}>
              CATATAN
            </Text>
            <Text style={[styles.inlinetext, { width: "80%", marginTop: 12 }]}>
              : {this.state.rowData.li_catatan}
            </Text>
          </View>
          <View style={styles.inline}>
            <Text
              style={[
                styles.inline,
                styles.text,
                { marginTop: 42, width: "50%" },
              ]}
            >
              Pemeriksa Bea dan Cukai Ahli Pertama,
            </Text>
            <Text
              style={[
                styles.inline,
                styles.text,
                { marginTop: 42, width: "50%" },
              ]}
            >
              Penyusun,
            </Text>
          </View>
          <View style={styles.inline}>
            <Text
              style={[
                styles.inline,
                styles.text,
                { marginTop: 62, width: "50%" },
              ]}
            >
              {this.state.rowData.li_ahli}
            </Text>
            <Text
              style={[
                styles.inline,
                styles.text,
                { marginTop: 62, width: "50%" },
              ]}
            >
              {this.state.rowData.li_penyusun}
            </Text>
          </View>
          <View style={styles.inline}>
            <Text style={[styles.inline, styles.text, { width: "50%" }]}>
              NIP {this.state.rowData.li_ahli_nip}
            </Text>
            <Text style={[styles.inline, styles.text, { width: "50%" }]}>
              NIP {this.state.rowData.li_penyusun_nip}
            </Text>
          </View>
        </Page>
        <Page style={styles.body} id="page_lki">
          <View style={styles.kop}>
            <Text style={styles.koptitle}>
              KEMENTERIAN KEUANGAN REPUBLIK INDONESIA
            </Text>
            <Text style={styles.koptitle}>
              DIREKTORAT JENDERAL BEA DAN CUKAI
            </Text>
            <Text style={styles.koptitle}>KANTOR WILAYAH DJBC JAKARTA</Text>
            <Text style={styles.koptitle}>
              KPPBC TMP C KANTOR POS PASAR BARU
            </Text>
          </View>
          <Text style={styles.title}>LEMBAR KLASIFIKASI INFORMASI</Text>
        </Page>
      </Document>
    </PDFViewer>
  </EmptyLayout>
);
            }
          }

const styles = StyleSheet.create({
  viewer: {
    width: "100%",
    height: "700px",
  },
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  kop: {
    width: 300,
    borderBottom: "1pt solid #000",
  },
  koptitle: {
    fontSize: 12,
    fontWeight: "bold",
  },
  title: {
    marginTop: 10,
    marginBottom: 10,
    fontSize: 12,
    textAlign: "center",
  },
  author: {
    fontSize: 12,
    textAlign: "center",
    marginBottom: 40,
  },
  center: {
    textAlign: "center",
  },
  subtitle: {
    fontSize: 18,
    margin: 12,
  },
  inline: {
    display: "flex",
    flexDirection: "row",
  },
  inlinelabel: {
    margin: 0,
    width: 50,
    fontSize: 11,
    display: "flex",
    flexDirection: "row",
    textAlign: "left",
  },
  inlinetext: {
    margin: 0,
    fontSize: 11,
    textAlign: "left",
  },
  text: {
    fontSize: 11,
    textAlign: "justify",
  },
  image: {
    marginVertical: 15,
    marginHorizontal: 100,
  },
  header: {
    fontSize: 12,
    marginBottom: 20,
    textAlign: "center",
    color: "grey",
  },
  pageNumber: {
    position: "absolute",
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "grey",
  },
  table: {
    display: "table",
    width: "auto",
    borderStyle: "solid",
    borderWidth: 1,
    borderRightWidth: 0,
    borderBottomWidth: 0,
  },
  tableRow: { margin: "auto", flexDirection: "row" },
  tableCol: {
    width: "100%",
    borderStyle: "solid",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
  },
  tableCell: { margin: "auto", marginTop: 5, marginLeft: 3, marginBottom: 5, marginRight: 3, fontSize: 11 },
});
