import { Component, signal } from '@angular/core';

//interface
import { IExperiences } from '../../interface/IExperiences.interface';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {
  public arrayExperiences = signal<IExperiences[]>([
    {
      summary: {
        strong: 'Desenvolvedor de Sistemas .NET',
        p: 'DER(Convergência) | Jun 2021 - Set 2023',
      },
      text: '<p>Desenvolvimento de novas funcionalidades e correções de problemas em C#. Correções de problemas em projetos ASP.NET(WebForms), ASP.NET(MVC). Criação e manutenção de API-Rest(.Core). Criação e manutenção de consultas, procedures, Views e functions no banco de dados SQL Server.</p>',
    },
    {
      summary: {
        strong: 'Desenvolvedor de Sistemas Informix-4gl',
        p: 'Penske | Nov 2020 - Jan 2021',
      },
      text: '<p>Desenvolvimento de programas para projeto de sistema de Logística, utilizando Informix-4gl.</p>',
    },
    {
      summary: {
        strong: 'Analista De Dados',
        p: 'Dimetrika | Mar 2020 - Nov 2020',
      },
      text: '<p>Análise de dados ambiente SQL Server, geração de dailys e informações gerenciais para controle de indicadores, manutenção de pacotes no Integration Server, manutenção de procedures, views e funções SQL Server 2016.</p>',
    },
    {
      summary: {
        strong: 'Desenvolvedor de Sistemas .NET',
        p: 'Vermont |  Jul 2019 - Jan 2020',
      },
      text: '<p>Análise e desenvolvimento em sistemas legado, tal como a manutenção dos mesmos, com foco em Dot Net,Html, Css, JavaScript e SQL Server, utilizando tecnologias e componentes, tais como Web Forms ,Mvc, Visual Studio 2015 e 2017, TFS (Team Fundation Service).</p>',
    },
    {
      summary: {
        strong: 'Desenvolvedor de Sistemas Informix-4gl',
        p: 'Porto Seguro(Consultoria Intera) | Ago 2018 - Nov 2018',
      },
      text: '<p>Atuação na área de Tecnologia da Informação, executando manutenção no sistema de Comissões utilizando Informix/4gl.</p>',
    },
    {
      summary: {
        strong: 'Desenvolvedor de Sistemas Informix-4gl',
        p: 'Porto Seguro(Consultoria Inforsystem) | Ago 2013 - Maio 2018',
      },
      text: '<p>Atuação na área de Tecnologia da Informação, analisando, executando o desenvolvimento e a manutenção de sistemas pré-existentes com a Tecnologia Informix/4gl. Envolvido no projeto Integração SOA do produto Auto com o Departamento de Cobrança, atuando no Desenvolvimento, Analise. Desenvolvimento de serviços Java, JSF, JPA, JSP, Hibernate, JQuery, PrimeFaces, Web Service, EJB, Maven, Websphere, RAD, Eclipse, RTC, Spring MVC, Spring Batch, 4gl, Oracle, Informix e Metodologia Ágil.</p>',
    },
    {
      summary: {
        strong: 'Desenvolvedor de Sistemas Informix-4gl',
        p: 'Porto Seguro(Consultoria MetaIt) | Dez 2007 - Jul 2013',
      },
      text: '<p>Análise, desenvolvimento e manutenção de sistemas Informix/4gl nas áreas de Contabilidade, Financeiro, Vida, Massificados, Resseguros, Ramos Elementares, Transportes, entre outras. Atendimento de chamados e implementação de soluções a problemas e incidentes.</p>',
    },
    {
      summary: {
        strong: 'Desenvolvedor de Sistemas Informix-4gl',
        p: 'Bradesco(Consultoria AMS) | Abr 2007 - Nov 2007',
      },
      text: '<p>Análise e manutenção em sistemas Financeiros utilizando Informix-4gl.</p>',
    },
    {
      summary: {
        strong: 'Desenvolvedor de Sistemas Informix-4gl',
        p: 'Omint(Consultoria Yoshitec) | Ago 2002 - Mar 2007',
      },
      text: '<p>Análise, implementação e manutenção de sistemas em Informix-4gl para as áreas de Reembolso de Livre Escolha, Cadastros Gerais, Faturamento, Contabilidade, Comissões Sobre Vendas .</p>',
    },
    {
      summary: {
        strong: 'Desenvolvedor de Sistemas Informix-4gl',
        p: 'Rilisa(Consultoria TS&O) | Ago 2001 - Mai 2002',
      },
      text: '<p>Análise, Desenvolvimento, implementação e manutenção de sistemas de gestão comercial voltados para o segmento de Logística da Empresa.</p>',
    },
    {
      summary: {
        strong: 'Desenvolvedor de Sistemas Informix-4gl',
        p: 'Hosp:Sírio Libanês(Consultoria Yoschitec) | Mai 2001 - Jul 2001',
      },
      text: '<p>Análise, Desenvolvimento e manutenção de sistemas de gestão Hospitalar.</p>',
    },
    {
      summary: {
        strong: 'Desenvolvedor de Sistemas Informix-4gl',
        p: 'CBA-Comp.Bras.de Aluminio(Consultoria Procwork) | Jan 2000 - Abr 2001',
      },
      text: '<p>Análise, Desenvolvimento, implementação e manutenção de sistemas em Informix-4gl para controle de Tarugos,Placas e Vergalhões.</p>',
    },
    {
      summary: {
        strong: 'Programador Natural DB2, Cobol DB2',
        p: 'SEF-MG(Consultoria Incoop) | Jul 1999 - Dez 1999',
      },
      text: '<p>Desenvolvimento e Manutenção de Programas em Natural / DB2 e Cobol / DB2.</p>',
    },
    {
      summary: {
        strong: 'Progrmador Natural Adabas',
        p: 'Telemar(Consultoria Sistemática) | Abr 1999 - Jun 1999',
      },
      text: '<p>Desenvolvimento em programas, utilizando Natural Adabas.</p>',
    },
    {
      summary: {
        strong: 'Desenvolvedor de Sistemas Informix-4gl',
        p: 'Banco Credireal | Jul 1988 - Set 1998',
      },
      text: '<p>Desenvolvimento, implementação e manutenção de sistemas administrativos Bancários Utilizando Informix- 4gl , Cobol baixa Plataforma.</p>',
    },
  ]);
}
