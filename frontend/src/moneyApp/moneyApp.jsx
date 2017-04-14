import React, { Component } from 'react';
import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'

class MoneyApp extends Component {
    render() {
        return (
            <div>
                <ContentHeader title='Ciclos de Pagamentos' small='Versão 1.0'/>
                <Content>Ciclos de Pagamentos</Content>
            </div>
           
        )
    }
}

export default MoneyApp;