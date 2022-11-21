import { rest } from './axiosInstances'
import CONST from '@/helpers/constants'
import { TSituation, TNewSituation } from '@/types/TSituation'
const base = '/alec'
const engineEndpoint = '/alec/engine/configuration'
const endpointAgreement = '/alec/agreement/configuration'
const situationStatusEndpoint = '/alec/situation/statusList'
const situationEndpoint = '/alec/situation'

export const savePermission = async (allowSaveValue: boolean) => {
	try {
		const resp = await rest.post(`${endpointAgreement}`, {
			agreed: allowSaveValue
		})
		if (resp.status === 201) {
			return true
		}
		return false
	} catch (err) {
		return false
	}
}

export const getUserInfo = async () => {
	try {
		const resp = await rest.get(`${endpointAgreement}`)
		if (resp.status === 200) {
			return resp.data
		}
		return false
	} catch (err) {
		return false
	}
}

export const saveEngineParameter = async (
	engineName: string,
	hellinger: boolean
) => {
	try {
		/**
		 * @TODO move default values to backend
		 **/
		const resp = await rest.post(engineEndpoint, {
			distanceMeasureName: hellinger
				? CONST.HELLINGER_OPTION
				: CONST.SPACE_DISTANCE_OPTION,
			engineName,
			alpha: 144.47117699,
			beta: 0.55257784,
			epsilon: 100
		})
		if (resp.status === 200) {
			return true
		}
		return false
	} catch (err) {
		return false
	}
}

export const sendFeedbackAcceptSituation = async (
	id: number,
	action: string
) => {
	try {
		const resp = await rest.post(`${base}/situation/${action}/${id}`, {
			headers: {
				'Access-Control-Allow-Origin': '*'
			}
		})
		if (resp.status === 200) {
			return true
		}
		return false
	} catch (err) {
		return false
	}
}

export const getSituationsStatus = async () => {
	try {
		const resp = await rest.get(situationStatusEndpoint)
		if (resp.status === 200) {
			return resp.data
		}
		return resp.data
	} catch (err) {
		return false
	}
}

export const getSituations = async (): Promise<TSituation[] | false> => {
	try {
		const resp = await rest.get(situationEndpoint)
		if (resp.status === 200) {
			return resp.data
		}
		return resp.data
	} catch (err) {
		return false
	}
}

export const removeAlarmsFromSituation = async (
	situationId: number,
	alarmIdList: number[]
) => {
	try {
		const resp = await rest.delete(`${base}/situation/alarm/`, {
			data: {
				situationId,
				alarmIdList
			}
		})
		return resp.status === 200
	} catch (err) {
		return false
	}
}

export const createSituations = async (
	situationInfo: TNewSituation
): Promise<boolean> => {
	try {
		const resp = await rest.post(situationEndpoint, situationInfo)
		return resp.status === 200
	} catch (err) {
		return false
	}
}
