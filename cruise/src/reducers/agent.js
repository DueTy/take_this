const
    DEPLOY_SUCCESSED = "DEPLOYED_SUCCESS",
    DEPLOY_FAILED = "DEPLOY_FAILED";

const
    defaultState = {
        name: "defaulter",
        os: "centos",
        status: "idle",
        type: "virtual",
        ip: "192.168.1.111",
        location: "/var/lib/cruise-agent",
        resources: [
           "Ubuntu"
        ],
        id: 8080
    };


export function agent(state = defaultState, action) {
    switch (action.type) {
        case DEPLOY_SUCCESSED:
            return {
                ...state
            }
        case DEPLOY_FAILED:
            return {
                ...state
            }
        default:
            return state
    }
}

//部署成功
export function deploySuccess(data) {
    return {
        type: DEPLOY_SUCCESSED,
        payload: data
    }
}
//部署失败
export function deployFail(data) {
    return {
        type: DEPLOY_FAILED,
        payload: data
    }
}

export default {
    agent, deploySuccess, deployFail
};