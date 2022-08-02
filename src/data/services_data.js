import {AiOutlineAudit, AiOutlineAccountBook, AiFillProject} from "react-icons/ai"
import {GiTakeMyMoney, GiArchiveResearch} from "react-icons/gi"
import {FaBusinessTime, FaHireAHelper} from "react-icons/fa"
import {RiComputerLine} from "react-icons/ri"
import {TbDeviceComputerCamera} from "react-icons/tb"
import {GrUserManager} from "react-icons/gr"
import im1 from "../assets/images/audit.jpg"
import im2 from "../assets/images/taxes.jpg"
import im3 from "../assets/images/payroll.jpg"
import im4 from "../assets/images/proposaldev.jpg"
import im5 from "../assets/images/research.jpg"
import im6 from "../assets/images/projectmgt.jpg"
import im7 from "../assets/images/recruitment.jpg"
import im8 from "../assets/images/secretaraitserv.jpg"
import im9 from "../assets/images/itservices.jpg"
import im10 from "../assets/images/businessincub.jpg"


const allServices = [
  {
    id: 1,
    heading: "Audit & Assurance ",
    description: "We provide end of year audit of financial statements, interim system audit and organization process audits",
    content: "At IBMC, we focus on delivering quality audit that gives maximum assurance to investors, financiers and players in the capital market. Our team of experienced auditors sees audit as a powerful lens for illuminating the current state of an enterprise, providing insights that help organizations see further and deeper into their businesses. IBMC audit is more than just a statutory obligation and that’s why we are employing cutting-edge technologies, data analytics, and audit delivery centers to continuously improve audit quality, streamline processes, and deliver greater insights to our clients",
    icon: <AiOutlineAudit size={23} color="blue" />,
    image: im1
  },
  {
    id: 2,
    heading: "Tax Advisory",
    description: "Our tax advisory services starts at the point of registering your company for tax,   and advising in areas of tax...",
    content: "Our tax advisory services starts at the point of registering your company for tax,   and advising in areas of tax incentives, tax planning, tax compliance, and tax management, including government incentives. We also assist clients’ handle Direct tax, and Indirect tax (VAT/NHIL), Tax audits and filing tax returns with the GRA.",
    icon: <GiTakeMyMoney size={23} color="blue" />,
    image: im2
  },
  {
    id: 3,
    heading: "Accounting & Payroll Management",
    description: "IBMC offer fully outsourced payroll services to clients where we manage salary payments including ...",
    content: "IBMC offer fully outsourced payroll services to clients where we manage salary payments including P.A.Y.E & SSNIT (1st & 2nd tier) payment. We also take care of clients’ Leave Management, and Claims Management to allow our clients focus on core duties as we take charge of all the salary management issues. Our experienced accountants will work with you to streamline your accounts on daily, weekly or monthly basis to keep proper books/records.",
    icon: <AiOutlineAccountBook size={23} color="blue" />,
    image: im3
  },
  {
    id: 4,
    heading: "Business Planning & Proposal Development",
    description: "We help individuals and businesses develop business plans and proposals suitable to wow investment interests from",
    content: "financiers and funding institutions for projects. We help individuals and businesses develop business plans and proposals suitable to wow investment interests from financiers and funding institutions for projects. At IBMC, we take time to understand our clients’ business idea and concepts, research and apply our cross industry experience to craft a realistic business plan accompanied by good financial projections. Over the years we have mastered the art of planning and has developed plans that won investors interests including the 1D1F projects. ",
    icon: <FaBusinessTime size={23} color="blue" />,
    image: im4
  },
  {
    id: 5,
    heading: "Market Research, Feasibility Studies & Market Representation",
    description: "At IBMC, we employ qualitative and quantitative research methods in extracting market information to help companies willing to enter any industry within the...",
    content: " Ghanaian market and other parts of Africa. IBMC leverage on a cutting- edge mobile data collection applications that harness our data collection and reduces the degree of inaccuracy. IBMC has well over 250 standby field data collectors for data sourcing while maintaining a team of experienced data analysts with expertise in processing and analyzing data into meaningful reports for management use. Our team helps clients’ management develop a marketing strategy that will be closely monitored at the implementation stage to ensure the objective is achieved.  IBMC key areas of research include; Customer satisfaction surveys, Product launch and brand awareness, Product preference and Customer expectations, Customer service performance, General Market Surveys and feasibility studies.",
    icon: <GiArchiveResearch size={23} color="blue" />,
    image: im5
  },
  {
    id: 6,
    heading: "Financial Engineering & Project Management",
    description: "At IBMC, we excel at developing custom solutions and delivering actionable financial models that helps improve business forecasting systems, profitability factor analysis, and...",
    content: "business processes improvement to meet our clients’ business challenges. We provide you with financial projections, and business valuation services that help re-engineer your financials to fairly represent your company’s worth considering its historical numbers, situation analysis and future prospects. We provide our clients with comprehensive analytical tools to assist in identifying and quantifying risk concentrations in the business. We also assist clients’ secure financial and non- financial investments from investors and partner institutions for their new projects upon appraisal by our dynamic team of project experts. During this time, IBMC keenly involved in providing investees with planning projects professionally to obtain funding and also assist in monitoring and evaluating project execution upon receiving funding.",
    icon: <AiFillProject size={23} color="blue" />,
    image: im6
  },
  {
    id: 7,
    heading: "Corporate Training & Recruitment",
    description: "We work with partners, trainers and seasoned HR practitioners with decades of industry experience to deliver tailor made staff trainings suitable for your company.",
    content: "We work with partners, trainers and seasoned HR practitioners with decades of industry experience to deliver tailor made staff trainings suitable for your company.  At IBMC, client specific trainings to all corporate organizations seeking to build staffs’ professional capacity. Our Corporate training expertise range from; Behavioral and Change Management, Customer Care, Financial Modeling, Value Chain and Innovation, Operations Management, and Corporate Leadership. All our training sessions are skewed to enhancing staff performance to induce value addition.",
    icon: <FaHireAHelper size={23} color="blue" />,
    image: im7
  },
  {
    id: 8,
    heading: "Company formation & Secretarial service",
    description: "We help individuals and companies register new businesses with the Registrar General’s Department (RGD), Ghana Revenue Authority (GRA), Social Security & National...",
    content: "Insurance Trust (SSNIT), and to register with other industry specific regulatory bodies like the Foods & Drugs Authority (FDA), Ministry of Works & Housing, and Ministry of Roads & Highways etc. We help individuals and companies register new businesses with the Registrar General’s Department (RGD), Ghana Revenue Authority (GRA), Social Security & National Insurance Trust (SSNIT), and to register with other industry specific regulatory bodies like the Foods & Drugs Authority (FDA), Ministry of Works & Housing, and Ministry of Roads & Highways etc. We also provide professional corporate secretarial services by serving as your corporate secretary helping your company file annual returns, amending business details, and liquidating company etc. at RGD.",
    icon: <GrUserManager size={23} color="blue" />,
    image: im8
  },
  {
    id: 9,
    heading: "I.T Support Services",
    description: "As a company, we understands that our clients uses computers and accessories; so we developed partnership with a team of computer engineers, webmasters and network specialists...",
    content: "who manages both hardware and software problems, develop office management applications and accounts management software to make work easy for all IBMC clients. As a company, we understands that our clients uses computers and accessories; so we developed partnership with a team of computer engineers, webmasters and network specialists who manages both hardware and software problems, develop office management applications and accounts management software to make work easy for all IBMC clients. We also provide trainings on the use of these applications and continuously offer  other I.T related assistance that may be required.",
    icon: <RiComputerLine size={23} color="blue" />,
    image: im9
  },
  {
    id: 10,
    heading: "Business Incubation & Promotion",
    description: "As a management consulting and research based firm with cross industry experience, we have in-depth knowledge and information on various sectors of the economy with which we guide aspiring entrepreneurs.",
    content: "As a management consulting and research based firm with cross industry experience, we have in-depth knowledge and information on various sectors of the economy with which we guide aspiring entrepreneurs. At IBMC, our team will assist you right from conceiving the business idea, conducting market feasibility study, through planning to business registration, sourcing funding and to fully implementing the business idea. We provide entrepreneurs with time tested tailored business models and strategies that will help you succeed in business irrespective of the sector you choose to set-up. This has compelled startups and entrepreneurs to call IBMC when they look for assistance.",
    icon: <TbDeviceComputerCamera size={23} color="blue" />,
    image: im10
  },
];




