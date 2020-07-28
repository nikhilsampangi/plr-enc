import React, { Component, Fragment } from "react";
import Axios from "axios";

export default class LandingPage extends Component {
  constructor() {
    super();
    this.state = {
      publicKey: "",
      privateKey: "",
      enc: "",
      enc_r: "",
      dec: "",
      dec_r: "",
      c1: "",
      c2: "",
      c12_r: "",
      ct1: "",
      n1: "",
      ct1_r: "",
      ct2: "",
      n2: "",
      ct2_r: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.generateKeys = this.generateKeys.bind(this);
    this.encrypt = this.encrypt.bind(this);
    this.decrypt = this.decrypt.bind(this);
    this.cipherAddition = this.cipherAddition.bind(this);
    this.constAddition = this.constAddition.bind(this);
    this.constMultiplication = this.constMultiplication.bind(this);
  }

  generateKeys() {
    Axios.get("/paillier/generate_keys")
      .then((res) => {
        this.setState({
          publicKey: res.data.pub,
          privateKey: res.data.priv,
        });
      })
      .catch((err) => {
        console.log("Key gen errror: ", err);
      });
  }

  encrypt() {
    Axios.post("/paillier/encrypt", {
      pub: this.state.publicKey,
      x: this.state.enc,
    })
      .then((res) => {
        this.setState({
          enc_r: res.data.cipher,
        });
      })
      .catch((err) => {
        console.log("encrpytion error: ", err);
      });
  }

  decrypt() {
    Axios.post("/paillier/decrypt", {
      priv: this.state.privateKey,
      pub: this.state.publicKey,
      x: this.state.dec,
    })
      .then((res) => {
        this.setState({
          dec_r: res.data.pln_txt,
        });
      })
      .catch((err) => {
        console.log("decryption error: ", err);
      });
  }

  cipherAddition() {
    Axios.post("/paillier/add_ciphers", {
      pub: this.state.publicKey,
      x: this.state.c1,
      y: this.state.c2,
    })
      .then((res) => {
        this.setState({
          c12_r: res.data.soln,
        });
      })
      .catch((err) => {
        console.log("add ciphers error: ", err);
      });
  }

  constAddition() {
    Axios.post("/paillier/add_constant", {
      pub: this.state.publicKey,
      x: this.state.ct1,
      const: this.state.n1,
    })
      .then((res) => {
        this.setState({
          ct1_r: res.data.soln,
        });
      })
      .catch((err) => {
        console.log("add cnst error: ", err);
      });
  }

  constMultiplication() {
    Axios.post("/paillier/mult_const", {
      pub: this.state.publicKey,
      x: this.state.ct2,
      const: this.state.n2,
    })
      .then((res) => {
        this.setState({
          ct2_r: res.data.soln,
        });
      })
      .catch((err) => {
        console.log("multp. conts error: ", err);
      });
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    return (
      <Fragment>
        <div className="container b1">
          <div className="card">
            <div className="card-title text-center">
              <h3 className="text-center">Paillier Encryption Scheme</h3>
              <small className="text-center">-BTP project mid-eval demo-</small>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                {/* Keygen */}
                <li className="list-group-item">
                  <h5 className="btitle">1.Key Generation</h5>
                  <div className="bbody">
                    <button
                      className="btn btn-info btn-sharp"
                      onClick={this.generateKeys}
                    >
                      Generate Keys
                    </button>
                    <br />
                    <br />
                    <ul className="list-group">
                      <li className="list-group-item">
                        Public Key: {this.state.publicKey}
                      </li>
                      <li className="list-group-item">
                        Private Key: {this.state.privateKey}
                      </li>
                    </ul>
                  </div>
                </li>
                {/* encryption */}
                <li className="list-group-item">
                  <h5 className="btitle">2.Encryption</h5>
                  <div className="bbody">
                    <div className="form-group row">
                      <label className="col-4 col-form-label">
                        Enter Integer to be encrypted
                      </label>
                      <div className="col-8">
                        <input
                          type="text"
                          class="form-control"
                          name="enc"
                          onChange={this.handleChange}
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-4 col-form-label">&nbsp;</label>
                      <div className="col-8">
                        <button
                          className="btn btn-outline-dark btn-sharp"
                          onClick={this.encrypt}
                        >
                          Encrypt
                        </button>
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-4 col-form-label">
                        Encrypted Cipher text
                      </label>
                      <div className="col-8">{this.state.enc_r}</div>
                    </div>
                  </div>
                </li>
                {/* decryption */}
                <li className="list-group-item">
                  <h5 className="btitle">3.Decryption</h5>
                  <div className="bbody">
                    <div className="form-group row">
                      <label className="col-4 col-form-label">
                        Enter Cipher to be decrypted
                      </label>
                      <div className="col-8">
                        <input
                          type="text"
                          class="form-control"
                          name="dec"
                          onChange={this.handleChange}
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-4 col-form-label">&nbsp;</label>
                      <div className="col-8">
                        <button
                          className="btn btn-outline-dark btn-sharp"
                          onClick={this.decrypt}
                        >
                          Decrypt
                        </button>
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-4 col-form-label">
                        Decrypted Plain text
                      </label>
                      <div className="col-8">{this.state.dec_r}</div>
                    </div>
                  </div>
                </li>
              </ul>
              <br />
              <br />
              <br />
              <h4>Homomorphic properties</h4>
              <br />
              <ul className="list-group list-group-flush">
                {/* Addition 1 */}
                <li className="list-group-item">
                  <h5 className="btitle">1.Addition of Two cipher texts</h5>
                  <div className="bbody">
                    <div className="form-group row">
                      <label className="col-4 col-form-label">Cipher #1</label>
                      <div className="col-8">
                        <input
                          type="text"
                          class="form-control"
                          name="c1"
                          onChange={this.handleChange}
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-4 col-form-label">Cipher #2</label>
                      <div className="col-8">
                        <input
                          type="text"
                          class="form-control"
                          name="c2"
                          onChange={this.handleChange}
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-4 col-form-label">&nbsp;</label>
                      <div className="col-8">
                        <button
                          className="btn btn-dark btn-sharp"
                          onClick={this.cipherAddition}
                        >
                          Compute
                        </button>
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-4 col-form-label">
                        Resultant Cipher-text
                      </label>
                      <div className="col-8">{this.state.c12_r}</div>
                    </div>
                  </div>
                </li>
                {/* Addition 2 */}
                <li className="list-group-item">
                  <h5 className="btitle">
                    2.Addition of a cipher text with a constant
                  </h5>
                  <div className="bbody">
                    <div className="form-group row">
                      <label className="col-4 col-form-label">
                        Cipher-text
                      </label>
                      <div className="col-8">
                        <input
                          type="text"
                          class="form-control"
                          name="ct1"
                          onChange={this.handleChange}
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-4 col-form-label">Integer</label>
                      <div className="col-8">
                        <input
                          type="text"
                          class="form-control"
                          name="n1"
                          onChange={this.handleChange}
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-4 col-form-label">&nbsp;</label>
                      <div className="col-8">
                        <button
                          className="btn btn-dark btn-sharp"
                          onClick={this.constAddition}
                        >
                          Compute
                        </button>
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-4 col-form-label">
                        Resultant Cipher-text
                      </label>
                      <div className="col-8">{this.state.ct1_r}</div>
                    </div>
                  </div>
                </li>
                {/* Multiplication */}
                <li className="list-group-item">
                  <h5 className="btitle">
                    3.Multiplication of a cipher text with a constant
                  </h5>
                  <div className="bbody">
                    <div className="form-group row">
                      <label className="col-4 col-form-label">
                        Cipher-text
                      </label>
                      <div className="col-8">
                        <input
                          type="text"
                          class="form-control"
                          name="ct2"
                          onChange={this.handleChange}
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-4 col-form-label">Integer</label>
                      <div className="col-8">
                        <input
                          type="text"
                          class="form-control"
                          name="n2"
                          onChange={this.handleChange}
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-4 col-form-label">&nbsp;</label>
                      <div className="col-8">
                        <button
                          className="btn btn-dark btn-sharp"
                          onClick={this.constMultiplication}
                        >
                          Compute
                        </button>
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-4 col-form-label">
                        Resultant Cipher-text
                      </label>
                      <div className="col-8">{this.state.ct2_r}</div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
