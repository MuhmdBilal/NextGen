import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Dashboard.css'
import {Badge, ToastContainer, Toast} from 'react-bootstrap';
import { useTranslation } from "react-i18next";
import SelectCrruncy from '../withdrawRequest/SelectCrruncy';
import {useSelector, useDispatch} from 'react-redux';
import {getDailyValue, getDepositPlanOne, getDepositPlanTwo, getDepositPlanThree} from '../../store/actions/actions';
export default function Dashboard() {
    let {userData} = useSelector(state => state.isAuth)
    let { acc } = useSelector(state => state.wallletAddress);
    let {daily1, daily2, daily3} = useSelector(state=>state.dailyDetail);
    let {depositedPlanOne, balancePlanOne} = useSelector(state => state.planOneData);
    let {depositedPlanTwo, balancePlanTwo} = useSelector(state => state.planTwoData);
    let {depositedPlanThree, balancePlanThree} = useSelector(state => state.planThreeData);
    let {requestMessage, requestSuccess} = useSelector(state => state.requestResponse);
    const dispatch = useDispatch()
    const { t, i18n } = useTranslation();
    const [modalShow, setModalShow] = useState(false);
    const [plan, setPlan]=useState(null);
    const [message, setMessage]=useState("")
    const deposit = () => {
        window.open(
            "https://global.transak.com/", "_blank");
    }

    const planUserData = async () => {
            let data = {
                email:userData[0].email
            }
            dispatch(getDepositPlanOne(data))
            dispatch(getDepositPlanTwo(data));
            dispatch(getDepositPlanThree(data));
        
    }
    useEffect(()=>{
        setInterval(()=>{
            planUserData()
        },5000)
        planUserData()
    },[])

    useEffect(()=>{
        dispatch(getDailyValue())
        },[])
    return (
        <div className="fluid-container img-fluid bgimg1">
            <div className="container">
            
                <div className='row d-flex justify-content-center mb-3'>
                    <div className="col-md-12  col-10 pb-3  dashboard-border shadow">
                        <div className='row d-flex justify-content-center pt-3 pb-3'>
                            <div className="col-lg-2 col-11">
                                <div>
                                    <SelectCrruncy modalShow={modalShow} setModalShow={setModalShow}  plan={plan} 
                                    
                                    />
                                </div>
                                <img role='button' onClick={() =>{
                                     setModalShow(true)
                                     setPlan(1)
                                     }} src="next-gem-logo.png" alt="" className='next-gem-logo' />
                            </div>
                            <div className="col-lg-2 col-10 flex-column text-lg-start media-query " >
                            <span id='dashboard-heading'>{t("Pioneer")}</span><br />

                                {/* <span id=' dashboard-heading' style={{border: "2px solid red"}}>{t("Pioneer")}</span><br /> */}
                                <Badge className='deposit' onClick={deposit}>{t("depositNow")}</Badge>
                            </div>
                            <div className="col-lg-2 col-10  flex-column  ">
                                <div className='media-query fw-bold'>
                                    <span className='span1 ' id='span1' style={{ fontSize: "14px", fontWeight: "bold" }}>{t('daily')} <img src="info.png" alt="" width="21px" /></span><br />
                                    <span className='span2' id='span1'>{daily1}%</span>
                                </div>
                            </div>
                            <div className="col-lg-2 col-10  ">
                                <div className='media-query'>
                                    <span className='span1' id='span1' style={{ fontSize: "14px" }}>{t("deposited")} <img src="carbon_piggy-bank.png" alt="" width="23px" /></span><br />
                                    <span className='span2' id='span1'>{depositedPlanOne}$</span>
                                </div>
                            </div>
                            <div className="col-lg-2 col-10 d-flex justify-content-center">
                                <div className='media-query'>
                                    <span className='span1' id='span1' style={{ fontSize: "14px" }}>{t("increased")} <img src="bx_trending-up.png" alt="" width="22px" /></span><br />
                                    <span className='span2' id='span1'>{depositedPlanOne && parseFloat((daily1 / 100) * depositedPlanOne).toFixed(2)}$</span>
                                </div>
                            </div>
                            <div className="col-lg-2 col-10 d-flex justify-content-center">
                                <div className='media-query'>
                                    <span className='span1' id='span1' style={{ fontSize: "14px" }}>{t("Balance")} <img src="ant-design_dollar-circle-outlined.png" alt="" width="23px" /></span><br />
                                    <span className='span2' id='span1'>{balancePlanOne}$</span>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col-md-12  col-10 pb-3 dashboard-border2 shadow">
                        <div className='row d-flex justify-content-center pt-3 pb-3'>
                            <div className="col-lg-2 col-11">
                                <img role='button' onClick={() =>{ 
                                    setModalShow(true)
                                    setPlan(2)
                
                                    }} src="next-gem-green-logo.png" alt="" className='next-gem-logo' />
                            </div>
                            <div className="col-lg-2 col-10  flex-column text-lg-start  media-query ">
                                <span id='dashboard-heading'>{t('advanced')}</span><br />
                                <Badge className='deposit' onClick={deposit}>{t("depositNow")}</Badge>
                            </div>
                            <div className="col-lg-2 col-10  flex-column ">
                                <div className='media-query'>
                                    <span className='span1' id='span1' style={{ fontSize: "14px" }}>{t('daily')} <img src="info.png" alt="" width="21px" /></span><br />
                                    <span className='span2' id='span1'>{daily2}%</span>
                                </div>
                            </div>
                            <div className="col-lg-2 col-10  ">
                                <div className='media-query'>
                                    <span className='span1' id='span1' style={{ fontSize: "14px" }}>{t("deposited")} <img src="carbon_piggy-bank.png" alt="" width="23px" /></span><br />
                                    <span className='span2' id='span1'>{depositedPlanTwo}$</span>
                                </div>
                            </div>
                            <div className="col-lg-2 col-10 d-flex justify-content-center">
                                <div className='media-query'>
                                    <span className='span1' id='span1' style={{ fontSize: "14px" }}>{t("increased")} <img src="bx_trending-up.png" alt="" width="24px" /></span><br />
                                    <span className='span2' id='span1'>{depositedPlanTwo && parseFloat((daily2 / 100) * depositedPlanTwo).toFixed(2)}$</span>
                                </div>
                            </div>
                            <div className="col-lg-2 col-10 d-flex justify-content-center">
                                <div className='media-query'>
                                    <span className='span1' id='span1' style={{ fontSize: "14px" }}>{t("Balance")} <img src="ant-design_dollar-circle-outlined.png" alt="" width="23px" /></span><br />
                                    <span className='span2' id='span1'>{balancePlanTwo}$</span>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col-md-12  col-10 pb-3 dashboard-border2 shadow">
                        <div className='row d-flex justify-content-center pt-3 pb-3'>
                            <div className="col-lg-2 col-11">
                                <img role='button' onClick={() =>{
                                     setModalShow(true)
                                     setPlan(3)
                                     }} src="next-gem-blue-logo.png" alt="" className='next-gem-logo' />
                            </div>
                            <div className="col-lg-2 col-10  flex-column text-lg-start  media-query ">
                                <span id='dashboard-heading'>{t("hero")}</span><br />
                                <Badge className='deposit' onClick={deposit}>{t("depositNow")}</Badge>
                            </div>
                            <div className="col-lg-2 col-10  flex-column ">
                                <div className='media-query'>
                                    <span className='span1' id='span1' style={{ fontSize: "14px" }}>{t('daily')} <img src="info.png" alt="" width="21px" /></span><br />
                                    <span className='span2' id='span1'>{daily3}%</span>
                                </div>
                            </div>
                            <div className="col-lg-2 col-10  ">
                                <div className='media-query'>
                                    <span className='span1' id='span1' style={{ fontSize: "14px" }}>{t("deposited")} <img src="carbon_piggy-bank.png" alt="" width="23px" /></span><br />
                                    <span className='span2' id='span1' >{depositedPlanThree}$</span>
                                </div>
                            </div>
                            <div className="col-lg-2 col-10 d-flex justify-content-center">
                                <div className='media-query'>
                                    <span className='span1' id='span1' style={{ fontSize: "14px" }}>{t("increased")} <img src="bx_trending-up.png" alt="" width="24px" /></span><br />
                                    <span className='span2' id='span1'>{depositedPlanThree && parseFloat((daily3 / 100) * depositedPlanThree).toFixed(2)}$</span>
                                </div>
                            </div>
                            <div className="col-lg-2 col-10 d-flex justify-content-center">
                                <div className='media-query'>
                                    <span className='span1' id='span1' style={{ fontSize: "14px" }}>{t("Balance")} <img src="ant-design_dollar-circle-outlined.png" alt="" width="23px" /></span><br />
                                    <span className='span2' id='span1'>{balancePlanThree}$</span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
