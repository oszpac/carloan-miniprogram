var app = getApp();
var that;
Page({
    data: {
        chejia:'',//车价
        amountPaid:'',//走款金额
        paidPercent:'',//贷款成数
        areas:['广西','福建','众慧'],//可选区域
        selectedAreaId:'',//已选区域id
        selectedArea:'',//已选区域名称
        proGroup:[],//根据区域关联的产品组
        groupList:[['A1','A2','A3','A4','B1','B2','SanMa','HengXinA','Special','HengXinB'],['A1','A2','A3','B1',],['C1','C2','C3','C4',]],//区域对应的产品组
        selectedGroupId:'',//已选产品组id
        selectedGroup:'',//已选产品组
        dateType:['24','36'],//贷款期数
        selectedDateId:'',//已选贷款期数id
        selectedDate:'',//已选贷款期数
		theftSchemeArray:['现金','加融','赠送'],//盗抢险方案
		selectedTheftSchemeId:'',//已选盗抢险方案id
        selectedTheftScheme:'',//已选盗抢险方案
        theftAcountList:[],//盗抢可选金额
		theftAcount:0,//盗抢险金额
        gx:[
        {"name":'A1',"date":'24','list':['10.22%', '11.29%', '12.36%', '13.43%' ]},
        {"name":'A1',"date":'36','list':['12.80%', '13.89%', '14.99%', '16.08%' ]},
        {"name":'A2',"date":'24','list':['12.14%', '13.21%', '14.28%', '15.35%','16.42%', '17.49%', '18.56%' ]},
        {"name":'A2',"date":'36','list':['14.76%', '15.85%', '16.95%', '18.04%','19.14%', '20.23%', '21.33%' ]},
        {"name":'A3',"date":'24','list':['12.18%', '13.25%', '14.32%', '15.39%','17.70%','18.77%','19.84%' ]},
        {"name":'A3',"date":'36','list':['15.90%','16.07%', '16.99%', '18.08%','20.45%', '21.55%', '22.64%' ]},
        {"name":'A4',"date":'24','list':['15.52%', '16.59%', '17.66%' ]},
        {"name":'A4',"date":'36','list':['16.62%', '19.09%', '20.19%' ]},
        {"name":'B1',"date":'24','list':['13.96%', '15.03%', '16.10%', '17.17%' ]},
        {"name":'B1',"date":'36','list':['16.62%', '17.72%', '18.81%', '19.91%' ]},
        {"name":'B2',"date":'24','list':['15.03%', '16.10%', '17.17%', '18.24%','19.31%','20.38%','21.45%','22.52%' ]},
        {"name":'B2',"date":'36','list':['17.71%', '18.81%', '19.90%', '21.00%','22.09%', '23.19%', '24.28%', '25.38%' ]},
        {"name":'SanMa',"date":'24','list':['15.75%', '16.63%']},
        {"name":'SanMa',"date":'36','list':['19.00%', '19.90%' ]},
        {"name":'HengXinA',"date":'24','list':['15.3%']},
        {"name":'HengXinA',"date":'36','list':['18%']},
        {"name":'special',"date":'24','list':['15.01%', '16.08%', '17.17%', '18.23%' ]},
        {"name":'special',"date":'36','list':['17.70%', '18.80%','19.90%', '21.00%' ]},
        {"name":'HengXinB',"date":'36','list':['17.50%','18.59%','19.68%']},
        ],
        fujian:[
        {"name":'A1',"date":'24','list':['10.42%','11.49%','12.56%','13.63%']},
        {"name":'A1',"date":'36','list':['12.80%', '13.89%', '14.98%', '16.08%']},
        {"name":'A2',"date":'24','list':['11.82%', '12.89%', '13.96%', '15.03%','16.10%', '17.17%', '18.24%' ]},
        {"name":'A2',"date":'36','list':['14.22%', '15.31%', '16.40%', '17.50%','18.59%', '19.68%', '20.78%' ]},
        {"name":'A3',"date":'24','list':['14.17%', '15.24%', '16.31%', '17.38%' ]},
        {"name":'A3',"date":'36','list':['16.62%', '17.72%', '18.81%', '19.90%' ]},
        {"name":'B1',"date":'24','list':['13.42%', '14.49%', '15.56%', '16.63%','17.70%', '18.77%', '19.84%', '20.91%', '21.98%']},
        {"name":'B1',"date":'36','list':['16.62%', '17.72%', '18.81%', '19.90%','20.23%', '21.32%', '22.42%','23.51%','24.60%' ]}
        ],
        zonghui:[
        {"name":'C1',"date":'24','list':['22.28%']},
        {"name":'C1',"date":'36','list':['30.11%']},
        {"name":'C2',"date":'24','list':['16.87%']},
        {"name":'C2',"date":'36','list':['24.35%']},
        {"name":'C3',"date":'24','list':['19.02%']},
        {"name":'C3',"date":'36','list':['26.64%']},
        {"name":'C4',"date":'24','list':['22.93%']},
        {"name":'C4',"date":'36','list':['31.11%']},
        ],
        rateArray:[],//产品费率数组
        productRate:'',//产品费率
        pingtaiArray:[],//放款平台数组
		otherPingtaiArray:['广西新车','广西二手车','贵州新车','贵州二手车'],//其他放款平台数组
		zonghuiPingtaiArray:['众慧商用车','众慧乘用车','众慧车易融'],//众慧放款平台数组
        selectedPingtai:'',//选择放款平台
        interestArray:[
            {"name":'广西新车',"date":'24','interest':'7%'},
            {"name":'广西新车',"date":'36','interest':'9.50%'},
            {"name":'广西二手车',"date":'24','interest':'7%'},
            {"name":'广西二手车',"date":'36','interest':'9.50%'},
            {"name":'贵州新车',"date":'24','interest':'7.00%'},
            {"name":'贵州新车',"date":'36','interest':'9.3%'},
            {"name":'贵州二手车',"date":'24','interest':'7.00%'},
            {"name":'贵州二手车',"date":'36','interest':'9.3%'},
            {"name":'众慧商用车',"date":'24','interest':'17.00%'},
            {"name":'众慧商用车',"date":'36','interest':'0'},
            {"name":'众慧乘用车',"date":'24','interest':'14.33%'},
            {"name":'众慧乘用车',"date":'36','interest':'21.65%'},
            {"name":'众慧车易融',"date":'24','interest':'14.89%'},
            {"name":'众慧车易融',"date":'36','interest':'22.53%'},
        ],//底息
        serviceCharges:'', //综合服务费
        approvalMoney:'', //送审金额（最终贷款金额）
        approvalPercent:'', //送审成数
        totalRepayment :'', //还款总额
        monthlyPayment :'', //月供
        approvalContractPrice :0, //送审合同价

    },
    onLoad:function(){
        that = this;
    },
    onShow: function () {
    },
    onUnload:function(){// 页面关闭
        that.onClear();
    },
    onHide:function(){// 页面隐藏
    },
    oninput:function(ev){
        let val=ev.detail.value;
        let tag = ev.currentTarget.dataset.tag;
        if (tag=='chejia') {
            let chejia = parseInt(val);
            that.setData({
                chejia:isNaN(chejia)?'':chejia
            });
           that.reset();
		
        }else if(tag=='amountPaid'){
            let amountPaid = parseInt(val);
            that.setData({
                amountPaid:isNaN(amountPaid)?'':amountPaid,
				theftAcount:0,
				theftAcountList:[]
            });
            let selectedTheftSchemeId = that.data.selectedTheftSchemeId;

            if(selectedTheftSchemeId==='0' || selectedTheftSchemeId==='1'){
                let theftAcountList = that.getTheftAcountList();
                that.setData({
                theftAcountList:theftAcountList
            });
            }
            that.reset();
        }
        
    },
    //选择区域
    areaChange:(e)=>{
        let selectedAreaId = e.detail.value;
        let selectedArea = that.data.areas[selectedAreaId];
        let proGroup = [];
        proGroup = that.data.groupList[selectedAreaId];
		let pingtaiArray = [];
		if(selectedAreaId==2){
			pingtaiArray = that.data.zonghuiPingtaiArray;
		}else{
			pingtaiArray = that.data.otherPingtaiArray;
		}
		
        that.setData({
            selectedAreaId:selectedAreaId,
            selectedArea: selectedArea,
            proGroup:proGroup,
            rateArray:[],
            productRate:[],
			pingtaiArray:pingtaiArray
        })
        that.reset();
    },
    //选择产品组
    proGroupChange:(e)=>{
        let selectedGroupId = e.detail.value;
        let selectedGroup = that.data.proGroup[selectedGroupId];
        that.setData({
            selectedGroupId:selectedGroupId,
            selectedGroup: selectedGroup,
        })
        that.getRateArray();
        that.reset();
    },
    //选择贷款期数 
    dateChange:(e)=>{
        let selectedDateId = e.detail.value;
        let selectedDate = that.data.dateType[selectedDateId];
        that.setData({
            selectedDateId:selectedDateId,
            selectedDate: selectedDate,
        })
        that.getRateArray();
        that.reset();
    },

     //选择盗抢险方案
    theftSchemeChange:(e)=>{
        let selectedTheftSchemeId = e.detail.value;
        let selectedTheftScheme = that.data.theftSchemeArray[selectedTheftSchemeId];
		let theftAcount = 0;
		let theftAcountList = [];

		if(selectedTheftSchemeId==='0' ||selectedTheftSchemeId==='1'){	
            theftAcountList = that.getTheftAcountList();
		}
        that.setData({
            selectedTheftSchemeId:selectedTheftSchemeId,
            selectedTheftScheme: selectedTheftScheme,
			theftAcountList: theftAcountList,
			theftAcount: 0,
        })
        that.reset();
    },
     //选择盗抢金额
    theftAcountChange:(e)=>{
        let id = e.detail.value;
        let theftAcount = that.data.theftAcountList[id];

        that.setData({
            theftAcount:theftAcount,
        })
        that.reset();
    },
    //选择产品费率
    productRateChange:(e)=>{
        let index = e.detail.value;
        let productRate = that.data.rateArray[index];
        that.setData({
            productRate: productRate,
        })
        that.reset();
    },
     //选择平台
    pingtaiChange:(e)=>{
        let index = e.detail.value;
        let selectedPingtai = that.data.pingtaiArray[index];
        that.setData({
            selectedPingtai: selectedPingtai,
        })
        that.reset();
    },
    //计算2%盗抢
    caluPercentTheft:(amountPaid)=>{
        let percentTheft = that.hundredCeil(amountPaid*2/100);
        return percentTheft;
    },
    
    //计算成数比
    caluAmountPaidPercent:()=>{
        let chejia = that.data.chejia;
        let amountPaid = that.data.amountPaid;
        if (chejia>0&&amountPaid>0) {
            let percent = Math.round(amountPaid / chejia * 10000) / 100.00+"%";
            return percent;
        }else{
            return '';
        }
    },
    
    /**
    * [计算综合服务费]
    * @Author   huangz
    * @DateTime 2019-04-23
    * @param    {[type]}   theftAcount [盗抢金额]
    * @param    {[type]}   interes [底息]
    * @return   {[type]}   [description]
    */
    caluServiceCharges:(theftAcount,interes)=>{
        let serviceCharges = 0;
        let amountPaid = that.hundredCeil(that.data.amountPaid);//走款金额
        let productRate = that.data.productRate;//产品费率
        let selectedAreaId = that.data.selectedAreaId;//已选区域
        

        productRate = parseFloat(productRate);
        interes = parseFloat(interes);
       
        if (productRate==0||isNaN(productRate)||interes==0||isNaN(interes)) {
            return serviceCharges;
        }
        
        //（产品费率-底息）/（100%+底息）×走款金额 向上百位取整+加融现金盗抢+2%盗抢金额+200
        let _rate = parseFloat((productRate-interes)/(100+interes));
        let extra = 0;
        if (selectedAreaId==='0') {//广西
            extra = 200;
        }
        if (selectedAreaId==='1') {//福建
            extra = 100;
        }
         if (selectedAreaId==='2') {//众慧
            extra = 0;
        }
        serviceCharges = _rate*amountPaid+theftAcount+extra;
        return that.hundredCeil(parseInt(serviceCharges));
    },
   
    caluInteres:()=>{//获取底息 
        let selectedPingtai = that.data.selectedPingtai;
        let selectedDate = that.data.selectedDate;
        let interestArray = that.data.interestArray;
        let interes = '';//底息
        interestArray.forEach(function(v,k){
            if (v.name==selectedPingtai&&v.date==selectedDate) {
                interes = v.interest;
            }
        });
        return interes;
    },
   
    //百位取整
    hundredCeil:(inp)=>{
        let input = parseFloat(inp);
        if (input==0 || isNaN(input)) {
            return 0 ;
        }
        if (input>0){
            return Math.ceil(input/100) *100;
        }else{
            return inp ;
        }

    },
    getRateArray:()=>{
        let selectedAreaId = that.data.selectedAreaId;
        let selectedGroup = that.data.selectedGroup;
        let selectedDate = that.data.selectedDate;
        let rateArray = [];
        if (selectedAreaId!=''&&selectedGroup!=''&&selectedDate!='') {
            let area;
            if (selectedAreaId==='0') {
                area = that.data.gx;
            }
            if (selectedAreaId==='1') {
                area = that.data.fujian;
            }
            if (selectedAreaId==='2') {
                area = that.data.zonghui;
            }

            area.forEach(function(v,k){
                if(v.name==selectedGroup&&v.date==selectedDate){
                    rateArray = v.list;           
                }   
           
            });
        }

        that.setData({
            rateArray :rateArray,
            productRate:''
        });

    },
	getTheftAcountList:()=>{
		let amountPaid = parseInt(that.data.amountPaid);
		if(amountPaid==0 ||isNaN(amountPaid)){
			return [1200,1500];
		}
		let percentTheft = that.caluPercentTheft(amountPaid);
       
		return [1200,1500,percentTheft];
	},
    //提示
    showModal:(content)=>{
        wx.showModal({
            title: '提示',
            showCancel:false,
            content: content,
        });

    },
    reset:()=>{
        that.setData({
            serviceCharges:'', //综合服务费
            approvalMoney:'', //送审金额（最终贷款金额）
            approvalPercent:'', //送审成数
            totalRepayment :'', //还款总额
            monthlyPayment :'', //月供
            approvalContractPrice :0, //送审合同价
        });
    },       
    //清空
    onClear:()=>{
        that.setData({
            chejia:'',//车价
            amountPaid:'',//走款金额
            paidPercent:'',//贷款成数
            selectedAreaId:'',//已选区域id
            selectedArea:'',//已选区域名称
            proGroup:[],//根据区域关联的产品组
			pingtaiArray:[],
            selectedGroupId:'',//已选产品组id
            selectedGroup:'',//已选产品组
            selectedDateId:'',//已选贷款期数id
            selectedDate:'',//已选贷款期数
			theftAcountList:[],
			theftAcount:0,
			selectedTheftSchemeId:'',
            selectedTheftScheme:'',
            rateArray:[],//产品费率数组
            productRate:'',//产品费率
            selectedPingtai:'',//选择放款平台
            serviceCharges:'', //综合服务费
            approvalMoney:'', //送审金额（最终贷款金额）
            approvalPercent:'', //送审成数
            totalRepayment :'', //还款总额
            monthlyPayment :'', //月供
            approvalContractPrice :0, //送审合同价
        })
    },
    //计算
    onCalu:()=>{
        let chejia = that.data.chejia;//车价
        let amountPaid = that.data.amountPaid;//走款金额
        let selectedAreaId = that.data.selectedAreaId;//已选区域id
        let selectedArea = that.data.selectedArea;//已选区域名称
        let selectedGroupId = that.data.selectedGroupId;//已选产品组id
        let selectedGroup = that.data.selectedGroup;//已选产品组
        let selectedDateId = that.data.selectedDateId;//已选贷款期数id
        let selectedDate = that.data.selectedDate;//已选贷款期数
        let selectedTheftSchemeId=that.data.selectedTheftSchemeId;//选择盗抢险方案,
		let theftAcount=that.data.theftAcount;//盗抢险金额,
        let rateArray = that.data.rateArray;//产品费率数组
        let productRate = that.data.productRate;//产品费率
        let selectedPingtai = that.data.selectedPingtai;//选择放款平台 

        if (chejia=='') {
            that.showModal('请输入车辆价格');
            return false;
        }  
        if (amountPaid=='') {
            that.showModal('请输入走款金额');
            return false;
        }  
        if (selectedArea=='') {
            that.showModal('请选择区域');
            return false;
        }  
        
        if (selectedGroup=='') {
            that.showModal('请选择产品组');
            return false;
        }   
        if (selectedDate=='') {
            that.showModal('请选择贷款期数');
            return false;
        } 
        if (selectedTheftSchemeId==='') {
            that.showModal('请选择盗抢险方案');
            return false;
        } 
		if ((selectedTheftSchemeId==='0'||selectedTheftSchemeId==='1')&&parseInt(theftAcount)==0) {
            that.showModal('请选择盗抢险金额');
            return false;
        } 
		if (selectedTheftSchemeId==='2') {
           theftAcount = 0;
        } 
        if (productRate=='') {
            that.showModal('请选择产品费率');
            return false;
        } 
        if (selectedPingtai=='') {
            that.showModal('车辆类型');
            return false;
        } 

        if (selectedPingtai=='众慧商用车'&&selectedDate=='36') {
            that.showModal('请众慧商用车平台未提供36期贷款服务');
            return false;
        } 

        //计算贷款成数
        let paidPercent = that.caluAmountPaidPercent();
        
        //计算底息,结果带百分号
        let interes = that.caluInteres();
        //计算综合服务费-担保费
        let serviceCharges = that.caluServiceCharges(theftAcount,interes);
        //计算送审金额（最终贷款金额）
		let approvalMoney = 0;
		//['现金','加融','赠送']
		if(selectedTheftSchemeId==='1'||selectedTheftSchemeId==='2'){
			approvalMoney = that.hundredCeil(parseInt(amountPaid))+parseInt(serviceCharges); 
		}
		if(selectedTheftSchemeId==='0'){
			approvalMoney = that.hundredCeil(parseInt(amountPaid))+parseInt(serviceCharges)-parseInt(theftAcount); 
		}
          //计算送审成数
        let approvalPercent = Math.round(approvalMoney/chejia * 10000) / 100.00+"%" ;
		//还款总额
        let totalRepayment = Math.round(approvalMoney+approvalMoney*(parseFloat(interes)/100)); 
		
        let monthlyPayment =  Math.round(totalRepayment/selectedDate); //月供


        let approvalContractPrice = 0; //送审合同价
        if(selectedPingtai=='贵州新车'){
            approvalContractPrice = that.hundredCeil(Math.round(approvalMoney/0.8));
        }
        if (selectedPingtai=='贵州二手车'){
            approvalContractPrice = that.hundredCeil(Math.round(approvalMoney/0.7));
        }
        if (selectedPingtai=='广西二手车'){
            approvalContractPrice = that.hundredCeil(Math.round(approvalMoney/0.7));
        }

        that.setData({
            paidPercent:paidPercent,
            serviceCharges:serviceCharges,
            approvalMoney:approvalMoney,
            approvalPercent:approvalPercent,
			totalRepayment:totalRepayment,
            monthlyPayment:monthlyPayment,
            approvalContractPrice:approvalContractPrice,
           
        });
    }

})
