class Message extends React.Component{
	render(){
		return(
			<div>
				<small>{this.props.user}:</small>
				<p>{this.props.content}</p>
				<hr/>
			</div>
		);
	}
}
class ContentPage extends React.Component{
    render(){
		return(
			<div class="main">
				<h2>Live Chat with Chatbot</h2>
				<h5>This is just a demo chats, Oct 31, 2022</h5>
				<Massage user="Ayu" content="Hi, apa kabar semua?"/>
				<Massage user="Chatbot" content="Baik"/>
				<Massage user="Ayu" content="apa kamu manusia?"/>
				<Massage user="Chatbot" content="Bukan saya adalah virtual bot"/>
			
			</div>
		);
				
        
    }
}