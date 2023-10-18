class UserMasage extends React.Component{
    render() {
        return(
            <div>
                <small>{this.props.user}:</small>
                <p>{this.props.content}</p>
            <hr/>
            </div>
        );
    }
}

class Chatbox extends React.Component{
    render(){
		return(
			<div>
				<UserMassage user="Semmy Taju" content="Hi, apa kabar semua?"/>
				<UserMassage user="ayu" content="Baik, apa kabar juga?"/>
				<UserMassage user="veisy" content="sehat juga"/>
				<UserMassage user="lovi" content="aku senang"/>
				<UserMassage user="jessi" content="sangat bahagia"/>
				<UserMassage user="marion" content="biasa saja"/>
			</div>
		)
				
        
    }
}

ReactDOM.render(<Chatbox/>, document.getElementById("app"));
