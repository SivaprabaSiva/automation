interface loyaltySetting {
    ecommSettings: {
        returnTimeFrame: number
    },
    minimumAmountForRedemption: number,
    loyaltyRedeemDiscountConfig: string,
    allowedRedeemPointsPercentage: number,
    delayLoyaltyPointsActivatedTime: number,
    discountPercentageToAvoidLoyaltyEarn: number,
    isLoyaltyAwardedWhenFooterDiscountsPresent: boolean,
    isLoyaltyRestrictWhenFooterDiscountsPresent: boolean,
    loyaltyTierConfig: string,
    permitRedeemption: number,
    loyaltyExpiryConfig: string,
    milestoneExpiryDays: number,
    bonusThresholdAmount: number,
    milestoneQuantityLimit: number,
    pointsRedemptionFactor: number,
    maximumRedeemptionLimit: number,
    minimumRedeemptionLimit: number,
    allowTierJumpOnFirstBill: boolean,
    firstTimeMinRedeemPoints: number,
    milestonePointsExpiryDays: number,
    billHistoryDays: number,
    offerLoyaltyType: string,
    blockLoyaltyOnTax: boolean,
    bonusPerThreshold: number,
    isRevolvingExpiry: boolean,
    loyaltyExceptions: LoyaltyExceptions[]
}

interface LoyaltyExceptions {
    id: string,
    hierarchy: {
        CF1: string,
        CF2: string,
        CF3: string,
        CF7: string,
        CF10: string
    },
    loyaltyOffset: LoyaltyOffset[],

    offerLoyaltyOffset: OfferLoyaltyOffset[]
}

interface LoyaltyOffset {
    tierId: number,
    percentage: number
}

interface OfferLoyaltyOffset {
    tierId: number,
    percentage: number
}