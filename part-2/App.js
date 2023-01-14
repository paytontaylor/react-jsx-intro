const App = () => (
    <div>
        <Tweet username='fuser' name='First User' message='First Post' date='01/14/2023'/>
        <Tweet username='suser' name='Second User' message='Second Post' date='01/14/2023'/>
        <Tweet username='tuser' name='Third User' message='Third Post' date='01/14/2023'/>
    </div>
)

ReactDOM.render(<App/>, document.getElementById('root'))