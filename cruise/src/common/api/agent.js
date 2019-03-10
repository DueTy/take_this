import HTTP from "@/common/http";

const http = HTTP();

const api = {
    getAgents: function() {
        return http.get("/agents");
    },
    searchAgent: function({ id }) {
        return http.get(`/agents/${id}`);
    },
    putAgent: function({ data, id }) {
        return http.put(`/agents/${id}`, data);
    }
};

export default api;
