import axiosOrg, { AxiosResponse } from 'axios'
import { VoucherifyServerSide } from '../src'
import { encode } from '../src/helpers'

const axios = axiosOrg as jest.Mocked<typeof import('axios')['default']>

describe('Campaigns API', () => {
	const voucherify = VoucherifyServerSide({
		applicationId: 'node-test-app-id',
		secretKey: 'node-test-secret-key',
	})

	it('should create a campaign', async () => {
		const campaign = { name: 'Test campaign' }

		axios.post.mockResolvedValueOnce({ data: campaign, status: 200 } as AxiosResponse)

		await voucherify.campaigns.create(campaign)

		expect(axios.post).toHaveBeenCalledWith('/campaigns', campaign, { params: undefined })
	})
	it('should update a campaign', async () => {
		const nameOrId = 'Test campaign'
		const campaign = { description: 'Test campaign' }

		axios.put.mockResolvedValueOnce({ data: campaign, status: 200 } as AxiosResponse)

		await voucherify.campaigns.update(nameOrId, campaign)

		expect(axios.put).toHaveBeenCalledWith(`/campaigns/${encode(nameOrId)}`, campaign, { params: undefined })
	})
	it('should delete a campaign', async () => {
		const name = 'Test campaign'

		axios.delete.mockResolvedValueOnce({ status: 200 } as AxiosResponse)

		await voucherify.campaigns.delete(name)

		expect(axios.delete).toHaveBeenCalledWith(`/campaigns/${encode(name)}`, { params: { force: false } })
	})
	it('should pernamently delete a campaign', async () => {
		const name = 'Test campaign'

		axios.delete.mockResolvedValueOnce({ status: 200 } as AxiosResponse)

		await voucherify.campaigns.delete(name, { force: true })

		expect(axios.delete).toHaveBeenCalledWith(`/campaigns/${encode(name)}`, { params: { force: true } })
	})
	it('should get a campaign', async () => {
		const name = 'Test campaign'

		axios.get.mockResolvedValueOnce({ status: 200 } as AxiosResponse)

		await voucherify.campaigns.get(name)

		expect(axios.get).toHaveBeenCalledWith(`/campaigns/${encode(name)}`, { params: undefined })
	})
	it('should add voucher to a campaign with a specific code', async () => {})
	it('should add voucher to a campaign without params', async () => {})
	it('should import vouchers', async () => {})
	it('should list all campaigns', async () => {})
	it('should get qualified campaigns with audience rules only', async () => {})
	it('should get qualified campaigns with matching params', async () => {})
})
