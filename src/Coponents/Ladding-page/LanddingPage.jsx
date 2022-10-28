import React,{useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import "./LanddingPage.css"
import { useTranslation } from "react-i18next";
import {useSelector, useDispatch} from 'react-redux'
import {getDailyValue} from '../../store/actions/actions';
export default function LanddingPage() {
    let {daily1, daily2, daily3} = useSelector(state=>state.dailyDetail);
    const dispatch = useDispatch()
    const { t, i18n } = useTranslation();


    useEffect(()=>{
        dispatch(getDailyValue())
    },[])
    return (
        <div className=" img-fluid bgimg1">
            <div className="container">
                <div className="row d-flex  justify-content-center">
                    {/* <Link to='/dashboard' className='d-flex  justify-content-center link-landing-page '>
                        <div className="col-lg-9 col-11 d-flex align-items-center pb-4 text-start ps-md-4 ps-2 listborder1 shadow">
                            <img src="next-gem-logo.png" alt="" className='next-gem-logo ' />
                            <h3 className='heading mt-md-2 mt-3'>{t("Pioneer")}</h3>
                            <div className='ms-auto me-3 text-center'>
                                <span className='span1 ' style={{ fontSize: "13px" }} >{t('daily')} <img src="info.png" alt="" width="17px" /></span><br />
                                <span className='span2' >0.03 - 0.05%</span>
                            </div>
                        </div>
                    </Link> */}
                    {/* <Link to='/dashboard' className='d-flex  justify-content-center link-landing-page'>

                        <div className="col-lg-9 col-11 d-flex align-items-center pb-4 text-start ps-md-4 ps-2 listborder2 shadow">
                            <img src="next-gem-green-logo.png" alt="" className='next-gem-logo ' />
                            <h3 className='heading mt-md-2 mt-3' >{t('advanced')}</h3>
                            <div className='ms-auto me-3 text-center'>
                                <span className='span1' style={{ fontSize: "13px" }}>{t('daily')}&nbsp;<img src="info.png" alt="" width="17px" /></span><br />
                                <span className='span2' >0.3 - 0.05%</span>
                            </div>
                        </div>
                    </Link> */}
                    {/* <Link to='/dashboard' className='d-flex align-items-center justify-content-center link-landing-page'>
                        <div className="col-lg-9 col-11 d-flex align-items-center pb-4  text-start ps-md-4 ps-2 listborder2 shadow">
                            <img src="next-gem-blue-logo.png" alt="" className='next-gem-logo ' />

                            <h3 className='heading mt-md-2 mt-3'>{t("hero")}</h3>
                            <div className='ms-auto me-3 text-start'>
                                <span className='span1' style={{ fontSize: "13px" }}>{t('daily')}&nbsp;<img src="info.png" alt="" width="17px" /></span><br />
                                <span className='span2' >2% - 4%</span>
                            </div>


                        </div>
                    </Link> */}
                    <Link to='/dashboard' className='d-flex align-items-center justify-content-center link-landing-page'>

                        <div className="col-md-9  col-10 pb-3 dashboard-border2 shadow">
                            <div className='row d-flex justify-content-center pt-3 pb-3'>
                                <div className="col-lg-2  col-11">
                                    <img src="next-gem-logo.png" alt="" className='next-gem-logo ' />
                                </div>
                                <div className="col-lg-2 col-10  flex-column   ">
                                    <span className='heading mt-md-2 mt-3'>{t("Pioneer")}</span><br />
                                </div>
                                <div className="col-lg-8 col-10  flex-column  ">
                                    <div className='media-query1'>
                                        <span className='span1' id='span1' style={{ fontSize: "13px" }}>{t('daily')}&nbsp;<img src="info.png" alt="" width="17px" /></span><br />
                                        <span className='span2' id='span1'>{daily1}%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link to='/dashboard' className='d-flex align-items-center justify-content-center link-landing-page'>

                        <div className="col-md-9  col-10 pb-3 dashboard-border2 shadow">
                            <div className='row d-flex justify-content-center pt-3 pb-3'>
                                <div className="col-lg-2 col-11">
                                    <img src="next-gem-green-logo.png" alt="" className='next-gem-logo ' />
                                </div>
                                <div className="col-lg-2 col-10  flex-column   ">
                                    <span className='heading mt-md-2 mt-3'>{t('advanced')}</span><br />
                                </div>
                                <div className="col-lg-8 col-10  flex-column  ">
                                    <div className='media-query1'>
                                        <span className='span1' id='span1' style={{ fontSize: "13px" }}>{t('daily')}&nbsp;<img src="info.png" alt="" width="17px" /></span><br />
                                        <span className='span2' id='span1'>{daily2}%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link to='/dashboard' className='d-flex align-items-center justify-content-center link-landing-page'>

                        <div className="col-md-9  col-10 pb-3 dashboard-border2 shadow">
                            <div className='row d-flex justify-content-center pt-3 pb-3'>
                                <div className="col-lg-2 col-11">
                                    <img src="next-gem-blue-logo.png" alt="" className='next-gem-logo ' />
                                </div>
                                <div className="col-lg-2 col-10  flex-column   ">
                                    <span className='heading mt-md-2 mt-3'>{t("hero")}</span><br />
                                </div>
                                <div className="col-lg-8 col-10  flex-column  ">
                                    <div className='media-query1'>
                                        <span className='span1' id='span1' style={{ fontSize: "13px" }}>{t('daily')}&nbsp;<img src="info.png" alt="" width="17px" /></span><br />
                                        <span className='span2' id='span1'>{daily3}%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>

            </div>
        </div>
    )
}
