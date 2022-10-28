import React, { useState } from 'react';
import './Footer.css';
import { useTranslation } from "react-i18next";
import { Modal } from 'react-bootstrap';
import { IoMdClose } from 'react-icons/io';

export default function Footer({ logos }) {
  let [ImgModalShow, setImgModalShow] = useState(false);
  const { t, i18n } = useTranslation();

  return (
    <div className='container-fluid nav-color border-top1' id="footer">
      <div className="row d-flex ">
        <div className="col-lg-12">
          <img src={logos} alt="" />
          <p className='mt-3 text-cl' role='button' onClick={() => setImgModalShow(true)} style={{ fontSize: "15px" }}>{t("navbar.1")}</p>
          <Modal
            show={ImgModalShow} onHide={() => {
              setImgModalShow(false)
            }}

            aria-labelledby="contained-modal-title-vcenter"
            centered
          >

            <Modal.Body className='modal-color' style={{ backgroundColor: "black" }}>
              <div className="row d-flex justify-content-center">
                <div className="col-12 d-flex- justify-content-end">
                  <IoMdClose
                    onClick={() => setImgModalShow(false)}
                    size={28}
                    className="icon-color"
                    style={{ cursor: "pointer" }}
                  />
                </div>
              </div>
              <div class="row justify-content-center">

                <div class="col-lg-9 col-md-6 col-sm-6">

                  <div className=" shado">
                    <div class="card-body text-start ">
                      <form >
                        <img className='HowItworksImg' src="HowItworks.png" alt="" />
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </Modal.Body>
          </Modal>
          <a href="https://discord.gg/eBXKEthC`" target="_blank"><img src="discord.png" alt="" className='mx-1' /></a>
          <a href="https://twitter.com/NextGenCrypto_" target="_blank"><img src="twitter.png" alt="" className='mx-1' /></a>
          <a href="https://www.reddit.com/user/NextGenFinance" target="_blank"><img src="reddit.png" alt="" className='mx-1' /></a>
        </div>
      </div>
    </div>
  )
}
