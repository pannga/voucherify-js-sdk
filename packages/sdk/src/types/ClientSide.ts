interface ClientSideVoucherDiscountUnit {
	type?: 'UNIT'
	unit_off?: number
	effect?: string
}
interface ClientSideVoucherDiscountAmount {
	type?: 'AMOUNT'
	amount_off?: string
}
interface ClientSideVoucherDiscountPercent {
	type?: 'PERCENT'
	percent_off?: number
}

interface ClientSideValidateItem {
	source_id?: string
	product_id?: string
	sku_id?: string
	quantity?: number
}

interface ClientSideCustomer {
	id?: string
	name?: string
	email?: string
	metadata?: Record<string, string>
	description?: string
	source_id?: string
	address?: {
		city?: string
		state?: string
		line_1?: string
		line_2?: string
		country?: string
		postal_code?: string
	}
	phone?: string
}

export interface ClientSideValidateParams {
	code: string
	tracking_id?: string
	amount?: number
	order?: {
		items?: ClientSideValidateItem[]
		metadata?: Record<string, any>
	}
	customer?: Pick<ClientSideCustomer, 'source_id' | 'metadata'>
	metadata?: Record<string, any>
	session_type?: 'LOCK'
	session_key?: string
	session_ttl?: number
	session_ttl_unit?: 'MILLISECONDS' | 'SECONDS' | 'MINUTES' | 'HOURS' | 'DAYS'
}

export interface ClientSideValidateResponse {
	code?: string
	valid?: boolean
	discount?: ClientSideVoucherDiscountUnit | ClientSideVoucherDiscountAmount | ClientSideVoucherDiscountPercent
	order: {
		object?: 'order'
		amount?: number
		discount_amount?: number
		items: ClientSideValidateItem[]
	}
	tracking_id?: string
}

export interface ClientSideRedeemPayload {
	tracking_id?: string
	customer?: ClientSideCustomer
	order?: {
		id?: string
		source_id?: string
		amount?: number
		items?: ClientSideRedeemItem[]
		metadata?: Record<string, any>
	}
	metadata?: Record<string, any>
	reward?: {
		id?: string
	}
	session?: {
		key?: string
	}
}

export interface ClientSideRedeemResponse {
	id?: string
	object?: string
	date?: string
	customer_id?: string
	tracking_id?: string
	order?: {
		object?: string
		id?: string
		source_id?: string
		amount?: number
		discount_amount?: number
		created_at?: string
		updated_at?: string
		items?: ClientSideRedeemItem[]
		customer?: {
			id?: string
			object?: string
		}
		referrer?: string
		status?: string
		metadata?: Record<string, any>
	}
	metadata?: Record<string, any>
	result?: string
	voucher?: {
		code?: string
		campaign?: string
		category?: string
		type?: string
		discount?: ClientSideVoucherDiscountUnit | ClientSideVoucherDiscountAmount | ClientSideVoucherDiscountPercent
		gift?: {
			credits?: number
		}
		start_date?: string
		expiration_date?: string
		validity_timeframe?: string
		publish?: {
			object?: 'list'
			count?: number
			url?: string
		}
		redemption?: {
			object?: 'list'
			quantity?: number
			redeemed_quantity?: number
			url?: string
		}
		active?: boolean
		additional_info?: string
		metadata?: Record<string, any>
		is_referral_code?: boolean
		updated_at?: string
		object?: 'voucher'
	}
}

// @todo - export interface ClientSidePublishPayload

// @todo - export interface ClientSidePublishResponse

export interface ClientSideTrackLoyalty {
	code?: string
}
export interface ClientSideTrackReferral {
	code?: string
}

export interface ClientSideTrackPayload {
	event: string
	metadata?: Record<string, any>
	customer?: ClientSideTrackCustomer
	loyalty?: ClientSideTrackLoyalty
	referral?: ClientSideTrackReferral
}

export interface ClientSideTrackResponse {
	object?: 'event'
	type?: string
}

export type ClientSideRedeemItem = ClientSideValidateItem
export type ClientSideResponseItem = ClientSideRedeemItem
export type ClientSideTrackCustomer = ClientSideCustomer
