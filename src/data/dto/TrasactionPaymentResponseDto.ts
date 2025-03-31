export interface TransactionPaymentResponseDto {
	order_id: string,
	amount: number,
	status: string,
	qr_code: string,
	expire_at: string
}