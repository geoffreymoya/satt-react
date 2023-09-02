export type CampaignType  = {
    id:String,
    advertiser:String,
    title:String,
    description:String,
    image:String,
    typeSn:number,
    start:number,
    end:number,
    token:String,
    funds:number,
    totalFunds:number,
    viewRatio:number,
    likeRatio:number,
    shareRatio:number,
};

export type CampaignGraphType  = {
    id:String,
    advertiser:String,
    url:string,
    typeSn:number,
    startDate:number,
    endDate:number,
    token:String,
    funds:number,
    totalFunds:number,
    viewRatio:number,
    likeRatio:number,
    shareRatio:number,
};

export type CampaignMetaData  = {
    title:string,
    description:string,
    image:any
};

export type CampaignProps = {campaign : CampaignGraphType };

export type CampaignListProps = {campaignlist : CampaignGraphType [] };

export type PromType  = {
    id:String,
    influencer:String,
    status:number,
    reason:String,
    amount:number,
    pendingAmount:number,
    idUser:String,
    idPost:String,
    view:number,
    like:number,
    share:number,
};


export type PromProps = {prom : PromType };

export type PromListProps = {promlist : PromType [] };
