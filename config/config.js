var config = {
    /*在这里配置你的基本信息，所有数据以字符串形式给出*/
    name: "赵政凯",
    sex: "男",
    age: "21",
    phone: "15674451393",
    email: "3057725898@qq.com this`s true",
    address: "湖南省长沙市",
    qq: "3057725898",
    log: "Unfishknower",
    excpect_work: "combining optoelectronics with deep learning and translating lab work into commercial applications.",


    /*在这里配置首页的座右铭集合*/
    motto: [
        "Tomorrow isn't guaranteed to be better, but we must hold faith that a better day will arrive.",
        "要做的事情总找得出时间和机会，不愿意做的事情也总能找得出借口。",
        "Gor For It!",
        "有智者立长志，无志者长立志。",
        "那些过去的眼泪终将风干在记忆里。",
        "真相，是为了剿灭幻想。",
   	"And in the chaos, she found herself — and that was everything.",
	"Stars can’t shine without darkness.",
   	"To live is the rarest thing in the world. Most people exist, that is all.",
	"We are all in the gutter, but some of us are looking at the stars.",
	"The wound is the place where the Light enters you.",
	"我欲将心向明月，奈何明月照沟渠。",
        "春风得意马蹄疾，一日看尽长安花。",
        "老当益壮，宁移白首之心。穷且益坚，不坠青云之志。",
        "We have to risk all that we possess to obtain what we lack.",
        "蒹葭苍苍，白露为霜；所谓伊人，在水一方。",
        "数风流人物，还看今朝！"
    ],


    /*在这里配置首页的见面信息，你可以内嵌HTML标签以调整格式*/
    welcome: "青青子衿，悠悠我心<br>" +
             "但为君故，沉吟至今<br>" +
             "Hello，我是赵政凯，中南林业科技大学电子信息工程大三在读生<br>" +
             "很高兴见到你!",


    /*在这里配置关于我的信息，你可以内嵌HTML标签以调整格式*/
    about: "<p>Hello! My name is Zhao Zhengkai. I am a male junior student at the School of Electronic Information and Physics, Central South University of Forestry and Technology. My current research interests include embedded hardware, optoelectronics, and deep learning.</p>" +
        "<p>I have extensive research experience in optics and electronic information engineering, which has helped me develop solid academic abilities during my undergraduate studies. At the same time, I have strengthened my skills in computer science—including computer networks, full-stack development, protocols, and deep learning—enabling me to think creatively in research and often find breakthroughs by integrating interdisciplinary approaches.Through participation in numerous competitions and projects, I have cultivated a passionate work ethic, strong teamwork abilities, and the capacity for independent development. I am skilled at identifying and solving problems, and I take pride in my strong execution, sense of responsibility, and collective spirit.</p>"+
	"<p>Outside of academics, I am also deeply passionate about life itself—particularly long-distance cycling and running. These endurance sports, which require both control and continuous bursts of energy, have made me more confident, disciplined, and healthy.</p>" +
        "<p>I sincerely look forward to connecting with you.</p>",



    /** 
    * 在这里配置你的技能点
    * ["技能点", 掌握程度, "技能条颜色"]
    */  
    skills: [
        ["C/C++", 88, "#1f77b4"],
        ["Python/JAVA", 80, "#ff7f0e"],
        ["COMSOL", 79, "#2ca02c"],
        ["MySQL", 70, "#d62728"],
        ["HTML5", 77, "#9467bd"],
        ["PCB", 85, "#17becf"],
        ["JavaScript", 75, "#4c5c68"],
        ["Office/Origin", 75, "#f9f9f9"],
        ["Matlab", 76, "#5C5B66"]

    ],


    /*这里填写你的技能描述，你可以内嵌HTML标签以调整格式*/
    skills_description: "<ul>" +
        "     <li>掌握麦克斯韦方程组、光的传播、干涉、衍射、波导理论等电磁场与光学的基础理论。</li>" +
        "     <li>熟练掌握C、Python、Java、JS、HTML、MySQL等多种编程语言。</li>" +
        "     <li>熟练掌握线性代数、概率论、傅里叶分析、微分方程。</li>" +
        "     <li>熟悉 STM32、FPGA、51单片机和传感器等嵌入式系统与硬件开发。</li>" +
        "     <li>掌握 PyTorch / TensorFlow 等框架。</li>" +
        "     <li>熟悉卷积神经网络（CNN）、Transformer 等模型，以及引入PINN约束。</li>" +
        "     <li>能够处理光学图像 / 光谱数据 / 结构矩阵等多模态输入。</li>" +
        "     <li>熟悉COMSOL、Keil5、PCB、有限元仿真和3D建模等一系列设计平台。</li>" +
        "     <li>了解计算机网络与前后端开发能力，如flask、vue、spring boot等框架。</li>" +
        "     <li>对SPR-PCF传感器、超表面等方向有很多的学术学习并深入研究，熟悉其物理机制。</li>" +
        "     <li>正在了解一些与目前研究方向相关的大众商业知识，包括医疗器械、医美行业、环境监测等。</li>" +
        " </ul>",


    /**
     * 这里填写你的个人作品展示
     * ["img"，"url", "ProjectName", "brief"]
     * img表示您的作品图片链接，url表示您的项目地址，ProjectName表示您的仓库或作品名称，brief是一句简短的介绍
     * 通过查看实际效果以调整字题长度
     */
    portfolio: [
        ["./images/服创.png", "", "JS可视化大屏解决方案", "解决了websocket和OpenAPI接口问题。面对大量同时涌入的实时数据，为了减少了内存占用、计算开销和网络负载，设计了非共享数据的局部更新机制和流式处理代码方案<br>持续更新"],
        ["./images/仿生.png", "", "仿生视觉系统", "用的maix bit家的K210开发板。OV2640摄像采集识别色块，位置式PID输出PWM波控制6个SG90舵机旋转，机械结构将旋转的变换传动成眼球的上下左右移动和眼睑张闭"],
        ["./images/画图.jpg","", "悬挂式画图机", "绘图笔通过两根绳子悬挂在一块垂直的木板上。步进电机通过调节左右绳子的长度来控制笔尖移动并完成绘图。STM32 微控制器作为主控器，图像数据存储在 U 盘中"],
        ["./images/小程序.png", "", "老年人社区微信小程序", "数据库采用MYSQL；后端SpringBoot框架搭建，JAVA开发；前端就是微信开发者工具开发的（wxss那一套）,目前主要的的功能就是打造一个线上的老人社区"],
 ["./images/情绪.png", "", "实时采集情绪系统", "HTML开发的，挺简单，主要就是提供一个demo喽，接入模型做一个学习就行，注意的就是调用的是本机摄像权限：navigator.mediaDevices.getUserMedia"],
["./images/爬虫.png", "", "Pyhon网络爬虫", "当时准备三创的商务大数据分析比赛的时候做的一个爬虫脚本，爬取淘宝网店的评论数据和SKU表单之类的。"],
["./images/51.jpg", "", "51单片机遥控小车", "第一次玩单片机以及踩的坑。"],
["./images/抓包.jpg", "", "wershark抓包工具", "在工业以太网中使用wershark抓包工具抓取不同协议的信息包"],
["./images/焊接.jpg", "", "焊工来了", "记录电子生第一次焊板子"],
["./images/骑行.jpg", "", "150公里", "从长沙骑行到岳阳，一天干完，给自个儿感动到了。顺带出一期骑行攻略，都是老老实实踩的坑。"],
["./images/cubase.jpg", "", "电子音乐求助", "这几天下载了那个cubase，想试一下制作电子音乐，但是为什么音轨不能分开定位音色，我定了一条就改不了下一条。而且他还导出不来，为什么"],
["./images/西门子.jpg", "", "西门子智能挑战赛（信息化网络化）", "PLC还是两个通信，依旧是一个冗余环，一个远程控制端。但是要注意的是，HRP协议配置时不要把IP配了"],
["./images/3D.jpg", "", "3D建模", "这次用的fusion360，感觉电脑带不动，后面买了一个极光尔沃的3D打印机，Z型号的，打算打印一下。"],
["./images/PCB.jpg", "", "PCB", "第一次设计PCB，这是一个电源系统，包括稳压、升压和降压电路，用的嘉立创PCB工具。"],
["./images/鸿蒙.jpg", "", "鸿蒙OS", "还是做的一个前端项目，先做一个手机界面个人信息的，后面做了一个手机界面电话联系，最后弄了一个PC端电商界面"],
["./images/mat.jpg", "https://github.com/happysnaker/Gobang", "频域变化", "把人的声音和丹顶鹤的叫声做了一个频域变化，分析了一下，用的matlab的FFT功能。"],
["./images/商务.jpg", "", "商务大数据分析", "三创赛，选的给水果公司做一下数据上的分析，提供一些建议，尤其是预采摘时间和上架成熟时间的时间差问题，以及消费者的情感分析，用的python的库函数"],
["./images/倒立摆.jpg", "", "倒立摆", "STM32开发，啥都不多说了，这性能绝对嘎嘎乱杀，我愿称之为林大摆王"],
["./images/QT.png", "", "QT上位机程序", "想用QT开发上位机程序的朋友们，我先做了一个记事本，可以当作入门小项目。建议先学Win32API的知识"],
["./images/小车.jpg", "", "平衡小车项目", "这个自平衡小车设计于早年的电赛题，采用keil5平台，基于STM32开发板开发，主要是MPU6050进行数据采集、DMP 解算姿态、霍尔传感器检测车轮状态，并通过 PID综合控制实现平衡"]
    ],


    /**
     * 这里填写您的工作经历
     * ["日期"， "工作"， "介绍"]
     * 你可以内嵌HTML标签以排版格式
     */
    work: [
        //如果您内有工作经历，您可以采取下列写法
        // ["————————", "", "<p>暂无工作经历，期待您的联系。</p>"]

        ["[Nov. 2023] – [May. 2025]", "<br>Fire Emergency UAV Response System",
            "<p><strong>Prof. Zhenfei Yang 杨振飞教授</strong></p>" +
            "<p>•	To address the connectivity challenges in disaster scenarios, an IRS-assisted UAV relay communication paradigm is employed, leveraging smart signal reflection for enhanced link reliability and coverage extension.For autonomous aerial navigation, a hybrid PSODE-based trajectory planning algorithm is developed, integrating passive fault-tolerance strategies to ensure secure and energy-efficient UAV operations in uncertain environments.</p>" +
            "<p>专利：<br>一种具有现场信息采集功能的消防无人机:ZL 2024 2 1225580.X<br>一种具有应急通讯中继功能的消防无人机:2024212257650</p>"
        ],

        ["[Sep. 2024] – [Jun. 2025]", "<br>Performance Prediction of SPR-PCF Structures Using Deep Learning",
             "<p><strong>Prof. Ling Li 李琳教授</strong></p>" +
            "<p>•	Developed a multimodal depression monitoring system based on Raspberry Pi, integrating a camera, voice acquisition module, and heart rate sensor to enable real-time emotion recognition and mental health assessment at the edge. By leveraging machine learning algorithms such as RF and LR, the system fuses visual, audio, and physiological signals to achieve high-accuracy, multidimensional analysis of emotional states.</p>" +
            "<p>大学生创新创业训练计划，湖南省级课题项目</p>"
        ],

	["[Nov. 2023] – [Aug. 2024]", "<br>Multimodal Depression Recognition System",
	    "<p><strong>Dr. Exian Liu 刘娥贤博士</strong></p>" +
            "<p>•	Current deep learning models face challenges in cross-structure prediction of SPR-PCF optical properties.Proposed a Matrix-Encoding Enhanced Multilayer Perceptron (MEE-MLP) solution.Conducted multi-dimensional validation, developing a comprehensive evaluation framework encompassing error ratio, sampling accuracy, and statistical significance, demonstrating exceptional predictive capability for five key optical performance metrics.</p>" +
            "<p>论文第一作者，在投：A Universal Prediction Framework for Various SPR-PCF Stacked Sensor Structures Based on Matrix-Encoded Deep Learning<br>论文第二作者，在投：A novel fiber structure generating a continuous spectrum based on nonlinear effects.</p>"
        ]
    ],


    /**
     * 这里填写你的其他经历
     * ["日期"， "经历"， "介绍"]
     * 建议填写您的校级及以上得奖经历或或其他证书
     */
    others: [
        ["2023-08", "永定区运动会", "志愿裁判助理，获得褒奖"],
        ["2023-12", "甲等奖学金", "大一学年的奖学金，排名第9/187"],
        ["2024-04", "长沙湘江马拉松", "担任检录点志愿者"],
        ["2024-05", "五四青年节", "获得优秀青团员"],
	 ["2024-05", "中国大学生计算机设计大赛中南赛区一等奖", "做了一个滴水印刷广告小车。"],
 	["2024-05", "互联网+和挑战杯", "校级三等奖和二等奖，两项专利"],
 	["2024-07", "西门子杯智能制造挑战赛（信息化网络化）", "拿下中南赛区的二等奖"],
  	["2024-08", "中国大学生服务外包创新大赛国家二等奖", "几个来自不同学院的小伙伴通力合作，优势互补，拿下比赛。"],
	 ["2024-12",  "甲等奖学金", "大二学年的奖学金，排名第8/184"],
        ["2024-12", "国家励志奖学金", ""],
 	["2025-06", "长沙瞰维智能科技有限公司", "作为股东，由项目基金参与成立公司"],

    ],


    /**
     * 在这里填写您的社交网络平台
     * ["img", "url", "desc"]
     * img是社交平台的图标，在./svg目录下我们已经准备好了 微博、简书、掘金、小红书、知乎、csdn、facebook、github、力扣、CF和qq的图标
     * url是您链接
     * desc是一段描述，将鼠标移入将会显示该描述
     * 建议您放置数量 <= 5
     */
    icon: [
        ["./svg/LeetCode.svg", "", "我的力扣主页"],
        ["./svg/github.svg", "https://github.com/wojiaonibababa", "我的GitHub主页"],
        ["./svg/博客.svg", "", "我的个人博客"],
        ["./svg/掘金.svg", "", "我的掘金主页"],
        ["./svg/知乎.svg", "", "我的知乎主页"]
    ],


    //这是一些图片链接，建议您仅更改第二个头像图片
    url: [
        //背景图、头像、作品展示背景、其他经历背景
        "./images/e.png",
        "./images/c.jpg",
        "./images/b.png",
        "./images/4.jpg"
    ]

}
