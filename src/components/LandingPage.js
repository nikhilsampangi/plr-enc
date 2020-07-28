import React, { Component, Fragment } from "react";

export default class LandingPage extends Component {
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
                <li className="list-group-item">
                  <h5 className="btitle">1.Key Generation</h5>
                  <div className="bbody">
                    <button className="btn btn-info btn-sharp">
                      Generate Keys
                    </button>
                    <br />
                    <br />
                    <ul className="list-group">
                      <li className="list-group-item">Public Key: </li>
                      <li className="list-group-item">Private Key: </li>
                    </ul>
                  </div>
                </li>
                <li className="list-group-item">
                  <h5 className="btitle">2.Encryption</h5>
                  <div className="bbody">
                    <div className="form-group row">
                      <label className="col-4 col-form-label">
                        Enter Integer to be encrypted
                      </label>
                      <div className="col-8">
                        <input type="text" class="form-control" />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-4 col-form-label">&nbsp;</label>
                      <div className="col-8">
                        <button className="btn btn-outline-dark btn-sharp">
                          Encrypt
                        </button>
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-4 col-form-label">
                        Encrypted Cipher text
                      </label>
                      <div className="col-8">
                        <input
                          type="text"
                          readonly
                          class="form-control-plaintext"
                        />
                      </div>
                    </div>
                  </div>
                </li>
                <li className="list-group-item">
                  <h5 className="btitle">3.Decryption</h5>
                  <div className="bbody">
                    <div className="form-group row">
                      <label className="col-4 col-form-label">
                        Enter Cipher to be decrypted
                      </label>
                      <div className="col-8">
                        <input type="text" class="form-control" />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-4 col-form-label">&nbsp;</label>
                      <div className="col-8">
                        <button className="btn btn-outline-dark btn-sharp">
                          Decrypt
                        </button>
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-4 col-form-label">
                        Decrypted Plain text
                      </label>
                      <div className="col-8">
                        <input
                          type="text"
                          readonly
                          class="form-control-plaintext"
                        />
                      </div>
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
                <li className="list-group-item">
                  <h5 className="btitle">1.Addition of Two cipher texts</h5>
                  <div className="bbody">
                    <div className="form-group row">
                      <label className="col-4 col-form-label">Cipher #1</label>
                      <div className="col-8">
                        <input type="text" class="form-control" />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-4 col-form-label">Cipher #2</label>
                      <div className="col-8">
                        <input type="text" class="form-control" />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-4 col-form-label">&nbsp;</label>
                      <div className="col-8">
                        <button className="btn btn-dark btn-sharp">
                          Compute
                        </button>
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-4 col-form-label">
                        Resultant Cipher-text
                      </label>
                      <div className="col-8">
                        <input
                          type="text"
                          readonly
                          class="form-control-plaintext"
                        />
                      </div>
                    </div>
                  </div>
                </li>
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
                        <input type="text" class="form-control" />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-4 col-form-label">Integer</label>
                      <div className="col-8">
                        <input type="text" class="form-control" />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-4 col-form-label">&nbsp;</label>
                      <div className="col-8">
                        <button className="btn btn-dark btn-sharp">
                          Compute
                        </button>
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-4 col-form-label">
                        Resultant Cipher-text
                      </label>
                      <div className="col-8">
                        <input
                          type="text"
                          readonly
                          class="form-control-plaintext"
                        />
                      </div>
                    </div>
                  </div>
                </li>
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
                        <input type="text" class="form-control" />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-4 col-form-label">Integer</label>
                      <div className="col-8">
                        <input type="text" class="form-control" />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-4 col-form-label">&nbsp;</label>
                      <div className="col-8">
                        <button className="btn btn-dark btn-sharp">
                          Compute
                        </button>
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-4 col-form-label">
                        Resultant Cipher-text
                      </label>
                      <div className="col-8">
                        <input
                          type="text"
                          readonly
                          class="form-control-plaintext"
                        />
                      </div>
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
