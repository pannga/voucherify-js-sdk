export interface OrdersItemObject {
	sku_id?: string
	product_id?: string
	related_object?: 'product' | 'sku'
	source_id?: string
	quantity?: number
	price?: number
	amount?: number
	product?: {
		override?: boolean
		name?: string
		metadata?: Record<string, any>
	}
	sku?: {
		override?: boolean
		sku?: string
	}
}

export interface OrdersCustomerObject {
	source_id?: string
	name?: string
	email?: string
	metadata?: Record<string, any>
}

export interface OrdersCreateOrder {
	customer?: OrdersCustomerObject
	amount?: number
	items?: OrdersItemObject[]
	metadata?: Record<string, any>
}

export interface OrdersCustomerObjectResponse {
	id?: string
	object: 'customer'
}

export interface OrdersCreateResponse {
	id?: string
	source_id?: string
	created_at?: string
	updated_at?: string
	status?: string
	amount?: number
	discount_amount?: number
	items?: OrdersItemObject[]
	metadata?: Record<string, any>
	customer?: OrdersCustomerObjectResponse
	object: 'order'
}

export type OrdersGetResponse = OrdersCreateResponse

export interface OrdersUpdateOrder {
	id: string
	status?: 'CREATED' | 'PAID' | 'CANCELLED' | 'FULFILLED'
	items?: OrdersItemObject[]
	amount?: number
	metadata?: Record<string, any>
	customer?: {
		id?: string
	}
}

export interface OrdersList {
	limit?: number
	page?: number
}

export interface OrdersListResponse {
	object?: string
	total?: string?
	data_ref: 'orders'
	orders: OrdersGetResponse[]
}
