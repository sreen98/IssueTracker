import axios from 'axios';

export default class IssueApi{

    static getAllIssues(){
        return axios.get("http://localhost:3001/Issues")
        .then(res=>res.data);
    }

    static addIssue(issue){

        return axios.post("http://localhost:3001/Issues",issue)
        .then(res=>res.data);
    }
    static deleteIssue(id) {
		return axios.delete("http://localhost:3001/Issues/" + id);
	}
    static editIssue(issue,id){
       return axios.put("http://localhost:3001/Issues/"+id,issue);
    }
    static addView(id,issue){
       
        return axios.patch("http://localhost:3001/Issues/"+id,issue)
        .then(res=>res.data);
    }
}