const shortServices = [
  {
    id: 1,
    heading: "Tax Advisory",
    description:
      "  Our tax advisory services starts at the point of registering your company for tax,   and advising in areas of tax incentives, tax planning, tax compliance, and tax management, including government incentives.",
    content: "",
    image: "../assets/images/ten.png",
  },
  {
    id: 2,
    heading: "Accounting & Payroll Management",
    description:
      "  IBMC offer fully outsourced payroll services to clients where we manage salary payments including P.A.Y.E & SSNIT (1st & 2nd tier) payment",
    content: "",
    image: "../assets/images/four.png"
  },
  {
    id: 3,
    heading: "Business Planning & Proposal Development",
    description:
      "  We help individuals and businesses develop business plans and proposals suitable to wow investment interests from financiers and funding institutions for projects",
    content: "",
    image: "../assets/images/six.png"
  },
  {
    id: 4,
    heading: "Business Incubation & Promotion",
    description:
      "  As a management consulting and research based firm with cross industry experience, we have in-depth knowledge and information on various sectors of the economy with which we guide aspiring entrepreneurs.",
    content: "",
    image: "../assets/images/nine.jpg"
  },
  {
    id: 5,
    heading: "Company formation & Secretarial service",
    description:
      "  We help individuals and companies register new businesses with the Registrar General’s Department (RGD), Ghana Revenue Authority (GRA), Social Security & National Insurance Trust (SSNIT), and to register with other industry specific regulatory bodies like the Foods & Drugs Authority (FDA), Ministry of Works & Housing, and Ministry of Roads & Highways etc",
    content: "",
    image: "../assets/images/eight.jpg"
  },
  {
    id: 6,
    heading: "Corporate Training & Recruitment",
    description:
      "  We work with partners, trainers and seasoned HR practitioners with decades of industry experience to deliver tailor made staff trainings suitable for your company.",
    content: "",
    image: "../assets/images/five.png"
  },
];

    export { shortServices, allServices };
