export interface VocabItem {
  term: string;
  pos: string;
  level: 'B2' | 'C1' | 'C2';
  vietnamese: string;
  exampleInSpeech?: string;
}

export interface DetailedOutline {
  intro: {
    timing: string;
    hookAndContext: string;
    coreProblem: string;
    thesis: string;
  };
  body1: {
    title: string;
    timing: string;
    mainPoint: string;
    explanation: string;
    extension: string;
  };
  body2: {
    title: string;
    timing: string;
    mainPoint1: string;
    mainPoint2: string;
  };
  conclusion: {
    timing: string;
    restatement: string;
    finalTakeaway: string;
  };
}

export interface TopicData {
  id: number;
  code: string;
  title: string;
  vietnameseTitle: string;
  category: 'Tech & AI' | 'Environment & Ecology' | 'Society & Culture' | 'Economy & Work' | 'Youth & Psychology';
  context: string;
  task: string;
  outline: DetailedOutline;
  advancedVocabulary: VocabItem[];
  realWorldData: string[];
  sampleTalk: string;
  keyThemes: string[];
}

export const TOPICS_DATA: TopicData[] = [
  {
    id: 1,
    code: 'TOPIC 1',
    title: 'TEENAGE EMPLOYMENT & PART-TIME JOBS',
    vietnameseTitle: 'Việc làm thêm ở lứa tuổi học sinh THPT: Cơ hội rèn luyện hay Nguy cơ tổn hại',
    category: 'Youth & Psychology',
    context: 'A survey on teenage employment reveals that 65% of high school students working part-time jobs report higher levels of time-management skills. However, 42% admit their academic performance dropped by at least 10%, and 58% experience regular sleep deprivation.',
    task: 'Deliver a five-minute talk to discuss what this case may imply about the impacts of part-time employment on high school students. Use clear reasoning and specific examples in your response.',
    outline: {
      intro: {
        timing: 'approx. 45s',
        hookAndContext: 'Acknowledge the rising trend of high school students engaging in part-time employment in modern society.',
        coreProblem: 'Briefly synthesize prompt data: 65% improve time management, but 42% suffer academic decline and 58% endure chronic sleep deprivation.',
        thesis: 'State that while part-time work fosters crucial life skills, it poses a multi-faceted threat to adolescents\' academic performance and physical well-being if not carefully calibrated.'
      },
      body1: {
        title: 'The Silver Lining – Skill Acquisition',
        timing: 'approx. 1m 30s',
        mainPoint: 'Practical workplace exposure builds accountability and time-management competencies.',
        explanation: 'Balancing a structured shift with academic deadlines forces teenagers to prioritize tasks and abandon procrastination.',
        extension: 'Financial literacy; early exposure to the "real world" cultivates resilience and interpersonal skills.'
      },
      body2: {
        title: 'The Dark Side – Academic and Health Costs',
        timing: 'approx. 2m 00s',
        mainPoint1: 'Academic Erosion: A 10% drop in grades (in 42% of students) indicates cognitive exhaustion overpowers study hours. Rigorous mental focus is directly compromised by physical fatigue.',
        mainPoint2: 'Physiological Toll: 58% sleep deprivation is alarming. Adolescents require adequate sleep for brain development. Chronically cutting sleep leads to mental burnout and decreased emotional regulation.'
      },
      conclusion: {
        timing: 'approx. 45s',
        restatement: 'Reiterate the dual nature of teen employment (a classic double-edged sword).',
        finalTakeaway: 'The key lies in moderation (limiting work to under 10–15 hours/week) and robust support systems from parents and schools to ensure work complements, rather than compromises, personal growth.'
      }
    },
    advancedVocabulary: [
      { term: 'Double-edged sword', pos: 'n', level: 'C1', vietnamese: 'Con dao hai lưỡi' },
      { term: 'To calibrate', pos: 'v', level: 'C2', vietnamese: 'Điều chỉnh một cách chính xác (hợp lý)' },
      { term: 'Time-management competencies', pos: 'n', level: 'C1', vietnamese: 'Năng lực quản lý thời gian' },
      { term: 'Academic erosion / decline', pos: 'n', level: 'C1', vietnamese: 'Sự giảm sút về học tập' },
      { term: 'Physiological toll / deprivation', pos: 'n', level: 'C2', vietnamese: 'Hệ lụy / sự tổn hại về mặt sinh lý' },
      { term: 'To jeopardize', pos: 'v', level: 'C1', vietnamese: 'Gây nguy hiểm, hủy hoại' },
      { term: 'Cognitive exhaustion', pos: 'n', level: 'C2', vietnamese: 'Kiệt quệ về mặt nhận thức / trí óc' },
      { term: 'Precursor to burnout', pos: 'phr', level: 'C2', vietnamese: 'Dấu hiệu báo trước của sự kiệt sức' }
    ],
    realWorldData: [
      'According to research by the U.S. Bureau of Labor Statistics, working more than 20 hours per week during the school year is strongly correlated with higher dropout rates and substance abuse.',
      'Conversely, studies from the Journal of Adolescent Health indicate that "light employment" (under 10 to 15 hours weekly) actually enhances academic self-efficacy and smooths the transition into adulthood.'
    ],
    sampleTalk: `Good morning, honorable members of the jury. Today, I would like to delve into a pressing contemporary issue that sits at the intersection of youth development and academic pressure: adolescent part-time employment.

The provided case statistics present a classic example of a double-edged sword. On one hand, an impressive 65% of working high school students report enhanced time-management skills. On the other hand, the data exposes a darker reality: a 42% drop in academic performance and a staggering 58% of students suffering from chronic sleep deprivation. This case strongly implies that while early employment offers valuable character-building opportunities, its unregulated execution can severely jeopardize a student's educational foundation and physiological well-being.

Let us first examine the undeniable merits of teen employment. The fact that nearly two-thirds of working teenagers experience an upgrade in their time-management competencies is telling. In a traditional school environment, time is highly structured by teachers and parents. However, when a teenager steps into the workforce, they enter an ecosystem governed by strict professional accountability. Juggling a shifting schedule alongside school deadlines forces a student to eliminate procrastination and actively prioritize tasks. Furthermore, earning a paycheck introduces teenagers to financial literacy and fosters a sense of independence. They learn the intrinsic value of labor, which is a critical precursor to long-term career readiness.

However, these benefits cannot blindly justify the substantial costs highlighted in the survey. The fact that over 40% of students saw their grades plunge by at least 10% indicates that the cognitive load of balancing work and school often exceeds an adolescent's threshold. High school curricula are intellectually demanding, requiring sustained focus, deep processing, and analytical thought. When a student spends their evenings working, their mental energy is drained. This leads to cognitive exhaustion, making it nearly impossible to retain complex academic information or excel in examinations.

Even more alarming is the physiological toll: 58% of these teenagers experience regular sleep deprivation. Science dictates that the adolescent brain is undergoing a critical phase of neurodevelopment, requiring roughly 8 to 10 hours of sleep per night. When work hours infringe upon sleep cycles, the consequences extend far beyond simple daytime drowsiness. It compromises immune function, stunts physical growth, and heavily disrupts emotional regulation, potentially opening the floodgates to anxiety and clinical burnout.

In conclusion, this case study serves as a stark reminder that part-time employment is not inherently good or bad; rather, its impact depends entirely on how it is calibrated. To ensure our youth gain the benefits of workplace discipline without sacrificing their future prospects, a collaborative effort is required. Parents and educators must monitor student-workers, ensuring that employment is strictly limited to a manageable threshold—ideally under 15 hours a week. Ultimately, work should act as a constructive supplement to a student's life, not an anchor that drags down their health and education. Thank you for listening.`,
    keyThemes: ['Adolescent Development', 'Time Management', 'Cognitive Load', 'Sleep Deprivation', 'Work-Life Calibration']
  },
  {
    id: 2,
    code: 'ĐỀ SỐ 02',
    title: 'ARTIFICIAL INTELLIGENCE IN THE WORKPLACE',
    vietnameseTitle: 'Trí tuệ nhân tạo nơi công sở: Giải phóng năng suất hay Nguy cơ đào thải hàng loạt',
    category: 'Tech & AI',
    context: 'The exponential rise of AI across global industries creates deep friction between unprecedented corporate efficiency and massive job displacement.',
    task: 'Deliver a five-minute talk to evaluate the transformative impact of AI on the workplace and explain why human resource upskilling has become an urgent societal imperative.',
    outline: {
      intro: {
        timing: 'approx. 45s',
        hookAndContext: 'The inevitable integration of Artificial Intelligence (AI) across diverse industries worldwide.',
        coreProblem: 'The tension between exponential productivity gains and systemic job displacement / urgency for workforce retraining.',
        thesis: 'While AI acts as an unprecedented catalyst for corporate efficiency, it necessitates a radical overhaul of human resource development to prevent widespread socio-economic marginalization.'
      },
      body1: {
        title: 'The Up-side – Unprecedented Efficiency',
        timing: 'approx. 1m 30s',
        mainPoint: 'AI automates mundane, repetitive tasks, freeing human cognitive capacity for strategic and creative endeavors.',
        explanation: 'Machine learning algorithms process vast datasets instantly, reducing human error and streamlining operations.',
        extension: 'Creation of entirely new tech-centric job sectors (e.g., prompt engineering, AI ethics, model supervision).'
      },
      body2: {
        title: 'The Down-side & The Retraining Imperative',
        timing: 'approx. 2m 00s',
        mainPoint1: 'Displacement Anxiety: Low-to-mid-tier white-collar and blue-collar roles face immediate obsolescence.',
        mainPoint2: 'The Upskilling Hurdle: Retraining a massive, aging workforce presents severe psychological and financial hurdles. The "digital divide" risks widening if individuals cannot adapt at the pace of technological evolution.'
      },
      conclusion: {
        timing: 'approx. 45s',
        restatement: 'AI in the workplace is an evolutionary shift that cannot be reversed, only managed.',
        finalTakeaway: 'Governments and corporations must co-invest in "lifelong learning" ecosystems to transition workers from task-executors to AI-supervisors.'
      }
    },
    advancedVocabulary: [
      { term: 'Paradigm shift', pos: 'n', level: 'C2', vietnamese: 'Bước chuyển dịch mang tính bản lề' },
      { term: 'To render obsolete', pos: 'v', level: 'C2', vietnamese: 'Khiến cho cái gì đó trở nên lỗi thời' },
      { term: 'Cognitive offloading', pos: 'n', level: 'C2', vietnamese: 'Giảm tải tư duy / nhận thức (giao việc cho máy móc)' },
      { term: 'Systemic displacement', pos: 'n', level: 'C1', vietnamese: 'Sự sa thải / thay thế có hệ thống' },
      { term: 'To upskill / reskill', pos: 'v', level: 'C1', vietnamese: 'Nâng cao kỹ năng / Đào tạo lại kỹ năng' }
    ],
    realWorldData: [
      'A landmark report by the World Economic Forum (WEF) estimates that while AI may displace 85 million jobs globally, it will simultaneously create 97 million new roles by leveraging the new division of labor between humans, machines, and algorithms.'
    ],
    sampleTalk: `Good morning, esteemed members of the jury. Today, I would like to address one of the most definitive transformations of our era: the integration of Artificial Intelligence in the workplace. This phenomenon represents a massive paradigm shift, forcing us to reconsider the very nature of human labor. While the infusion of AI promises unparalleled heights of operational efficiency, it simultaneously brings forth a dark undercurrent of systemic displacement and an unprecedented urgency for workforce retraining.

On the positive side, AI serves as a powerful engine for economic and cognitive liberation. By automating mundane, rule-based tasks—ranging from data entry to basic administrative operations—AI allows corporations to engage in cognitive offloading. This means human employees are finally freed from repetitive drudgery, enabling them to redirect their unique intellectual capital toward high-value areas such as strategic planning, creative problem-solving, and emotional intelligence. For instance, in healthcare, while AI can analyze thousands of X-rays in seconds to detect anomalies, it is the human physician who provides the empathetic counsel and contextual judgment required for patient care. Thus, AI does not merely replace; it augments human capability.

However, we cannot turn a blind eye to the socio-economic friction this transition causes. The rapid adoption of automated systems threatens to render obsolete millions of traditional roles, particularly in manufacturing, customer service, and even entry-level legal or financial analysis. The sheer velocity of this technological wave leaves vulnerable workers with very little time to adapt. This brings us to the monumental challenge of reskilling. Transitioning a truck driver into a data analyst, or a traditional clerk into an AI supervisor, is not merely an educational hurdle; it is a profound financial and psychological strain. Without robust safety nets, this shift risks exacerbating the wealth gap and creating a disenfranchised class of unemployable citizens.

In conclusion, the rise of AI in the workplace should neither be met with uncritical techno-optimism nor Luddite resistance. It is a reality that must be meticulously managed. The ultimate solution lies in proactive, tripartite collaboration between governments, academic institutions, and tech conglomerates. We must establish heavily subsidized, continuous upskilling pathways that champion lifelong learning. AI should be utilized not as a tool to minimize human headcount, but as a mechanism to maximize human potential. Thank you.`,
    keyThemes: ['Cognitive Offloading', 'Workforce Upskilling', 'Job Displacement', 'Tripartite Governance', 'Augmentation vs Obsolescence']
  },
  {
    id: 3,
    code: 'ĐỀ SỐ 03',
    title: 'COMPETITION VS. COOPERATION',
    vietnameseTitle: 'Cạnh tranh vs Hợp tác: Động lực tối ưu cho sự phát triển của nhân loại',
    category: 'Society & Culture',
    context: 'The age-old philosophical debate on whether human progress is best catalyzed through fierce rivalry or collective solidarity.',
    task: 'Deliver a five-minute talk to explore whether competition or cooperation serves as the more essential driver for human excellence and collective advancement.',
    outline: {
      intro: {
        timing: 'approx. 45s',
        hookAndContext: 'The age-old philosophical and psychological debate regarding the optimal driver for human progress.',
        coreProblem: 'Competition fuels personal drive and excellence but risks toxicity; cooperation builds harmony and collective strength but can induce complacency.',
        thesis: 'Rather than viewing competition and cooperation as mutually exclusive forces, human development thrives most when they exist in a state of dynamic equilibrium.'
      },
      body1: {
        title: 'Competition as an Engine for Excellence',
        timing: 'approx. 1m 30s',
        mainPoint: 'Rivalry pushes individuals past their perceived self-limits and prevents complacency.',
        explanation: 'In a competitive framework, meritocracy thrives. Individuals are incentivized to innovate, refine their skills, and optimize performance to outpace peers.',
        extension: 'Historical context: the Space Race accelerating aerospace technology, tech rivalries accelerating smartphone and microchip evolution.'
      },
      body2: {
        title: 'Cooperation as the Foundation for Sustainable Growth',
        timing: 'approx. 2m 00s',
        mainPoint1: 'Psychological Safety: Overly competitive environments cause severe anxiety, chronic stress, and ethical degradation (e.g., cheating, cut-throat sabotage).',
        mainPoint2: 'Synergy: Complex modern problems (climate change, pandemics) cannot be solved individually. Cooperation pools diverse cognitive perspectives, creating a sum greater than its parts.'
      },
      conclusion: {
        timing: 'approx. 45s',
        restatement: 'Both paradigms carry inherent merits and dangerous pitfalls.',
        finalTakeaway: 'The ideal environment—whether in education or corporate sectors—is "co-opetition": cooperating internally to foster a supportive community, while competing externally to drive continuous improvement.'
      }
    },
    advancedVocabulary: [
      { term: 'Zero-sum game', pos: 'n', level: 'C1', vietnamese: 'Trò chơi có tổng bằng không (kẻ thắng người thua tuyệt đối)' },
      { term: 'To stagnate', pos: 'v', level: 'C1', vietnamese: 'Trì trệ, giậm chân tại chỗ' },
      { term: 'Meritocracy', pos: 'n', level: 'C2', vietnamese: 'Chế độ trọng dụng nhân tài' },
      { term: 'Compandium of synergy', pos: 'n', level: 'C2', vietnamese: 'Sự cộng hưởng, phối hợp lực lượng' },
      { term: 'Complacency', pos: 'n', level: 'C1', vietnamese: 'Sự tự mãn' },
      { term: 'To foster a cut-throat environment', pos: 'phr', level: 'C2', vietnamese: 'Tạo ra môi trường cạnh tranh khốc liệt tiêu cực' }
    ],
    realWorldData: [
      'Educational psychology studies published by the Harvard Business Review demonstrate that teams operating on highly collaborative models solve complex problems 15% faster than those driven purely by internal competitive incentives.'
    ],
    sampleTalk: `Good morning, everyone. Today, I would like to explore a fundamental dichotomy that shapes human civilization, education, and personal growth: the interplay between competition and cooperation. Throughout history, societies have wrestled with whether we perform best when we strive against each other or when we work alongside one another. I contend that while competition is an irreplaceable catalyst for individual brilliance, cooperation forms the bedrock of sustainable, collective progress. True development occurs when these two forces are harmonized.

Let us first analyze the virtues of competition. Human nature is susceptible to complacency; without an external push, our skills and ambitions can easily stagnate. Competition introduces a framework of meritocracy where excellence is quantified and rewarded. When individuals compete—whether in sports, academics, or business—they are compelled to dissect their weaknesses, innovate ruthlessly, and optimize their output. It is this exact competitive friction that gave us the Renaissance, accelerated the Space Race, and drives tech companies to make smartphones faster and more accessible every year. In essence, a healthy rivalry prevents us from settling for mediocrity.

However, when competition is unbridled, it transforms into a toxic, zero-sum game. A cut-throat environment breeds severe psychological distress, anxiety, and a survivalist mindset that erodes ethical boundaries. This is where cooperation becomes absolutely vital. Cooperation shifts the focus from individual dominance to collective efficacy. It establishes an atmosphere of psychological safety where individuals can share ideas without fear of exploitation. Furthermore, the challenges of the 21st century—such as reversing climate change or navigating global economic volatility—are far too intricate for any lone genius to solve. They require a cross-pollination of ideas and a high degree of synergy that only collaborative ecosystems can provide.

In conclusion, pitting competition against cooperation is a false dichotomy. They are two sides of the same coin of human advancement. The most progressive institutions today are those that implement 'co-opetition'—a strategy where individuals cooperate internally to build a resilient, supportive community, but use external competitive benchmarks to stay sharp and innovative. Striking this balance ensures we remain highly motivated without losing our humanity. Thank you very much.`,
    keyThemes: ['Co-opetition', 'Meritocracy', 'Psychological Safety', 'Collective Efficacy', 'Zero-Sum Game']
  },
  {
    id: 4,
    code: 'ĐỀ SỐ 04',
    title: 'INTERGENERATIONAL DIFFERENCES',
    vietnameseTitle: 'Khoảng cách thế hệ: Rạn nứt tư tưởng hay Cơ hội cố vấn ngược (Reverse Mentorship)',
    category: 'Society & Culture',
    context: 'The generational gap between Baby Boomers/Gen X and Millennials/Gen Z has widened due to lightning-fast technological and economic shifts.',
    task: 'Deliver a five-minute talk to dissect the root causes of intergenerational conflict and propose actionable bridges for cross-generational solidarity.',
    outline: {
      intro: {
        timing: 'approx. 45s',
        hookAndContext: 'The persistent phenomenon of the "generation gap," currently amplified by rapid digital acceleration.',
        coreProblem: 'Older generations (Baby Boomers/Gen X) value financial stability and traditional hierarchies; younger generations (Gen Z/Alpha) prioritize digital fluency, mental well-being, and social justice.',
        thesis: 'Intergenerational friction is driven by differing socioeconomic landscapes; bridging this gap requires mutual empathy and a deliberate exchange of historical wisdom and technological agility.'
      },
      body1: {
        title: 'The Root of the Divide – Socioeconomic and Digital Shifts',
        timing: 'approx. 1m 30s',
        mainPoint: 'Different generations were forged in vastly different socio-economic crucibles.',
        explanation: 'Older generations grew up in eras of scarcity or rebuilding, anchoring their identity in company loyalty and material security. Younger generations grew up in an information-saturated, gig-economy world, leading them to prioritize purpose over mere survival.',
        extension: 'The rapid shift in communication styles (face-to-face vs. asynchronous digital messaging).'
      },
      body2: {
        title: 'The Mutual Pressures and Misunderstandings',
        timing: 'approx. 2m 00s',
        mainPoint1: 'The Youth\'s Burden: Younger people face intense psychological pressure from social media comparison and economic hurdles like skyrocketing housing costs.',
        mainPoint2: 'The Elders\' Alienation: Older generations often feel alienated by rapidly shifting cultural norms and modern technologies, leading to defensive postures or dismissiveness ("entitled youth").'
      },
      conclusion: {
        timing: 'approx. 45s',
        restatement: 'The generation gap should not be viewed as an ideological war, but as an opportunity for reverse mentorship.',
        finalTakeaway: 'True societal cohesion occurs when the youth respect the structural resilience of their elders, and the elders validate the progressive, adaptive nature of the youth.'
      }
    },
    advancedVocabulary: [
      { term: 'Generation gap', pos: 'n', level: 'B2', vietnamese: 'Khoảng cách thế hệ' },
      { term: 'Socioeconomic crucible', pos: 'n', level: 'C2', vietnamese: 'Môi trường / thử thách kinh tế xã hội luyện nên tính cách' },
      { term: 'Asynchronous communication', pos: 'n', level: 'C2', vietnamese: 'Giao tiếp không đồng bộ (nhắn tin app thay vì gọi điện)' },
      { term: 'To alienate', pos: 'v', level: 'C1', vietnamese: 'Làm cho cô lập, xa lánh' },
      { term: 'Reverse mentorship', pos: 'n', level: 'C2', vietnamese: 'Mô hình cố vấn ngược (người trẻ dạy người lớn về công nghệ/xu hướng)' },
      { term: 'Ideological polarization', pos: 'n', level: 'C2', vietnamese: 'Sự phân cực về mặt tư tưởng' }
    ],
    realWorldData: [
      'A demographic study by the Pew Research Center highlights that while 80% of Gen Z view climate change and mental health coverage as top institutional priorities, older demographics consistently prioritize national security and inflation stability, illustrating a distinct divergence in foundational values.'
    ],
    sampleTalk: `Good afternoon, ladies and gentlemen of the jury. It is an honor to speak before you today on a topic that affects every family, workplace, and society globally: intergenerational differences, commonly referred to as the generation gap. In our current era, this divide has been dramatically widened by the dizzying speed of technological advancement. I believe that intergenerational friction is not a product of inherent hostility, but a natural result of different age groups being forged in entirely separate socioeconomic crucibles. To bridge this divide, we must transition from ideological dismissal to collaborative empathy.

To understand the friction, we must first contextualize the environments that shaped each demographic. Older generations, such as Baby Boomers and Generation X, often grew up during periods of economic reconstruction, geopolitical tension, or structural scarcity. Consequently, their value systems are anchored in fiscal pragmatism, institutional loyalty, and linear career paths. To them, success is visible and material. Conversely, Millennials and Generation Z have come of age in a hyper-connected, digital world characterized by the gig economy and intense information saturation. They naturally prioritize psychological well-being, flexible working structures, and social purpose over mere financial survival. What an older supervisor might perceive as 'entitlement' or a lack of commitment is often just a younger employee seeking a healthy work-life balance and a sense of mission.

Unfortunately, this divergence in values frequently leads to mutual alienation and ideological polarization. Younger people often feel misunderstood, crushed under the weight of modern anxieties like social media comparison and hyper-inflation in housing markets. They may view their elders as rigid, out of touch, or resistant to social progress. On the flip side, older individuals can feel discarded by a fast-paced digital culture that alters social etiquette overnight. They feel their decades of hard-earned experiential wisdom are being dismissed as obsolete by algorithms and short-form videos.

Ultimately, a progressive society cannot afford to let this rift deepen. The solution lies in creating structured spaces for dialog and implementing models like reverse mentorship within corporations and communities. In this framework, older individuals pass down their long-term resilience, strategic patience, and crisis management skills, while younger individuals guide their elders through the nuances of digital fluency and modern inclusive communication. By transforming generational differences from a battleground into a boardroom of diverse ideas, we enrich our collective culture. Thank you for your time.`,
    keyThemes: ['Reverse Mentorship', 'Socioeconomic Crucible', 'Workplace Values', 'Digital Fluency', 'Mutual Empathy']
  },
  {
    id: 5,
    code: 'ĐỀ SỐ 05',
    title: 'THE PURSUIT OF HAPPINESS',
    vietnameseTitle: 'Mưu cầu hạnh phúc: Vòng lặp vật chất Hedonic Treadmill vs Sự kiên cường nội tại',
    category: 'Society & Culture',
    context: 'Modern consumerism equates happiness with material consumption, yet scientific research proves psychological resilience and deep relationships are the true determinants.',
    task: 'Deliver a five-minute talk to analyze the relationship between material wealth and genuine human happiness, explaining the psychological mechanisms that govern long-term life satisfaction.',
    outline: {
      intro: {
        timing: 'approx. 45s',
        hookAndContext: 'The universal quest for happiness and how modern consumerism conflates it with material accumulation.',
        coreProblem: 'Wealth offers comfort and security, but true long-term fulfillment relies on psychological resilience and social connectedness.',
        thesis: 'While material wealth provides a foundational buffer against hardship, genuine happiness is fundamentally rooted in intrinsic psychological fortitude and the depth of one\'s social bonds.'
      },
      body1: {
        title: 'Material Wealth as a Foundation, Not the Destination',
        timing: 'approx. 1m 30s',
        mainPoint: 'Financial stability eliminates survival stress but yields diminishing returns after a certain threshold.',
        explanation: 'The concept of the "hedonic treadmill"—as income rises, expectations and desires rise in tandem, resulting in no permanent gain in happiness.',
        extension: 'Wealth creates convenience, but cannot buy genuine emotional alignment.'
      },
      body2: {
        title: 'The Core Pillars – Psychological Resilience and Social Bonds',
        timing: 'approx. 2m 00s',
        mainPoint1: 'Social Connectedness: Human beings are neurobiologically wired for connection. Interpersonal relationships protect cognitive health and mitigate loneliness.',
        mainPoint2: 'Psychological Resilience: Life is inherently unpredictable. The capacity to reframe adversity, practice gratitude, and maintain a sense of purpose dictates true life satisfaction.'
      },
      conclusion: {
        timing: 'approx. 45s',
        restatement: 'Material wealth is merely a scaffolding; happiness is the architecture built within.',
        finalTakeaway: 'Individuals and policymakers should shift from maximizing Gross Domestic Product (GDP) to nurturing Gross National Happiness (GNH) by prioritizing mental health support and community cohesion.'
      }
    },
    advancedVocabulary: [
      { term: 'The hedonic treadmill', pos: 'n', level: 'C2', vietnamese: 'Vòng lặp thích nghi (nhanh chóng quen với sự sung túc và đòi hỏi nhiều hơn)' },
      { term: 'Diminishing returns', pos: 'n', level: 'C1', vietnamese: 'Hiệu suất giảm dần (thêm tài sản nhưng ít tăng hạnh phúc)' },
      { term: 'Psychological fortitude / resilience', pos: 'n', level: 'C2', vietnamese: 'Sự kiên cường về mặt tâm lý' },
      { term: 'Socioeconomic scaffolding', pos: 'n', level: 'C2', vietnamese: 'Giàn giáo / nền tảng kinh tế xã hội' },
      { term: 'Neurobiologically wired', pos: 'adj', level: 'C2', vietnamese: 'Được lập trình về mặt thần kinh / sinh học' },
      { term: 'To conflate', pos: 'v', level: 'C1', vietnamese: 'Đánh đồng, trộn lẫn hai khái niệm' }
    ],
    realWorldData: [
      'The Harvard Study of Adult Development, one of the longest running longitudinal studies on happiness (tracking individuals for over 80 years), concluded that relationships and how happy we are in our relationships have a more powerful influence on our health and longevity than wealth or social class.'
    ],
    sampleTalk: `Good morning, distinguished members of the jury. Today, I would like to address a concept that is simultaneously universal and deeply personal: the pursuit of happiness. In our contemporary capitalist society, success is often commodified, leading many to conflate material wealth with emotional fulfillment. However, psychological science and historical wisdom suggest a different reality. While financial security provides an essential socioeconomic scaffolding that protects us from life's basic hardships, true, enduring happiness is an internal construct, deeply rooted in psychological fortitude and meaningful social connections.

To fully comprehend this dynamics, we must first look at the role of material wealth. It is undeniable that poverty induces severe stress, health vulnerability, and a sense of helplessness. Therefore, reaching a baseline of financial stability is imperative for well-being. However, once an individual's primary needs—such as food, healthcare, and safe housing—are met, incremental wealth yields drastically diminishing returns. This phenomenon is driven by what psychologists call the hedonic treadmill. When we acquire a larger house, a luxury vehicle, or a salary raise, we experience a temporary spike in dopamine. Yet, within months, this new level of luxury becomes our baseline expectation, and we return to our original level of happiness. Materialism, therefore, traps individuals in an endless cycle of accumulation that never truly satisfies the soul.

Where, then, does genuine happiness reside? The answer lies in the quality of our inner landscape and outer relationships. First and foremost, human beings are neurobiologically wired for connection. The landmark Harvard Study of Adult Development, which tracked individuals for over eighty years, revealed that close relationships—more than money, fame, or genetic predisposition—are what keep people happy throughout their lives. Deep social bonds act as an emotional buffer against the trials of aging and existential anxiety.

Secondly, happiness depends on our internal response to external events, which is the definition of psychological resilience. Life is inherently volatile and fraught with adversity. An individual possessing immense wealth but lacking emotional coping mechanisms will easily succumb to despair when faced with loss or failure. Conversely, someone who cultivates mindfulness, practices radical gratitude, and acts with a clear sense of purpose can find profound contentment even in modest circumstances.

In conclusion, the pursuit of happiness should not be envisioned as an external chase for material milestones, but as an internal cultivation of character and community. While we must continue to strive for economic progress to alleviate poverty, we must equally invest in our mental health infrastructures and revitalize our local communities. True wealth is not measured by the weight of our bank accounts, but by the resilience of our minds and the depth of our love. Thank you.`,
    keyThemes: ['Hedonic Treadmill', 'Harvard Study of Adult Development', 'Diminishing Returns', 'Psychological Fortitude', 'Gross National Happiness']
  },
  {
    id: 6,
    code: 'ĐỀ SỐ 06',
    title: 'FAST FASHION AND THE ENVIRONMENT',
    vietnameseTitle: 'Thời trang nhanh & Thảm họa sinh thái: Cái giá đắt của sự rẻ tiền',
    category: 'Environment & Ecology',
    context: 'The exponential rise of ultra-fast fashion empires (Shein, Zara) creates widespread microplastic pollution, massive carbon footprints, and severe labor exploitation.',
    task: 'Deliver a five-minute talk to expose the hidden environmental and socio-cultural costs of fast fashion and advocate for a transition toward a circular economy.',
    outline: {
      intro: {
        timing: 'approx. 45s',
        hookAndContext: 'The rapid democratization of style through ultra-fast fashion brands (e.g., Shein, Zara) which has revolutionized consumer culture.',
        coreProblem: 'This hyper-production business model inflicts catastrophic damage on planetary ecosystems and fosters a disposable cultural mindset.',
        thesis: 'Fast fashion is an ecological disaster masquerading as affordable style, demanding immediate systemic reform in industrial production and a profound shift in consumer psychology.'
      },
      body1: {
        title: 'The Environmental Toll – Depletion and Pollution',
        timing: 'approx. 1m 30s',
        mainPoint: 'The industry is one of the world\'s largest consumers of water and producers of carbon emissions.',
        explanation: 'Extensive use of synthetic fibers like polyester, which are derived from fossil fuels and shed millions of microplastics into the marine food chain.',
        extension: 'Toxic chemical runoff from textile dyeing factories poisons vital freshwater sources in developing nations.'
      },
      body2: {
        title: 'The Socio-Cultural Cost – The Disposable Mindset and Labor Exploitation',
        timing: 'approx. 2m 00s',
        mainPoint1: 'The Psychology of Disposability: Rapid micro-trends encourage consumers to view garments as single-use items, leading to millions of tons of textile waste ending up in landfills annually.',
        mainPoint2: 'Ethical Violations: To keep prices artificially low, corporations exploit cheap labor in the Global South, subjecting workers to hazardous conditions and substandard wages.'
      },
      conclusion: {
        timing: 'approx. 45s',
        restatement: 'The true cost of cheap clothing is paid by marginalized workers and the planet.',
        finalTakeaway: 'We must transition toward a "circular fashion economy" driven by sustainable textile innovation, strict environmental regulations on corporations, and a consumer pivot toward "slow fashion" and thrifting.'
      }
    },
    advancedVocabulary: [
      { term: 'To masquerade as', pos: 'v', level: 'C2', vietnamese: 'Trá hình, giả dạng làm cái gì' },
      { term: 'Hyper-production', pos: 'n', level: 'C1', vietnamese: 'Sự sản xuất quá độ, cực đoan' },
      { term: 'Microplastics', pos: 'n', level: 'C1', vietnamese: 'Hạt vi nhựa' },
      { term: 'The Global South', pos: 'n', level: 'C1', vietnamese: 'Các quốc gia đang phát triển (phía Nam bán cầu)' },
      { term: 'A disposable cultural mindset', pos: 'phr', level: 'C2', vietnamese: 'Tư duy văn hóa "dùng một lần rồi vứt"' },
      { term: 'Ecological footprint', pos: 'n', level: 'C1', vietnamese: 'Dấu chân sinh thái / Tác động môi trường' },
      { term: 'Textile obsolescence', pos: 'n', level: 'C2', vietnamese: 'Sự lỗi thời nhanh chóng của vải vóc / quần áo' }
    ],
    realWorldData: [
      'According to the United Nations Environment Programme (UNEP), the fashion industry is responsible for 10% of global carbon emissions—more than all international flights and maritime shipping combined—and is the second-largest consumer of water globally.'
    ],
    sampleTalk: `Good morning, esteemed judges. Today, I intend to expose the heavy hidden costs behind one of the most pervasive aspects of modern consumerism: fast fashion. Over the past two decades, global clothing production has doubled, fueled by ultra-fast fashion empires that churn out thousands of new designs weekly at incredibly low prices. While this has democratized trend-driven style, it represents an ecological catastrophe masquerading as affordable luxury. The fast fashion industry inflicts permanent damage on our planet's ecosystems and implants a toxic, disposable cultural mindset within global consumers.

Let us first confront the terrifying scale of environmental degradation caused by this industry. The ecological footprint of textile production is staggering. Data from the United Nations Environment Programme reveals that the fashion industry contributes to a massive 10% of global carbon emissions, outpacing the entire international aviation and maritime shipping sectors combined. Furthermore, the modern reliance on cheap, synthetic textiles such as polyester is devastating. Polyester is a non-biodegradable material derived from fossil fuels. Every single time these garments are laundered, they shed hundreds of thousands of microplastics into our waterways, eventually infiltrating marine life and our own food chains. The immense volume of clean water required to grow cotton and process textiles is also draining planet resources, leaving entire communities facing severe water scarcity.

Beyond the physical pollution, fast fashion has completely warped human psychology and ethics. By manipulating social media algorithms and capitalizing on micro-trends, brands convince consumers that an outfit is obsolete after just a few wears. This artificial cycle of textile obsolescence means that garbage trucks full of clothes are dumped into landfills or burned every single second. Most of this waste is offloaded onto developing nations in the Global South, turning pristine landscapes into toxic textile graveyards. Moreover, the low price tags we see in retail stores are only made possible through the brutal exploitation of garment workers who labor under sweatshop conditions, receiving wages that fail to meet basic human survival needs.

In conclusion, the era of uninhibited fast fashion must come to an end. We can no longer afford to prioritize instant aesthetic gratification over planetary survival. Resolving this crisis requires a two-pronged approach. Governments must enforce strict environmental regulations and corporate accountability laws on fashion conglomerates, forcing them to adopt a circular economy model that prioritizes recycling and textile longevity. Simultaneously, we as consumers must undergo a psychological shift—moving away from mindless consumption toward 'slow fashion', prioritizing quality over quantity, and embracing thrifting. Remember, cheap clothes carry a catastrophic cost. Thank you.`,
    keyThemes: ['Textile Obsolescence', 'Microplastic Pollution', 'The Global South', 'Circular Economy', 'Fast Fashion vs Slow Fashion']
  },
  {
    id: 7,
    code: 'ĐỀ SỐ 07',
    title: 'HYBRID LEARNING MODEL',
    vietnameseTitle: 'Mô hình học tập kết hợp (Hybrid Learning): Sự linh hoạt sư phạm vs Hố sâu số',
    category: 'Youth & Psychology',
    context: 'Post-pandemic educational systems widely blend online instruction with in-person classrooms, creating flexible pacing but highlighting the digital divide.',
    task: 'Deliver a five-minute talk to critically analyze the advantages and structural vulnerabilities of hybrid learning in contemporary education.',
    outline: {
      intro: {
        timing: 'approx. 45s',
        hookAndContext: 'The post-pandemic transformation of education, where virtual environments blend with traditional physical classrooms.',
        coreProblem: 'Hybrid learning democratizes access to knowledge and fosters autonomy, but risks exacerbating educational inequality and fracturing social development.',
        thesis: 'While the hybrid learning model offers unparalleled pedagogical flexibility and fosters self-regulation, it must be carefully structured to prevent digital alienation and the widening of the socioeconomic learning gap.'
      },
      body1: {
        title: 'The Advantages – Autonomy and Pedagogical Flexibility',
        timing: 'approx. 1m 30s',
        mainPoint: 'It shifts education from a rigid, one-size-fits-all system to a student-centric paradigm.',
        explanation: 'Students can review recorded lectures at their own pace, optimizing their cognitive retention and accommodating diverse learning speeds.',
        extension: 'Development of vital 21st-century digital literacy and independent time-management skills before entering the modern workforce.'
      },
      body2: {
        title: 'The Obstacles – The Digital Divide and Social Erosion',
        timing: 'approx. 2m 00s',
        mainPoint1: 'Socioeconomic Inequity: The success of hybrid learning assumes all students have equal access to high-speed internet and quiet study spaces, which is dangerously false.',
        mainPoint2: 'Socio-emotional Deficit: Excessive screen time leads to digital fatigue and eliminates spontaneous peer interactions, which are crucial for developing empathy, emotional intelligence, and collaboration skills.'
      },
      conclusion: {
        timing: 'approx. 45s',
        restatement: 'Hybrid learning is an evolutionary tool, not an absolute replacement for human-centric education.',
        finalTakeaway: 'Educators must use digital tools to deliver data-driven instructions while preserving the physical classroom as a sacred space for deep debate, collaboration, and socio-emotional bonding.'
      }
    },
    advancedVocabulary: [
      { term: 'Pedagogical flexibility', pos: 'n', level: 'C2', vietnamese: 'Sự linh hoạt về phương pháp giảng dạy' },
      { term: 'To exacerbate inequality', pos: 'v', level: 'C1', vietnamese: 'Làm trầm trọng thêm sự bất bình đẳng' },
      { term: 'Student-centric paradigm', pos: 'n', level: 'C2', vietnamese: 'Mô hình lấy học sinh làm trung tâm' },
      { term: 'Socio-emotional deficit', pos: 'n', level: 'C2', vietnamese: 'Sự thiếu hụt về mặt cảm xúc xã hội' },
      { term: 'Digital alienation / fatigue', pos: 'n', level: 'C1', vietnamese: 'Sự cô lập / mệt mỏi do công nghệ số' },
      { term: 'Cognitive retention', pos: 'n', level: 'C2', vietnamese: 'Khả năng ghi nhớ nhận thức' },
      { term: 'The digital divide', pos: 'n', level: 'C1', vietnamese: 'Khoảng cách công nghệ (giữa người giàu và nghèo)' }
    ],
    realWorldData: [
      'A comprehensive global survey by UNESCO revealed that during periods of remote and hybrid learning, over 500 million students lacked access to basic internet connectivity, highlighting that technology can unintentionally lock marginalized demographics out of quality education.'
    ],
    sampleTalk: `Good afternoon, respected members of the jury. Today, I would like to critically analyze a profound transformation sweeping through modern education: the hybrid learning model. Born out of necessity during the global pandemic, this approach combines traditional, face-to-face classroom instruction with asynchronous online learning. This model represents a monumental shift toward pedagogical flexibility. However, as we integrate this framework into our national curricula, we must realize that it is a multi-faceted tool. While hybrid learning nurtures student autonomy, it also threatens to exacerbate inequality and cause a severe socio-emotional deficit if left unchecked.

Let us first explore the undeniable educational dividends of this model. Traditional education has long been criticized for its rigid, one-size-fits-all approach. Hybrid learning breaks this mold by ushering in a truly student-centric paradigm. By utilizing online platforms for recorded lectures and readings, students gain control over their learning environment. They can pause, rewind, and re-watch complex materials, thereby optimizing their cognitive retention according to their unique learning pace. Furthermore, balancing online self-study with physical classroom deadlines forces adolescents to cultivate advanced time-management and self-regulation skills. These digital competencies are highly valuable, effectively preparing them for a modern, fluid workforce that increasingly relies on remote collaboration.

However, the hybrid model possesses structural vulnerabilities that cannot be overlooked. The most glaring issue is the digital divide. This pedagogical structure operates on the idealistic assumption that every student possesses high-speed internet, updated hardware, and a quiet, conducive home environment for study. Reports from UNESCO shattered this assumption, noting that hundreds of millions of students globally lack basic digital infrastructure. For these marginalized demographics, hybrid learning does not democratize education; it acts as a barrier, systematically locking them out and widening the socioeconomic learning gap.

Furthermore, we must account for the psychological toll of digital isolation. Human classrooms are not merely places where information is downloaded into young minds. They are vibrant social ecosystems where students learn to navigate conflicts, read body language, practice empathy, and build lifelong friendships. Over-reliance on screens leads to digital alienation and fatigue, stripping education of its human heart and leaving many adolescents feeling disconnected and emotionally stunted.

In conclusion, hybrid learning should not be seen as a total replacement for traditional schooling, but as a strategic amplifier. The future of education lies in finding an optimal balance. We must use online components to handle data delivery and flexible pacing, while aggressively preserving the physical classroom as a sacred space for deep philosophical discussions, collaborative projects, and emotional bonding. Simultaneously, governments must invest heavily in public digital infrastructures to ensure no student is left behind in the dark. Thank you for your attention.`,
    keyThemes: ['Student-Centric Paradigm', 'Digital Divide', 'Socio-Emotional Deficit', 'Pedagogical Flexibility', 'Cognitive Retention']
  },
  {
    id: 8,
    code: 'ĐỀ SỐ 08',
    title: 'URBANIZATION AND MENTAL WELL-BEING',
    vietnameseTitle: 'Đô thị hóa và Sức khỏe tâm thần: Chi phí vô hình của những tòa nhà chọc trời',
    category: 'Environment & Ecology',
    context: 'Rapid global migration into megacities offers economic advancement but induces chronic sensory overload, amygdala stress, and biophilic deprivation.',
    task: 'Deliver a five-minute talk to evaluate how unchecked urbanization impacts the mental well-being of city dwellers and advocate for biophilic urban design.',
    outline: {
      intro: {
        timing: 'approx. 45s',
        hookAndContext: 'The historic global migration from rural landscapes to megacities in pursuit of economic prosperity.',
        coreProblem: 'While cities offer unprecedented career infrastructure, their hyper-dense, fast-paced nature imposes a heavy psychological toll on residents.',
        thesis: 'Rapid, unregulated urbanization acts as a silent catalyst for mental health crises, necessitating a radical shift toward empathetic urban planning and green infrastructure.'
      },
      body1: {
        title: 'The Modern Urban Stressors',
        timing: 'approx. 1m 30s',
        mainPoint: 'Megacities subject the human brain to a constant state of sensory overload and social isolation.',
        explanation: 'High population density coupled with noise and light pollution chronically triggers the amygdala (the brain\'s stress center).',
        extension: 'The paradox of urban loneliness—being surrounded by millions yet severely disconnected from meaningful communities.'
      },
      body2: {
        title: 'The Deprivation of Natural Ecosystems',
        timing: 'approx. 2m 00s',
        mainPoint1: 'The Concrete Jungle Effect: The systematic replacement of green spaces with high-rises deprives humans of biophilic healing (nature-induced stress reduction).',
        mainPoint2: 'Socio-economic Stratification: Poor urban design disproportionately isolates low-income workers in hyper-polluted, cramped environments, compounding financial anxiety with psychological distress.'
      },
      conclusion: {
        timing: 'approx. 45s',
        restatement: 'We cannot stop urbanization, but we must alter its current trajectory to prioritize human minds over mere corporate concrete.',
        finalTakeaway: 'Municipalities must invest heavily in "biophilic urbanism"—integrating accessible public parks, communal spaces, and strict noise control regulations to humanize megacities.'
      }
    },
    advancedVocabulary: [
      { term: 'Sensory overload', pos: 'n', level: 'C1', vietnamese: 'Quá tải cảm giác (do tiếng ồn, ánh sáng, đám đông)' },
      { term: 'Biophilic healing / design', pos: 'n', level: 'C2', vietnamese: 'Thiết kế / chữa lành dựa trên sự gắn kết tự nhiên giữa con người và sinh thái' },
      { term: 'The concrete jungle', pos: 'n', level: 'C1', vietnamese: 'Thành phố bê tông hóa (thiếu không gian xanh)' },
      { term: 'To chronically trigger', pos: 'v', level: 'C2', vietnamese: 'Kích hoạt một cách mãn tính / liên tục' },
      { term: 'Socio-economic stratification', pos: 'n', level: 'C2', vietnamese: 'Sự phân hóa tầng lớp kinh tế xã hội' },
      { term: 'Urban alienation', pos: 'n', level: 'C2', vietnamese: 'Sự cô lập, lạc lõng giữa đô thị' }
    ],
    realWorldData: [
      'A comprehensive meta-analysis published in The Lancet Psychiatry indicates that urban dwellers face a 20% higher risk of anxiety disorders and a 39% higher risk of mood disorders compared to their rural counterparts due to heightened environmental stress.'
    ],
    sampleTalk: `Good morning, respected members of the jury. Today, I would like to shed light on a profound silent crisis unfolding beneath the flashing neon lights of our modern megacities: the psychological cost of rapid urbanization. Across the globe, billions are migrating to urban centers in search of economic mobility and career infrastructure. Yet, this mass migration features a painful paradox. As our buildings grow taller, our collective mental well-being plummets. I contend that unchecked urbanization has created an artificial environment that is incompatible with basic human neurobiology, and if we do not humanize our city designs, we will face an unsustainable mental health epidemic.

To understand why cities drain our minds, we must look at the phenomenon of sensory overload. The human brain was evolved to process natural rhythms. However, a megacity subjects its inhabitants to a relentless barrage of traffic noise, artificial light, congested public transit, and suffocating crowds. Studies in neuroscience show that these stressors chronically trigger the amygdala—the brain’s emotional alarm system—keeping urbanites in a perpetual, low-grade 'fight or flight' state. This cognitive exhaustion directly erodes emotional regulation, manifesting as chronic anxiety and burnout.

Furthermore, cities perpetuate the painful irony of urban loneliness. In a village, communities are closely knit. In a concrete jungle, despite being physically surrounded by millions, individuals exist in bubbles of profound urban alienation. We live in high-rises where we do not know our neighbors, and we commute in silence. This lack of deep social connectedness eliminates our primary evolutionary coping mechanism: community support.

The crisis is worsened by the systematic destruction of green spaces. Urban planning consistently prioritizes real-estate monetization over human health. This deprives citizens of biophilic healing—the documented psychological restoration that occurs when humans interact with natural ecosystems. To make matters worse, severe socio-economic stratification means that low-income workers are pushed into cramped, hyper-polluted areas devoid of trees or parks, compounding their financial anxiety with severe environmental depression.

In conclusion, urbanization is an unstoppable economic reality, but its current structural execution is a psychological failure. We must urgently shift toward empathetic urban planning. Municipalities must prioritize biophilic urbanism by mandating that green parks, pedestrian-only zones, and community centers be embedded within every square kilometer of commercial development. A city should not be measured merely by its economic GDP, but by the psychological peace and sanity of the citizens who breathe life into its streets. Thank you.`,
    keyThemes: ['Biophilic Urbanism', 'Sensory Overload', 'The Lancet Psychiatry', 'Urban Alienation', 'Amygdala Stress Trigger']
  },
  {
    id: 9,
    code: 'ĐỀ SỐ 09',
    title: 'SOCIAL MEDIA AND PUBLIC DISCOURSE',
    vietnameseTitle: 'Mạng xã hội và Diễn đàn công luận: Sự phân cực tư tưởng & Ô nhiễm trí tuệ tập thể',
    category: 'Tech & AI',
    context: 'Algorithmic echo chambers monetize outrage and amplify sensationalism, fracturing democratic debate into tribalistic polarization.',
    task: 'Deliver a five-minute talk to examine how algorithmic social media corrupts public discourse and propose structural safeguards to protect collective reason.',
    outline: {
      intro: {
        timing: 'approx. 45s',
        hookAndContext: 'Social media platforms acting as the contemporary digital town square.',
        coreProblem: 'Platforms are not neutral utilities; they are driven by engagement algorithms that monetize outrage.',
        thesis: 'By weaponizing attention and promoting confirmation bias, social media algorithms have fragmented public discourse, turning democratic debate into toxic tribalism.'
      },
      body1: {
        title: 'The Echo Chamber Effect and Polarization',
        timing: 'approx. 1m 30s',
        mainPoint: 'Algorithms construct highly personalized informational bubbles for users.',
        explanation: 'To maximize user retention time, platforms feed individuals content that matches their existing biases, filtering out dissenting views.',
        extension: 'This eliminates nuance, causing extreme ideological polarization where political opponents are viewed as enemies rather than peers.'
      },
      body2: {
        title: 'The Monetization of Outrage and Disinformation',
        timing: 'approx. 2m 00s',
        mainPoint1: 'Sensationalism Wins: Inflammatory, divisive, and false content spreads significantly faster than complex, factual truths because it generates immediate emotional engagement.',
        mainPoint2: 'Erosion of Democratic Trust: The systematic amplification of conspiracy theories and fake news undermines public trust in objective journalism and science, paralyzing collective action on issues like public health and climate change.'
      },
      conclusion: {
        timing: 'approx. 45s',
        restatement: 'Social media has decentralized information but severely contaminated our collective intelligence.',
        finalTakeaway: 'We must enforce strict algorithmic transparency through international legal regulations, while injecting digital literacy into educational systems to teach students how to dissect digital manipulation.'
      }
    },
    advancedVocabulary: [
      { term: 'Public discourse', pos: 'n', level: 'C1', vietnamese: 'Cuộc thảo luận công chúng / Dư luận xã hội' },
      { term: 'Ideological polarization', pos: 'n', level: 'C2', vietnamese: 'Sự phân cực sâu sắc về mặt tư tưởng' },
      { term: 'Echo chamber', pos: 'n', level: 'C1', vietnamese: 'Phòng kiến tạo tiếng vang (nơi chỉ nghe ý kiến trùng lặp với mình)' },
      { term: 'To monetize outrage', pos: 'v', level: 'C2', vietnamese: 'Kiếm tiền / trục lợi dựa trên sự phẫn nộ của dư luận' },
      { term: 'To contaminate collective intelligence', pos: 'phr', level: 'C2', vietnamese: 'Làm ô nhiễm trí tuệ tập thể' },
      { term: 'Algorithmic transparency', pos: 'n', level: 'C2', vietnamese: 'Sự minh bạch của thuật toán' },
      { term: 'Confirmation bias', pos: 'n', level: 'C1', vietnamese: 'Thiên kiến xác nhận' }
    ],
    realWorldData: [
      'Research by the Massachusetts Institute of Technology (MIT) discovered that on social media, falsehoods diffuse significantly farther, faster, deeper, and more broadly than the truth in all categories of information, sometimes by a factor of six, because fake news targets human emotional reactivity.'
    ],
    sampleTalk: `Good morning, esteemed jury. Today, I would like to examine the structural health of our global digital town square: social media, and its profound impact on public discourse. When platforms like Facebook, X, and TikTok first emerged, they were celebrated as democratic tools destined to decentralize information and unite humanity. However, a decade later, the reality is starkly different. Social media has effectively fragmented public conversation, transforming healthy democratic debate into toxic, unyielding tribalism. This crisis is not accidental; it is the direct business model of platforms designed to monetize outrage.

To understand this decay, we must analyze the mechanism of the algorithmic echo chamber. Social media corporations do not operate as neutral libraries; they are attention economies. Their primary metric of success is user retention time. To keep a user hooked, algorithms exploit our innate confirmation bias by continuously feeding us content that validates our pre-existing political, cultural, and religious worldviews. Over time, dissenting perspectives are completely filtered out. This dynamic triggers deep ideological polarization. Because users never interact with nuanced, opposing arguments, they begin to view intellectual rivals not as fellow citizens with different opinions, but as existential threats to truth itself.

Worse still is the weaponization of human emotion. Nuanced socioeconomic policies are complex and boring; they do not drive clicks. In contrast, sensationalism, anger, and hyper-partisan conspiracies generate immediate psychological reactivity. Consequently, algorithms prioritize and amplify inflammatory content. Landmark data from MIT confirmed this systemic flaw, demonstrating that fake news and fabrications spread six times faster on these networks than objective, verified facts. This rapid dissemination of disinformation has severely contaminated collective intelligence. It paralyzes public trust in vital democratic institutions, scientific consensus, and legitimate investigative journalism. When a society can no longer agree on basic, objective facts, collective action on existential threats like global pandemics or climate change becomes utterly impossible.

In conclusion, social media has given everyone a megaphone but stripped us of our capacity to listen. We can no longer treat tech conglomerates as benign utilities; they are powerful arbiters of human thought. The solution demands aggressive legislative intervention to mandate algorithmic transparency, forcing companies to open their source codes to public scrutiny and disable addictive, outrage-driven feeds. Simultaneously, our education systems must adapt, equipping the youth with critical media literacy to see through digital manipulation. Only then can we reclaim a public discourse built on reason, empathy, and shared truth. Thank you.`,
    keyThemes: ['Monetizing Outrage', 'Algorithmic Echo Chambers', 'MIT Research on Disinformation', 'Contaminated Collective Intelligence', 'Algorithmic Transparency']
  },
  {
    id: 10,
    code: 'ĐỀ SỐ 10',
    title: 'ECOTOURISM VS. MASS TOURISM',
    vietnameseTitle: 'Du lịch sinh thái vs Du lịch đại chúng: Cuộc chiến giữa Lòng tham ngắn hạn và Sự sinh tồn',
    category: 'Environment & Ecology',
    context: 'Mass tourism causes ecological degradation and economic leakage, whereas ecotourism balances travel desire with habitat preservation.',
    task: 'Deliver a five-minute talk to analyze the ecological and economic trade-offs between mass tourism and ecotourism.',
    outline: {
      intro: {
        timing: 'approx. 45s',
        hookAndContext: 'The global explosion of leisure travel, turning tourism into a multi-trillion-dollar economic titan.',
        coreProblem: 'Mass tourism prioritizes high volume and immediate corporate profit but destroys local ecosystems; ecotourism attempts to balance wanderlust with environmental conservation.',
        thesis: 'While mass tourism provides rapid economic injections, it is ecologically suicidal; we must systematically pivot toward ecotourism as a non-negotiable framework to preserve global biodiversity and cultural heritage.'
      },
      body1: {
        title: 'The Destructive Footprint of Mass Tourism',
        timing: 'approx. 1m 30s',
        mainPoint: 'High-volume tourism causes rapid ecological and cultural degradation.',
        explanation: 'Over-tourism leads to massive carbon emissions, plastic pollution, coastal erosion from mega-resorts, and the commodification of local heritage.',
        extension: 'The economic leakage effect—profits often flow back to foreign multinational hotel chains rather than local communities.'
      },
      body2: {
        title: 'Ecotourism as a Sustainable Paradigm',
        timing: 'approx. 2m 00s',
        mainPoint1: 'Low Impact, High Preservation: Ecotourism limits visitor volume, channels funds directly into wildlife conservation, and uses carbon-neutral infrastructure.',
        mainPoint2: 'Empowering Marginalized Communities: It ensures that local indigenous populations are employed as guides, stakeholders, and owners, fostering an economy that values a living forest over a cleared one.'
      },
      conclusion: {
        timing: 'approx. 45s',
        restatement: 'The choice between mass tourism and ecotourism is a choice between short-term greed and long-term survival.',
        finalTakeaway: 'Governments must step in to regulate tourism by implementing strict visitor caps on vulnerable ecological sites and offering tax incentives to operators running certified sustainable models.'
      }
    },
    advancedVocabulary: [
      { term: 'Ecologically suicidal', pos: 'adj', level: 'C2', vietnamese: 'Mang tính hủy hoại sinh thái một cách tự sát' },
      { term: 'The economic leakage effect', pos: 'n', level: 'C2', vietnamese: 'Hiệu ứng rò rỉ kinh tế (tiền du lịch chảy về tập đoàn nước ngoài thay vì dân bản địa)' },
      { term: 'Commodification of heritage', pos: 'n', level: 'C2', vietnamese: 'Thương mại hóa quá mức các di sản / văn hóa' },
      { term: 'Wanderlust', pos: 'n', level: 'C1', vietnamese: 'Niềm đam mê dịch chuyển, du lịch' },
      { term: 'Low-impact infrastructure', pos: 'n', level: 'C1', vietnamese: 'Cơ sở hạ tầng tác động thấp lên môi trường' },
      { term: 'To place a premium on', pos: 'phr', level: 'C2', vietnamese: 'Coi trọng, đặt giá trị cao vào cái gì' }
    ],
    realWorldData: [
      'Environmental data reveals that mass tourism generates over 35 million tons of solid waste annually, with popular destinations like Venice or Bali experiencing severe waste management collapses due to sheer visitor volume overtaking local infrastructure capabilities.'
    ],
    sampleTalk: `Good afternoon, honorable members of the jury. Today, I would like to navigate a complex dilemma at the heart of the global service industry: the stark contrast between mass tourism and ecotourism. Driven by cheap flights and social media visibility, our collective Wanderlust has turned tourism into a multi-trillion-dollar economic titan. However, this unchecked expansion has brought us to a critical crossroads. Mass tourism, with its relentless pursuit of high visitor volumes and immediate profits, is proving to be ecologically suicidal. To protect our planet’s remaining biodiversity and preserve the dignity of local cultures, we must systematically replace mass tourism with the principled model of ecotourism.

Let us first confront the damage wrought by mass tourism. The environmental and cultural footprint of high-volume, unregulated travel is devastating. Every year, millions of tourists descend upon fragile ecosystems—from the coral reefs of Southeast Asia to the historic streets of European cities. This influx generates over 35 million tons of solid waste annually, frequently causing local waste management systems to collapse. Furthermore, to accommodate mass tourism, developers construct massive luxury resorts that cause severe deforestation and coastal erosion. Culturally, it triggers the commodification of heritage, reducing sacred local traditions into cheap commercial spectacles. Most critically, mass tourism suffers from the economic leakage effect. The vast majority of the money spent by travelers does not benefit the local population; instead, it leaks back into the bank accounts of foreign multinational airlines, cruise lines, and mega-hotel chains, leaving the locals with all the pollution and none of the wealth.

Ecotourism offers a vital, sustainable alternative. This paradigm shifts the priority from maximizing headcount to maximizing conservation. Ecotourism operates on small-scale, low-impact infrastructure and strictly limits visitor numbers to respect the carrying capacity of the environment. Instead of destroying nature, ecotourism relies on its pristine preservation; a living coral reef or an untouched rainforest becomes a permanent economic asset.

Crucially, ecotourism changes the economic dynamic by keeping financial rewards within the host community. Local residents are integrated as primary shareholders, tour operators, and conservation rangers. When an indigenous community realizes that preserving their ancestral lands generates sustainable revenue, they are empowered to actively fight against illegal logging, poaching, and destructive industries. Ecotourism places a premium on education, ensuring that travelers leave with a deep ecological conscience rather than just photos.

In conclusion, the uninhibited era of mass tourism is an unsustainable luxury our planet can no longer afford. The transition to ecotourism is no longer an idealistic option; it is an ecological necessity. Governments must introduce bold policies, including strict visitor caps on endangered ecological zones, environmental taxes on high-carbon travel, and heavy subsidies for certified green eco-lodges. We must learn to travel not to consume a place, but to preserve it. Thank you very much.`,
    keyThemes: ['Economic Leakage Effect', 'Commodification of Heritage', 'Carrying Capacity', 'Low-Impact Infrastructure', 'Ecologically Suicidal']
  },
  {
    id: 11,
    code: 'ĐỀ SỐ 11',
    title: 'THE DEADOUT REVOLUTION AND REMOTE WORK ERASURE',
    vietnameseTitle: 'Làn sóng "Deadout" (Bất cần/Buông xuôi) & Sự xóa bỏ chế độ làm việc từ xa',
    category: 'Economy & Work',
    context: 'A 2026 global corporate census shows 78% of major firms reinstated mandatory 5-day in-office rules, causing a 61% surge in workplace cynicism ("deadout") and doubled Gen Z turnover.',
    task: 'Deliver a five-minute talk to discuss the implications of the sudden erasure of remote work on workforce psychology and corporate productivity in the post-flexibility era.',
    outline: {
      intro: {
        timing: 'approx. 45s',
        hookAndContext: 'The sudden, aggressive corporate backlash against remote work in 2026, forcing a mandatory return to a five-day in-office model.',
        coreProblem: 'The emergence of the "Deadout Revolution"—extreme workplace cynicism and doubling turnover rates among Gen Z due to commuting fatigue.',
        thesis: 'The forced erasure of remote work is a regressive corporate maneuver that drastically compromises employee mental health and drives systemic talent attrition.'
      },
      body1: {
        title: 'The Psychological Toll and "Deadout" Phenomenon',
        timing: 'approx. 1m 30s',
        mainPoint: 'Reinstating rigid office mandates actively triggers cognitive dissonance and profound professional resentment.',
        explanation: 'Employees who proved their efficiency during the remote-work era now view commuting as an arbitrary waste of human energy.',
        extension: 'The term "deadout" epitomizes a survivalist mindset where workers psychologically detach from their corporate mission.'
      },
      body2: {
        title: 'Corporate Myopia and Talent Attrition',
        timing: 'approx. 2m 00s',
        mainPoint1: 'The Gen Z Exodus: A doubled turnover rate demonstrates that younger professionals refuse to sacrifice autonomy for archaic corporate supervision.',
        mainPoint2: 'The Productivity Paradox: Presenteeism (being physically present but mentally checked out) destroys creative output far more than remote work ever did.'
      },
      conclusion: {
        timing: 'approx. 45s',
        restatement: 'The rigid five-day model is outdated and counterproductive in a digitized society.',
        finalTakeaway: 'Progressive firms must pivot to a data-driven hybrid framework that values actual cognitive output over physical desk occupancy.'
      }
    },
    advancedVocabulary: [
      { term: 'Regressive corporate maneuver', pos: 'phr', level: 'C2', vietnamese: 'Biện pháp thụt lùi của doanh nghiệp' },
      { term: 'Existential workplace cynicism', pos: 'n', level: 'C2', vietnamese: 'Sự hoài nghi mang tính sinh tồn về ý nghĩa công việc' },
      { term: 'Systemic talent attrition', pos: 'n', level: 'C2', vietnamese: 'Sự hao mòn / mất đi nhân tài có hệ thống' },
      { term: 'Presenteeism', pos: 'n', level: 'C2', vietnamese: 'Việc có mặt tại văn phòng nhưng không làm việc hiệu quả' },
      { term: 'Corporate myopia', pos: 'n', level: 'C2', vietnamese: 'Sự thiển cận của doanh nghiệp' },
      { term: 'Archaic infrastructure', pos: 'n', level: 'C1', vietnamese: 'Cơ sở hạ tầng, tư duy cổ hủ' }
    ],
    realWorldData: [
      'A 2026 global corporate census reveals that 78% of top firms returned to strict office mandates, directly causing a 61% surge in workplace cynicism ("deadout").'
    ],
    sampleTalk: `Good morning, honorable judges. Today, I would like to critically analyze a major corporate crisis of 2026: the 'Deadout Revolution' sparked by the sudden erasure of remote work flexibility. According to recent global data, an overwhelming 78% of tech and financial institutions have aggressively reinstated mandatory five-day in-office policies. However, this regressive corporate maneuver has triggered an unprecedented psychological backlash, with 61% of employees falling into a state of 'deadout'—or extreme existential workplace cynicism—and turnover rates among Gen Z professionals doubling. I contend that forcing workers back into archaic office structures is an act of corporate myopia that severely compromises employee well-being and destroys organizational productivity.

To understand the roots of the Deadout Revolution, we must examine the psychological friction caused by this sudden policy shift. For years, professionals proved they could maintain, or even exceed, productivity levels while working from home. By abruptly erasing this autonomy, corporations have signaled a deep lack of trust. The grueling daily commute, compounded by skyrocketing inflation and urban congestion, is no longer seen as a standard professional duty; it is now perceived as an arbitrary drain on human life and energy. This realization has birthed the 'deadout' mindset. It is not simple laziness; it is a psychological defense mechanism where employees completely detach their identity from their corporate mission, choosing to perform at the absolute minimum required to avoid termination.

Furthermore, this rigid mandate has induced a severe crisis of systemic talent attrition, particularly among younger demographics. The fact that turnover rates among Gen Z have doubled is a clear warning sign. Gen Z and millennial professionals highly value temporal autonomy and work-life integration. When forced to choose between rigid desk occupancy and their own mental sanity, the brightest minds are executing an exodus, leaving traditional firms behind to join decentralized, progressive startups. For the companies that remain stubborn, the illusion of control actually backfires through presenteeism. Employees are physically sitting at their desks to satisfy their managers, but their creative output and intellectual engagement are completely dead.

In conclusion, the corporate obsession with physical surveillance is completely counterproductive in a hyper-digitized knowledge economy. The five-day in-office mandate is an obsolete relic of the industrial age. To survive the Deadout Revolution, forward-thinking enterprises must abandon their rigid dogmas and transition to a data-driven hybrid framework—one that respects human autonomy, optimizes well-being, and measures success by the caliber of cognitive output rather than the number of hours a body occupies a chair. Thank you.`,
    keyThemes: ['Deadout Mindset', 'Presenteeism', 'Corporate Myopia', 'Systemic Talent Attrition', 'Temporal Autonomy']
  },
  {
    id: 12,
    code: 'ĐỀ SỐ 12',
    title: 'AI-GENERATED DEEPFAKES AND SOCIAL TRUST',
    vietnameseTitle: 'Video giả mạo bằng AI (Deepfake) và Sự sụp đổ của niềm tin xã hội',
    category: 'Tech & AI',
    context: 'In early 2026, hyper-realistic AI deepfakes constituted 45% of online campaign materials. 72% of citizens distrust video evidence, driving widespread civic apathy.',
    task: 'Deliver a five-minute talk to discuss how the proliferation of hyper-realistic generative AI challenges the concepts of objective truth and public discourse in modern democracies.',
    outline: {
      intro: {
        timing: 'approx. 45s',
        hookAndContext: 'The democratization of hyper-realistic generative AI in 2026, leading to a flood of synthesized media online.',
        coreProblem: 'Deepfakes now account for 45% of online political campaign materials, causing 72% of citizens to lose faith in visual evidence.',
        thesis: 'The proliferation of AI-generated deepfakes marks the arrival of a "post-truth" era that actively erodes public institutional trust and threatens the foundations of democratic discourse.'
      },
      body1: {
        title: 'The Epistemological Nihilism',
        timing: 'approx. 1m 30s',
        mainPoint: 'Deepfakes weaponize confirmation bias and destroy our shared standard of reality.',
        explanation: 'When any video can be perfectly faked, bad actors can easily fabricate scandals, while corrupt figures can dismiss genuine evidence as "AI-generated."',
        extension: 'This phenomenon creates "epistemological nihilism"—a state where the public gives up on trying to find the truth, leading to political apathy.'
      },
      body2: {
        title: 'The Paralysis of Public Discourse',
        timing: 'approx. 2m 00s',
        mainPoint1: 'The Death of Shared Facts: Democracy requires a consensus on basic facts to function. Hyper-realistic AI breaks this consensus entirely.',
        mainPoint2: 'Information Pollution: The velocity at which deepfakes spread outpaces the speed of investigative journalism, leaving media platforms permanently contaminated.'
      },
      conclusion: {
        timing: 'approx. 45s',
        restatement: 'AI deepfakes are an existential threat to social cohesion and civic trust.',
        finalTakeaway: 'We must establish international regulatory frameworks that mandate cryptographic watermarking for all AI models, while training citizens to navigate the digital world with extreme critical skepticism.'
      }
    },
    advancedVocabulary: [
      { term: 'Epistemological nihilism', pos: 'n', level: 'C2', vietnamese: 'Chủ nghĩa hư vô tri thức (mất hoàn toàn niềm tin vào việc điều gì là có thật)' },
      { term: "The liar's dividend", pos: 'n', level: 'C2', vietnamese: 'Lợi ích của kẻ dối trá (khi người ta đổ lỗi cho mọi bằng chứng thật là do AI làm giả)' },
      { term: 'To contaminate public discourse', pos: 'phr', level: 'C2', vietnamese: 'Làm ô nhiễm các cuộc thảo luận công chúng' },
      { term: 'Civic apathy', pos: 'n', level: 'C1', vietnamese: 'Sự thờ ơ, vô cảm của công dân đối với các vấn đề xã hội' },
      { term: 'Proactive cryptographic watermarking', pos: 'n', level: 'C2', vietnamese: 'Đóng dấu bản quyền kỹ thuật số bằng mật mã để nhận diện hàng thật' }
    ],
    realWorldData: [
      '2026 cybersecurity data shows deepfakes make up 45% of digital political content, driving 72% of the public to completely distrust televised or recorded news.'
    ],
    sampleTalk: `Good afternoon, ladies and gentlemen of the jury. Today, I would like to address an existential crisis threatening the very fabric of our modern information society: the explosion of hyper-realistic AI-generated deepfakes. As we navigate 2026, cybersecurity audits present an alarming statistic—deepfakes now constitute 45% of all digital political campaign materials. This has triggered a profound psychological crisis: 72% of citizens no longer trust video evidence in news broadcasts, leading to widespread civic apathy. I contend that the uninhibited spread of generative AI deepfakes has brought us into a dangerous post-truth era, one that fractures our shared reality and completely undermines the foundation of public institutional trust.

The most dangerous consequence of this technological wave is what philosophers call epistemological nihilism. For centuries, audiovisual recordings served as the gold standard of objective truth—seeing was believing. Today, however, consumer-grade AI can perfectly synthesize the voice, facial expressions, and body language of any public official or private citizen. When the public realizes that anything can be convincingly faked, they don't just stop trusting lies; they stop trusting the truth altogether. This creates a phenomenon known as the liar's dividend. When real, corrupt actors are caught on camera committing a crime or accepting a bribe, they can simply dismiss the genuine evidence as an 'AI deepfake.' This absolute confusion forces the public into a state of chronic cynicism, paralyzing their will to participate in democratic processes.

Furthermore, this algorithmic manipulation heavily contaminates public discourse. A healthy democracy requires a baseline consensus on basic facts to debate policies effectively. When deepfakes distort this baseline, public conversation breaks down into emotional tribalism. Divisive and fabricated videos are specifically engineered to shock the human brain, spreading through social media algorithms exponentially faster than slow, methodical fact-checking articles. By the time a deepfake is officially debunked, the psychological damage has already been done, leaving public trust permanently scarred.

In conclusion, hyper-realistic generative AI is a double-edged tool that has turned into a weapon against social stability. To prevent a total collapse of public trust, immediate and aggressive intervention is required. We must implement international legal frameworks that mandate proactive cryptographic watermarking on all generative AI outputs, ensuring every synthetic file can be traced back to its digital source. Simultaneously, we must upgrade our academic curricula to teach deep media literacy, training the next generation to be critical consumers of information. We must protect the truth before the concept of truth itself disappears. Thank you.`,
    keyThemes: ['Epistemological Nihilism', "The Liar's Dividend", 'Cryptographic Watermarking', 'Civic Apathy', 'Post-Truth Democracy']
  },
  {
    id: 13,
    code: 'ĐỀ SỐ 13',
    title: 'SYNTHETIC FOOD ADOPTION AND FOOD SECURITY',
    vietnameseTitle: 'Thực phẩm nhân tạo & An ninh lương thực: Đột phá khí hậu vs Nỗi sợ tâm lý và Di sản ẩm thực',
    category: 'Environment & Ecology',
    context: '2026 climate disruption forces subsidies for bioreactor meat and 3D lab grains (-85% carbon), yet 65% of the public violently resists due to health paranoia.',
    task: 'Deliver a five-minute talk to analyze the socio-cultural and economic trade-offs of transitioning from traditional farming to lab-grown agricultural alternatives.',
    outline: {
      intro: {
        timing: 'approx. 45s',
        hookAndContext: 'The severe agricultural crises of 2026 caused by extreme climate disruptions, forcing a radical shift in food technology.',
        coreProblem: 'Lab-grown synthetic foods reduce carbon emissions by 85%, yet 65% of consumers reject them due to health paranoia and cultural attachment.',
        thesis: 'Transitioning to synthetic agriculture is a necessary climate mitigation strategy, but its global success depends on overcoming intense socio-cultural resistance and ensuring democratic food production.'
      },
      body1: {
        title: 'The Ecological Necessity of Lab-Grown Food',
        timing: 'approx. 1m 30s',
        mainPoint: 'Traditional livestock and monoculture farming are no longer viable under current climate patterns.',
        explanation: 'Bioreactor-grown proteins require significantly less water and land, providing a highly predictable and secure source of nutrition.',
        extension: 'An 85% drop in carbon emissions proves that synthetic food is an indispensable tool for planetary survival.'
      },
      body2: {
        title: 'Psychological Paranoia and Cultural Attrition',
        timing: 'approx. 2m 00s',
        mainPoint1: 'The "Unnatural" Stigma: A 65% resistance rate shows a deep emotional fear of synthetic items entering the human body, often fueled by corporate disinformation.',
        mainPoint2: 'Erosion of Culinary Identity: Food is not merely fuel; it is a repository of cultural heritage and community rituals. Lab-printed food threatens to strip away this human connection.'
      },
      conclusion: {
        timing: 'approx. 45s',
        restatement: 'The synthetic food transition features a clear conflict between scientific necessity and cultural identity.',
        finalTakeaway: 'Governments must launch transparent public health campaigns to demystify bioreactor technology, while actively involving traditional farmers in the new bio-economy to prevent corporate monopolies on our food supply.'
      }
    },
    advancedVocabulary: [
      { term: 'Climate-induced agricultural failure', pos: 'n', level: 'C1', vietnamese: 'Sự suy thoái nông nghiệp do biến đổi khí hậu' },
      { term: 'Bioreactor-grown synthetic meat', pos: 'n', level: 'C2', vietnamese: 'Thịt nhân tạo nuôi cấy trong bể sinh học' },
      { term: 'Socio-cultural resistance', pos: 'n', level: 'C1', vietnamese: 'Sự kháng cự về mặt văn hóa xã hội' },
      { term: 'To demystify bio-technology', pos: 'v', level: 'C2', vietnamese: 'Giải mã, làm sáng tỏ (giúp người dân hiểu rõ và hết sợ công nghệ sinh học)' },
      { term: 'Monopolization of the food supply', pos: 'n', level: 'C2', vietnamese: 'Sự độc quyền hóa nguồn cung thực phẩm' },
      { term: 'Culinary heritage / repository', pos: 'n', level: 'C2', vietnamese: 'Kho tàng di sản ẩm thực' }
    ],
    realWorldData: [
      'Lab-grown meat can slash greenhouse gas emissions by 85%, yet 65% of the population actively rejects it due to deep-seated health anxieties and cultural fears.'
    ],
    sampleTalk: `Good morning, members of the jury. Today, I would like to address a monumental shift occurring at the intersection of climate science and human survival: the adoption of synthetic food. As we witness unprecedented climate-induced agricultural failures in 2026, traditional farming can no longer reliably feed the global population. In response, governments have heavily funded bioreactor-grown meat and lab-printed grains. While this technology slashes carbon emissions by an astonishing 85%, a massive 65% of the global population is actively resisting it due to health anxieties and cultural attachments. I argue that while synthetic food is an absolute ecological necessity, its successful adoption requires a delicate balance that addresses human psychology and prevents corporate monopolies.

Let us first recognize the immense ecological value of this scientific breakthrough. Traditional animal agriculture is one of the leading drivers of deforestation, water scarcity, and methane emissions. In an era where extreme droughts and unpredictable weather patterns are destroying traditional crops, lab-grown agriculture provides an insulated, highly predictable, and hyper-efficient source of nutrition. Operating within controlled bio-secure environments, synthetic agriculture bypasses the need for antibiotics, pesticide runoff, and massive expanses of land. An 85% reduction in carbon emissions is a metric we cannot afford to ignore; it is a clear path toward stabilizing our global climate footprint.

However, science alone cannot feed a population that is governed by deep-seated emotions and cultural traditions. The fact that nearly two-thirds of consumers resist synthetic food points to a profound psychological barrier. Humans possess an evolutionary fear of ingesting substances they perceive as 'unnatural.' This anxiety is worsened by a lack of public understanding of bio-technology, making consumers vulnerable to sensationalized conspiracy theories.

Furthermore, we must remember that food is never just a collection of calories; it is a vital repository of culinary heritage and social identity. From family dinners to cultural festivals, traditional cooking bonds communities together. Replacing fields and livestock with clinical steel bioreactors feels, to many, like a cold erasure of human history and connection.

In conclusion, the transition to synthetic food adoption is a classic conflict between planetary survival and human culture. To bridge this gap, governments must move beyond simple subsidies and invest in transparent education campaigns to demystify bio-technology, proving its long-term safety to the public. More importantly, we must prevent the monopolization of the food supply by a few massive tech corporations. Traditional farmers must be reskilled and integrated as key stakeholders in this new bio-economy. We must utilize the precision of science to protect our planet, without losing the warmth and heritage of our tables. Thank you.`,
    keyThemes: ['Bioreactor-Grown Food', 'Culinary Heritage', 'Demystifying Biotechnology', 'Food Security', 'Monopolization Safeguards']
  },
  {
    id: 14,
    code: 'ĐỀ SỐ 14',
    title: 'THE "NEO-LUDDITE" YOUTH MOVEMENT',
    vietnameseTitle: 'Phong trào "Neo-Luddite" ở giới trẻ: Đòi lại quyền tự chủ tư duy từ cỗ máy thuật toán',
    category: 'Youth & Psychology',
    context: 'A 2026 sociological trend: 40% of Gen Z & Gen Alpha youth intentionally abandon smartphones for analog dumbphones to protest algorithmic surveillance and dopamine traps.',
    task: 'Deliver a five-minute talk to evaluate whether this radical digital detox movement is a sustainable solution to modern psychological crises or merely a transient subcultural trend.',
    outline: {
      intro: {
        timing: 'approx. 45s',
        hookAndContext: 'The ironic rise of the "Neo-Luddite" movement in 2026, where digital-native youth voluntarily abandon smartphones for analog "dumbphones."',
        coreProblem: '40% of teenagers are exiting social media to protest algorithmic surveillance and severe cognitive degradation.',
        thesis: 'The Neo-Luddite movement is not a transient subcultural trend, but a profound, necessary psychological rebellion against corporate digital exploitation.'
      },
      body1: {
        title: 'Reclamation of Human Agency and Mental Sanity',
        timing: 'approx. 1m 30s',
        mainPoint: 'Ditching smartphones targets the root cause of adolescent anxiety and attention fragmentation.',
        explanation: 'Modern algorithms are designed to exploit human dopamine pathways. By switching to dumbphones, youth reclaim their cognitive autonomy.',
        extension: 'The movement fosters deep, face-to-face interpersonal connection and eliminates the toxic loop of online social validation.'
      },
      body2: {
        title: 'Systematic Counter-Current to Algorithmic Surveillance',
        timing: 'approx. 2m 00s',
        mainPoint1: 'Political Statement: This movement functions as an active strike against data commodification and predatory tech monopolies.',
        mainPoint2: 'Sustainability Dilemma: Critics argue that total disconnection is impossible in a hyper-digitized society; however, the movement establishes a powerful precedent for "mindful digital minimalism" rather than total isolation.'
      },
      conclusion: {
        timing: 'approx. 45s',
        restatement: 'The youth-led Neo-Luddite shift reveals a systemic desire to prioritize mental well-being over continuous connectivity.',
        finalTakeaway: 'Educational and political institutions must support this shift by advocating for tech corporations to design "human-first" interfaces and introducing mandatory right-to-disconnect laws.'
      }
    },
    advancedVocabulary: [
      { term: 'Algorithmic surveillance', pos: 'n', level: 'C2', vietnamese: 'Sự giám sát bằng thuật toán' },
      { term: 'Dopaminergic exploitation', pos: 'n', level: 'C2', vietnamese: 'Sự khai thác các đường dẫn dopamine (bẫy gây nghiện của mạng xã hội)' },
      { term: 'Transient subcultural trend', pos: 'n', level: 'C1', vietnamese: 'Xu hướng văn hóa phụ nhất thời, chóng vánh' },
      { term: 'Digital minimalism', pos: 'n', level: 'C1', vietnamese: 'Chủ nghĩa tối giản công nghệ số' },
      { term: 'To reclaim cognitive autonomy', pos: 'phr', level: 'C2', vietnamese: 'Đòi lại quyền tự chủ về mặt nhận thức / tư duy' },
      { term: 'Data commodification', pos: 'n', level: 'C2', vietnamese: 'Sự thương mại hóa dữ liệu cá nhân' }
    ],
    realWorldData: [
      '2026 sociological audits show that 40% of teenagers have intentionally downgraded to analog phones, citing extreme screen burnout and attention fragmentation.'
    ],
    sampleTalk: `Good morning, everyone. Today, I want to discuss a remarkable cultural shift occurring among the younger generation in 2026: the rise of the 'Neo-Luddite' youth movement. Historically, Luddites were seen as radical machine-breakers who feared progress. Today’s Neo-Luddism, however, is a sophisticated psychological revolt led by Gen Z and Gen Alpha. Recent data reveals that an astonishing 40% of teenagers are intentionally abandoning their smartphones for analog 'dumbphones' and stepping away from social networks. I argue that this movement is not a transient subcultural trend, but a crucial step toward reclaiming cognitive autonomy from a predatory tech industry that values profit over human mental sanity.

To truly understand this rebellion, we must examine the severe psychological damage caused by corporate dopaminergic exploitation. For over a decade, social media algorithms have been explicitly engineered to manipulate human brain chemistry, trapping young users in addictive loops of notifications and curated validation. This has directly caused a global spike in adolescent depression, body dysmorphic disorders, and severe attention fragmentation. By switching to analog devices that only support calls and basic text messages, these young activists are executing a proactive digital detox. They are freeing their minds from the constant pressure of social comparison, choosing the clarity of the present moment over artificial, screen-mediated validation.

Furthermore, this movement is a profound political and philosophical statement against algorithmic surveillance and data commodification. Today's youth are acutely aware that tech conglomerates treat their personal attention, behavioral patterns, and intimate conversations as raw material to be harvested and sold. Disconnecting from these platforms is an act of peaceful resistance against tech monopolies. While critics argue that total tech isolation is unsustainable in a hyper-digitized global economy, the true purpose of the Neo-Luddite movement is not to freeze human progress. Instead, it aims to establish a healthy model of digital minimalism. It forces society to realize that technology should serve as a practical utility, not an aggressive master that dictates our emotional states.

In conclusion, the Neo-Luddite youth movement is a powerful alarm bell for modern society. It proves that continuous digital connection does not equal human progress. To sustain this momentum, our educational and legal institutions must take action. Governments should regulate big tech by enforcing strict algorithmic transparency laws, while schools should cultivate phone-free zones to encourage deep human interaction. True progress means possessing the wisdom to switch off the screen to protect the human mind. Thank you.`,
    keyThemes: ['Neo-Luddism', 'Dopaminergic Exploitation', 'Cognitive Autonomy', 'Data Commodification', 'Digital Minimalism']
  },
  {
    id: 15,
    code: 'ĐỀ SỐ 15',
    title: 'COMMERCIAL SPACE TOURISM AND ECO-INEQUALITY',
    vietnameseTitle: 'Du lịch vũ trụ thương mại: Đỉnh cao công nghệ hay Biểu tượng bất bình đẳng sinh thái',
    category: 'Environment & Ecology',
    context: 'In 2026, private space joyrides for billionaires hit record highs. A single 15-minute suborbital flight produces more carbon than a normal human lifetime, triggering protests over "eco-inequality."',
    task: 'Deliver a five-minute talk to discuss the ethical and environmental dilemmas surrounding the rapid rise of privatized space tourism.',
    outline: {
      intro: {
        timing: 'approx. 45s',
        hookAndContext: 'The booming industry of private commercial space tourism in 2026, marketed as the pinnacle of human achievement.',
        coreProblem: 'Ultra-wealthy elites spending fortunes on 15-minute suborbital flights, while a single flight produces a catastrophic carbon footprint.',
        thesis: 'Commercial space tourism is an unethical display of eco-inequality that forces the global public to bear the environmental costs of billionaire leisure.'
      },
      body1: {
        title: 'The Catastrophic Ecological Footprint',
        timing: 'approx. 1m 30s',
        mainPoint: 'Rocket emissions inject carbon and soot directly into the highly vulnerable upper atmosphere.',
        explanation: 'Unlike commercial aviation, space tourism emissions disrupt the stratosphere, accelerating ozone layer depletion and localized atmospheric heating.',
        extension: 'A single 15-minute flight emitting more carbon than an average citizen\'s entire lifetime footprint is ecologically unjustifiable.'
      },
      body2: {
        title: 'The Ethical Divide of Eco-Inequality',
        timing: 'approx. 2m 00s',
        mainPoint1: 'Socio-Economic Polarization: The industry highlights a stark moral failure, where billions suffer from climate-induced droughts while the top 0.01% burn planet resources for vanity.',
        mainPoint2: 'The Governance Vacuum: Space travel currently operates in a regulatory wild west, avoiding the heavy environmental taxes and carbon caps applied to earthbound industries.'
      },
      conclusion: {
        timing: 'approx. 45s',
        restatement: 'Space tourism benefits an elite minority while degrading a climate infrastructure shared by all of humanity.',
        finalTakeaway: 'International environmental bodies must impose aggressive carbon taxes on luxury space tourism, funneling 100% of those funds directly into global climate adaptation and rural clean-energy grids.'
      }
    },
    advancedVocabulary: [
      { term: 'Eco-inequality', pos: 'n', level: 'C2', vietnamese: 'Sự bất bình đẳng về dấu chân sinh thái (kẻ giàu phá hoại, người nghèo gánh nạn)' },
      { term: 'Stratospheric degradation', pos: 'n', level: 'C2', vietnamese: 'Sự suy thoái tầng bình lưu' },
      { term: 'Regulatory wild west', pos: 'n', level: 'C1', vietnamese: 'Vùng đất vô luật pháp / Chưa có khung pháp lý kiểm soát' },
      { term: 'Carbon-intensive vanity', pos: 'n', level: 'C2', vietnamese: 'Sự phù phiếm tốn nhiều khí thải carbon' },
      { term: 'Socio-economic polarization', pos: 'n', level: 'C1', vietnamese: 'Sự phân cực sâu sắc về kinh tế xã hội' },
      { term: 'To bear the environmental brunt', pos: 'phr', level: 'C2', vietnamese: 'Gánh chịu hậu quả môi trường nặng nề nhất' }
    ],
    realWorldData: [
      'Climate data from 2026 shows a single suborbital joyride produces more greenhouse gas than a lifetime footprint of an average global citizen.'
    ],
    sampleTalk: `Good afternoon, ladies and gentlemen of the jury. Today, I would like to address a deeply concerning ethical crisis that has accelerated throughout 2026: the rapid growth of commercial space tourism. Aerospace corporations are celebrating this trend as a triumph of human innovation. However, beneath the glamorous marketing lies a stark reality of extreme eco-inequality. While the ultra-wealthy spend millions to experience a few minutes of weightlessness, scientists confirm that a single 15-minute suborbital flight produces a massive carbon footprint. I contend that privatized space tourism is a glaring ethical failure that permits an elite minority to destroy our shared atmosphere for their own entertainment.

Let us first examine the severe environmental toll of this industry. Unlike traditional commercial aviation, which operates in the lower atmosphere, rockets inject greenhouse gases and black carbon directly into the highly sensitive stratosphere. This localized pollution can remain trapped for years, accelerating stratospheric degradation and damaging the ozone layer that protects us from ultraviolet radiation. The math behind these flights is deeply unjust; a brief billionaire joyride generates more emissions than an average human being will produce in their entire lifetime. In an era where world leaders are asking citizens to reduce their personal carbon footprints, allowing this carbon-intensive vanity to expand unhindered is hypocritical and dangerous.

This brings us to the core issue of eco-inequality and deep socio-economic polarization. The consequences of climate change—including devastating droughts, rising sea levels, and agricultural collapses—are disproportionately suffered by impoverished communities in developing countries. These marginalized populations have contributed the least to global emissions, yet they are forced to bear the environmental brunt of a luxury hobby they will never access. Furthermore, commercial space travel currently operates in a regulatory wild west. While local factories and international airlines face strict carbon caps and heavy environmental penalties, private space corporations enjoy sweeping tax exemptions under the guise of scientific research.

In conclusion, we must realize that space exploration is a sacred pursuit that should benefit all of humanity, not a toxic playground for billionaires. To address this profound imbalance, international climate coalitions must act immediately. We must impose aggressive, non-negotiable carbon taxes on all commercial luxury space flights, mandating that 100% of these revenues be redirected toward funding global climate adaptation projects and clean-energy infrastructure in vulnerable nations. If billionaires want to look at the Earth from above, they must first pay to keep it alive below. Thank you.`,
    keyThemes: ['Eco-Inequality', 'Stratospheric Degradation', 'Regulatory Wild West', 'Carbon-Intensive Vanity', 'Climate Justice']
  },
  {
    id: 16,
    code: 'ĐỀ SỐ 16',
    title: 'GIG ECONOMY EXPLOITATION AND ALGORITHMIC MANAGEMENT',
    vietnameseTitle: 'Bóc lột trong kinh tế Gig & Quản trị nhân sự bằng thuật toán AI: Nhà tù số Panopticon',
    category: 'Economy & Work',
    context: 'By 2026, 35% of the global workforce works in the gig economy. 80% are managed by algorithms that dock pay, enforce dangerous quotas, and execute arbitrary firing without human recourse.',
    task: 'Deliver a five-minute talk to analyze the ethical implications of using automated algorithms as human resource managers in the modern gig economy.',
    outline: {
      intro: {
        timing: 'approx. 45s',
        hookAndContext: 'The explosive expansion of the gig economy, now making up over 35% of the global workforce in 2026.',
        coreProblem: 'The transition from human managers to automated algorithms that monitor, reward, and penalize freelance workers.',
        thesis: 'Algorithmic management in the gig economy is a digital tool for exploitation that strips away basic labor rights and treats human workers as mere code.'
      },
      body1: {
        title: 'The Automated Panopticon and Loss of Dignity',
        timing: 'approx. 1m 30s',
        mainPoint: 'Algorithmic management enforces a brutal, continuous surveillance system that ignores human physical limits.',
        explanation: 'AI models track workers\' movements via GPS in real time, automatically docking pay or setting dangerous speed quotas to maximize corporate margins.',
        extension: 'The complete elimination of human empathy from management; workers cannot explain accidents, sickness, or traffic delays to an unyielding algorithm.'
      },
      body2: {
        title: 'The De-platforming Threat and Legal Accountability',
        timing: 'approx. 2m 00s',
        mainPoint1: 'Algorithmic Termination: Workers face sudden "de-platforming" (firing) based on opaque computer metrics with no access to a human appeal process.',
        mainPoint2: 'The Legal Loophole: Corporate entities use the "independent contractor" label to escape minimum wage mandates, health insurance, and standard labor laws, creating modern corporate feudalism.'
      },
      conclusion: {
        timing: 'approx. 45s',
        restatement: 'Algorithmic management strips labor of its basic dignity, transforming workers into disposable digital gears.',
        finalTakeaway: 'Legislative bodies must implement a strict "Human-in-the-Loop" legal mandate, classifying gig workers as full employees and granting them the legal right to audit corporate algorithms.'
      }
    },
    advancedVocabulary: [
      { term: 'Algorithmic management', pos: 'n', level: 'C2', vietnamese: 'Sự quản lý nhân sự bằng thuật toán' },
      { term: 'Automated panopticon', pos: 'n', level: 'C2', vietnamese: 'Mô hình nhà tù giám sát toàn diện tự động (theo dõi sát sao 24/7)' },
      { term: 'Arbitrary de-platforming', pos: 'n', level: 'C2', vietnamese: 'Việc bị khóa tài khoản / sa thải một cách độc đoán bởi AI' },
      { term: 'Corporate feudalism', pos: 'n', level: 'C2', vietnamese: 'Chế độ phong kiến doanh nghiệp (tập đoàn nắm quyền sinh sát, người làm không có quyền)' },
      { term: 'Opaque computer metrics', pos: 'n', level: 'C1', vietnamese: 'Các chỉ số máy tính mờ ám, thiếu minh bạch' },
      { term: 'To dock pay', pos: 'v', level: 'C1', vietnamese: 'Khấu trừ / Cắt giảm lương' }
    ],
    realWorldData: [
      'By 2026, 35% of the global workforce relies on gig platforms, with 80% reporting that their daily labor is entirely controlled and evaluated by algorithms.'
    ],
    sampleTalk: `Good morning, members of the jury. Today, I would like to examine the modern labor landscape and focus on a pressing human rights issue: gig economy exploitation under algorithmic management. As of 2026, the gig economy encompasses over 35% of the global workforce. However, this flexibility is a myth. Recent labor disputes reveal that 80% of these couriers, drivers, and freelancers are managed entirely by AI algorithms. These digital systems automatically set speed quotas, dock pay, and terminate contracts without any human oversight. I argue that algorithmic management has turned the modern workplace into an automated panopticon, reducing human beings to disposable digital gears and eroding decades of hard-won labor rights.

To fully understand the cruelty of this system, we must look at how AI removes empathy from human resource management. A traditional manager understands that a delivery driver might slow down due to heavy rain, traffic accidents, or sudden illness. An automated algorithm, however, operates on cold, mathematical optimizations. It tracks workers via GPS every second, and if a courier fails to meet an unrealistic delivery window, the system automatically penalizes their account score. This optimization forces workers to take dangerous risks, such as speeding through red lights, simply to avoid algorithmic punishment. This system strips labor of its basic human dignity, leaving workers in a state of constant anxiety under an invisible, digital boss.

The injustice deepens when we examine the phenomenon of arbitrary de-platforming. In this system, an app can instantly lock a worker out of their livelihood based on opaque computer metrics, such as a minor drop in customer ratings or an automated flag. The worker is fired instantly by a line of code, with no human HR representative to talk to, no labor union to call, and no clear method for appeal. Gig platforms intentionally hide behind the legal label of 'independent contractors' to avoid paying minimum wages, providing healthcare, or offering severance pay. This is nothing less than a modern form of corporate feudalism, where conglomerates enjoy massive profits while offloading all operational risks onto vulnerable individuals.

In conclusion, the rise of AI in the gig economy demonstrates that technology without ethics leads to immediate exploitation. We must recognize that code should never override human rights. To rectify this systemic abuse, governments must act decisively. We must pass comprehensive labor reforms that classify gig workers as full employees, giving them access to healthcare and collective bargaining rights. Furthermore, we must legally mandate a 'Human-in-the-Loop' framework, ensuring that any major disciplinary action or termination is audited and approved by an actual human manager. Thank you.`,
    keyThemes: ['Automated Panopticon', 'Arbitrary De-platforming', 'Corporate Feudalism', 'Human-in-the-Loop', 'Algorithmic Management']
  },
  {
    id: 17,
    code: 'ĐỀ SỐ 17',
    title: 'CLIMATE MIGRATION AND URBAN INFRASTRUCTURE COLLAPSE',
    vietnameseTitle: 'Di dân do biến đổi khí hậu & Nguy cơ sụp đổ hạ tầng các siêu đô thị',
    category: 'Environment & Ecology',
    context: 'In 2026, sea-level rises and heatwaves displaced 50 million climate refugees into inland cities, causing 70% of host cities to experience utility failures and megaslum growth.',
    task: 'Deliver a five-minute talk to discuss the immediate systemic pressures that climate-driven mass migration exerts on urban planning and social cohesion.',
    outline: {
      intro: {
        timing: 'approx. 45s',
        hookAndContext: 'The undeniable arrival of mass climate migration in 2026, driven by extreme sea-level rises and unlivable heatwaves.',
        coreProblem: 'Over 50 million domestic climate refugees migrating to inland megacities, causing a 70% collapse in basic municipal grids.',
        thesis: 'Climate migration is a pressing systemic crisis that threatens to cause complete urban collapse unless municipal planning undergoes a rapid transformation.'
      },
      body1: {
        title: 'The Catastrophic Pressure on Urban Grids',
        timing: 'approx. 1m 30s',
        mainPoint: 'Inland megacities are structurally unequipped to handle rapid, massive population spikes.',
        explanation: 'The sudden arrival of millions of internal refugees causes immediate failures in sewage, water supply, and clean energy grids.',
        extension: 'Hospitals and public education systems face severe resource depletion, turning urban centers into centers of high stress.'
      },
      body2: {
        title: 'Socio-Spatial Segregation and the Rise of Megaslums',
        timing: 'approx. 2m 00s',
        mainPoint1: 'Housing Crises: The lack of affordable housing forces climate migrants into informal, hazardous settlements on the margins of cities.',
        mainPoint2: 'Social Instability: Severe competition for basic resources—such as drinking water and entry-level jobs—sparks social tension and xenophobic friction between long-term residents and newly arrived climate refugees.'
      },
      conclusion: {
        timing: 'approx. 45s',
        restatement: 'Cities can no longer design infrastructure based on historical population averages; they must adapt to an era of mass climate displacement.',
        finalTakeaway: 'International development banks must partner with national governments to fund decentralized, resilient infrastructure and build secondary satellite cities to distribute population density safely.'
      }
    },
    advancedVocabulary: [
      { term: 'Systemic urban collapse', pos: 'n', level: 'C2', vietnamese: 'Sự sụp đổ hệ thống đô thị' },
      { term: 'Socio-spatial segregation', pos: 'n', level: 'C2', vietnamese: 'Sự phân hóa / chia rẽ sâu sắc về không gian sống xã hội (khu giàu vs khu ổ chuột)' },
      { term: 'Municipal grid failure', pos: 'n', level: 'C1', vietnamese: 'Sự quá tải, thất bại của mạng lưới tiện ích thành phố' },
      { term: 'Informal hazardous settlements', pos: 'n', level: 'C1', vietnamese: 'Các khu định cư trái phép và nguy hiểm (khu ổ chuột thiếu an toàn)' },
      { term: 'To absorb population shocks', pos: 'phr', level: 'C2', vietnamese: 'Hấp thụ / chống chịu những cú sốc lớn về gia tăng dân số' },
      { term: 'Xenophobic friction', pos: 'n', level: 'C2', vietnamese: 'Sự xung đột, bài xích người nhập cư / người nơi khác đến' }
    ],
    realWorldData: [
      '2026 migration statistics show over 50 million domestic climate refugees moving inland, triggering critical infrastructure failures in 70% of destination cities.'
    ],
    sampleTalk: `Good afternoon, distinguished judges. Today, I would like to draw your attention to a profound humanitarian and structural crisis defining the year 2026: climate migration and the resulting threat of systemic urban collapse. Due to rising sea levels and unlivable heatwaves, over 50 million domestic climate refugees have been forced to abandon their coastal and agrarian homes, relocating to major inland megacities. This sudden population shift has pushed municipal networks past their breaking points, with 70% of receiving cities reporting failures in their sewage, clean water, and electrical grids. I argue that climate migration is no longer a future prediction; it is an immediate crisis that will destroy urban social cohesion unless we fundamentally transform our approach to urban development.

To understand the severity of this issue, we must first look at the immediate failure of basic municipal utilities. Most modern megacities were engineered to handle slow, predictable demographic growth over decades. They are structurally unequipped to absorb population shocks of this scale. When hundreds of thousands of internal refugees arrive within months, clean water reservoirs are rapidly depleted, sewage networks overflow, and electricity grids experience continuous blackouts. Public healthcare and education systems face immediate shortages of staff and supplies. This turning of cities into hyper-congested spaces degrades the quality of life for all residents, transforming centers of economic opportunity into fragile hubs of survival.

This crisis is further worsened by severe socio-spatial segregation. Because municipal authorities cannot provide public housing fast enough, impoverished climate migrants are forced to build informal hazardous settlements on the geographic margins of megacities. These rapidly growing megaslums lack sanitation, clean water, and fire protection, leaving residents vulnerable to disease and natural disasters. Furthermore, this extreme scarcity of basic resources breeds intense social friction. As climate refugees compete with long-term urban residents for low-skilled jobs and clean water, xenophobic friction and civil unrest begin to rise. This splinters the social fabric of the city, turning communities against each other in a desperate fight for survival.

In conclusion, the crisis of climate migration proves that environmental failures cannot be separated from urban stability. We can no longer build cities based on historical population models; we must design for climate resilience. The solution requires immediate financial and strategic collaboration. International development banks must fund national governments to construct decentralized infrastructure and build secondary satellite cities to distribute population density safely. We must rebuild our urban centers to shelter the displaced, or watch our cities collapse under the weight of climate inaction. Thank you.`,
    keyThemes: ['Climate Refugees', 'Socio-Spatial Segregation', 'Municipal Grid Failure', 'Xenophobic Friction', 'Satellite City Decentralization']
  },
  {
    id: 18,
    code: 'ĐỀ SỐ 18',
    title: 'THE MICRO-CREDIT TRAJECTORY AND GEN Z DEBT CRISIS',
    vietnameseTitle: 'Khủng hoảng nợ tín dụng tiểu ngạch (BNPL) ở thế hệ Gen Z: Cái bẫy "Mua trước, trả sau"',
    category: 'Economy & Work',
    context: 'Buy Now Pay Later (BNPL) and micro-lending apps gamify borrowing. 55% of university students in 2026 are trapped in micro-debt cycles to finance fleeting trends.',
    task: 'Deliver a five-minute talk to evaluate how micro-credit technology affects financial literacy and psychological stability among young adults.',
    outline: {
      intro: {
        timing: 'approx. 45s',
        hookAndContext: 'The widespread popularity of "Buy Now, Pay Later" (BNPL) and micro-lending apps among the youth in 2026.',
        coreProblem: '55% of university students are trapped in predatory micro-debt cycles to fund daily expenses and fleeting internet trends.',
        thesis: 'Micro-credit technology functions as a digital debt trap that exploits the psychological vulnerabilities of young adults, threatening their long-term financial freedom and mental health.'
      },
      body1: {
        title: 'Gamification of Debt and Behavioral Manipulation',
        timing: 'approx. 1m 30s',
        mainPoint: 'FinTech apps disguise predatory lending as a frictionless, glamorous lifestyle choice.',
        explanation: 'By removing the traditional friction of bank loans (paperwork, credit checks), apps make borrowing money as simple as clicking a button.',
        extension: 'The integration of micro-loans into social media checkouts encourages impulsive buying, driving young consumers to spend money they do not have.'
      },
      body2: {
        title: 'Predatory Debt Spirals and Psychological Distress',
        timing: 'approx. 2m 00s',
        mainPoint1: 'The Compound Interest Trap: Missed payments trigger massive interest rates and hidden fees, forcing students to take out new micro-loans to pay off old ones.',
        mainPoint2: 'Cognitive Disabling of the Youth: Entering adult life with a ruined credit score causes severe mental distress, anxiety, and prevents young professionals from ever achieving financial milestones like buying a home.'
      },
      conclusion: {
        timing: 'approx. 45s',
        restatement: 'Micro-lending platforms have commercialized debt, creating a generation of financially vulnerable youth.',
        finalTakeaway: 'Central banks must implement strict regulatory caps on interest rates for digital micro-loans and enforce mandatory financial literacy education in high schools.'
      }
    },
    advancedVocabulary: [
      { term: 'Predatory micro-debt cycles', pos: 'n', level: 'C2', vietnamese: 'Vòng xoáy nợ tín dụng nhỏ mang tính bóc lột / bẫy nợ' },
      { term: 'Gamification of finance', pos: 'n', level: 'C2', vietnamese: 'Sự trò chơi hóa tài chính (biến việc vay tiền thành trò chơi dễ dãi)' },
      { term: 'Frictionless borrowing', pos: 'n', level: 'C1', vietnamese: 'Việc vay mượn mượt mà / quá dễ dàng (không rào cản thủ tục)' },
      { term: 'Impaired creditworthiness', pos: 'n', level: 'C2', vietnamese: 'Sự suy giảm điểm tín nhiệm tài chính (bị ghi danh nợ xấu)' },
      { term: 'To exploit psychological vulnerabilities', pos: 'phr', level: 'C1', vietnamese: 'Khai thác các điểm yếu về tâm lý' },
      { term: 'Financial literacy', pos: 'n', level: 'B2', vietnamese: 'Kiến thức quản lý tài chính' }
    ],
    realWorldData: [
      '2026 financial audits reveal that 55% of university students are caught in systemic digital micro-debt, using apps to fund basic lifestyles and consumer trends.'
    ],
    sampleTalk: `Good morning, members of the jury. Today, I would like to dissect a modern financial crisis occurring quietly on the smartphone screens of our youth: the modern micro-credit debt trap. Throughout 2026, the meteoric rise of 'Buy Now, Pay Later' digital apps has fundamentally altered the consumption patterns of young adults. Financial audits reveal an alarming reality: 55% of university students are currently trapped in predatory micro-debt cycles. These young individuals are utilizing digital credit lines not for major investments, but to fund daily lifestyle expenses and short-term internet trends. I contend that micro-credit technology is a predatory mechanism that exploits youth psychology, ruining their financial futures and causing severe mental distress.

To understand this crisis, we must look at how technology enables the gamification of finance. Historically, borrowing money required dealing with strict bank protocols, paperwork, and intense credit checks. This created a healthy psychological barrier that forced consumers to reconsider impulse purchases. Modern FinTech apps, however, have engineered a system of frictionless borrowing. By integrating micro-loans directly into social media marketplaces, they transform a serious financial decision into a casual click of a button. These platforms use colorful, minimalist interfaces that hide the realities of interest rates, making borrowing money feel like earning points in a video game. This directly targets the impulsive nature of the adolescent brain, encouraging students to live far beyond their means.

However, the casual ease of borrowing quickly turns into a financial trap. When a student fails to make a payment on time, they are hit with massive interest rates and hidden penalties. To avoid default, many students resort to a dangerous practice: borrowing from one app to pay off another. This creates an escaping debt spiral that ruins their creditworthiness before they even graduate. Entering adulthood with a compromised credit score locks young people out of the formal financial system, making it impossible to secure housing loans or car loans. The psychological weight of this continuous digital harassment from automated debt collectors causes severe anxiety and early depression among university students.

In conclusion, the micro-credit phenomenon proves that financial technology, when left unregulated, will always prioritize short-term profit over consumer safety. To protect the next generation, we must enforce immediate structural guardrails. Central banking authorities must pass strict regulations that ban predatory advertising by FinTech apps and impose strict caps on micro-loan interest rates. More importantly, we must integrate comprehensive financial literacy programs into high school curricula worldwide. We must teach our youth to navigate the digital economy with caution, ensuring that technology serves as a tool for financial freedom rather than a digital cage of debt. Thank you.`,
    keyThemes: ['Gamification of Finance', 'Buy Now Pay Later (BNPL)', 'Predatory Micro-Debt', 'Impaired Creditworthiness', 'Mandatory Financial Literacy']
  },
  {
    id: 19,
    code: 'ĐỀ SỐ 19',
    title: 'GENETICALLY CUSTOMIZED HEALTHCARE AND ETHICAL DIVIDES',
    vietnameseTitle: 'Y tế tùy biến mã di truyền CRISPR & Nguy cơ phân tách sinh học chủng tộc người',
    category: 'Tech & AI',
    context: '2026 CRISPR breakthroughs allow curing hereditary diseases and enhancing traits, but exorbitant pricing restricts it to the top 1%, raising fears of a "genetically bifurcated" humanity.',
    task: 'Deliver a five-minute talk to analyze the profound moral and ethical implications of commercializing gene-editing technology under free-market healthcare systems.',
    outline: {
      intro: {
        timing: 'approx. 45s',
        hookAndContext: 'The profound medical milestones of 2026, driven by breakthroughs in CRISPR and gene-editing technologies.',
        coreProblem: 'Premium genetic customizations remain affordable only for the top 1% of earners, raising fears of a "genetically bifurcated" humanity.',
        thesis: 'The commercialization of gene editing under free-market healthcare threatens to transform economic inequality into irreversible biological inequality.'
      },
      body1: {
        title: 'The Promise of Eradication vs. The Reality of Exclusion',
        timing: 'approx. 1m 30s',
        mainPoint: 'Gene editing offers the cure to hereditary diseases but is gatekept by exorbitant pricing.',
        explanation: 'Under pure capitalist healthcare models, life-saving therapies are treated as luxury products rather than basic human rights.',
        extension: 'The affluent can purchase genetic immunity from cancer or Alzheimer\'s, while the global poor remain vulnerable to preventable diseases.'
      },
      body2: {
        title: 'The Genetically Bifurcated Human Race',
        timing: 'approx. 2m 00s',
        mainPoint1: 'Enhancement over Therapy: The shift from curing illnesses to optimizing physical and cognitive traits (e.g., memory enhancement, lifespan extension).',
        mainPoint2: 'The Ultimate Caste System: If the wealthy can permanently upgrade the DNA of their offspring, biological superiority will permanently entrench economic privilege, creating a master class of genetically engineered elites.'
      },
      conclusion: {
        timing: 'approx. 45s',
        restatement: 'Unregulated commercial gene editing risks creating an unbridgeable biological divide between the rich and the poor.',
        finalTakeaway: 'Global health organizations must classify human gene-editing technologies as a collective global commons, placing heavy bans on elective genetic enhancement while subsidizing therapeutic edits for all.'
      }
    },
    advancedVocabulary: [
      { term: 'Genetically bifurcated human race', pos: 'n', level: 'C2', vietnamese: 'Chủng tộc người bị phân tách kép về mặt di truyền (người giàu siêu việt sinh học, người nghèo tụt hậu)' },
      { term: 'Irreversible biological inequality', pos: 'n', level: 'C2', vietnamese: 'Sự bất bình đẳng sinh học không thể đảo ngược' },
      { term: 'Global commons', pos: 'n', level: 'C2', vietnamese: 'Tài sản chung của nhân loại (cần bảo vệ và chia sẻ bình đẳng)' },
      { term: 'Exorbitant gatekeeping', pos: 'n', level: 'C2', vietnamese: 'Sự kiểm soát, rào cản nghiêm ngặt bằng giá cả đắt đỏ' },
      { term: 'To entrench economic privilege', pos: 'phr', level: 'C2', vietnamese: 'Củng cố, định hình vĩnh viễn đặc quyền kinh tế' },
      { term: 'Elective genetic enhancement', pos: 'n', level: 'C1', vietnamese: 'Sự tối ưu hóa / nâng cấp di truyền tự chọn (không vì mục đích chữa bệnh)' }
    ],
    realWorldData: [
      'In 2026, commercial gene therapies cost millions of dollars per treatment, creating an alarming disparity where life expectancy and genetic disease resistance are strictly dictated by net worth.'
    ],
    sampleTalk: `Good afternoon, ladies and gentlemen of the jury. Today, I would like to invite you to contemplate a profound ethical crossroads defining the year 2026: the commercialization of genetic healthcare. Recent breakthroughs in CRISPR and gene-editing technologies have granted humanity an almost god-like power—the capacity to rewrite the human genome, eliminate hereditary diseases, and optimize physical performance. However, because these therapies operate within a free-market healthcare system, their exorbitant costs make them accessible only to the top 1% of global earners. I contend that the unregulated commercialization of gene-editing technology is a severe moral crisis that threatens to transform economic privilege into irreversible biological inequality, creating a genetically bifurcated human race.

To fully understand the gravity of this issue, we must look at the transition from therapeutic medicine to selective enhancement. Initially, gene editing was developed to cure devastating conditions like sickle cell anemia or muscular dystrophy. However, under a capitalist framework, premium hospitals have expanded their services to offer elective genetic enhancement. The ultra-wealthy can now pay to optimize their offspring’s cognitive retention, physical stamina, and longevity. This creates a terrifying reality where the rich do not merely buy better housing or private education; they buy superior DNA. This exorbitant gatekeeping ensures that the affluent can protect their children from disease and mental decline, while the underprivileged remain vulnerable to hereditary suffering due to a lack of funds.

The long-term sociological consequences of this trend are catastrophic. Throughout history, social hierarchies were fluid—the poor could rise through education, hard work, or revolution. However, if genetic enhancements remain the exclusive monopoly of the elite, we will create a biological caste system. The wealthy will be genetically engineered to be smarter, healthier, and stronger than the rest of the population. This will permanently entrench economic privilege into the human biology itself. It would create a permanent divide where the non-engineered working class becomes a biologically subjugated demographic, unable to compete with genetically optimized elites in academics, sports, or the professional workforce.

In conclusion, gene editing represents a double-edged sword that could either liberate humanity from disease or destroy the concept of human equality altogether. We cannot allow the blueprint of human life to be dictated by market forces. To prevent a dystopian future, international governance bodies must act immediately. We must classify the human genome as part of the global commons, implementing a total ban on commercial elective enhancements. Simultaneously, therapeutic gene editing must be heavily subsidized by governments and integrated into universal public healthcare systems. Science must be used to level the playing field of life, not to destroy our shared humanity. Thank you.`,
    keyThemes: ['Genetically Bifurcated Human Race', 'CRISPR Bioethics', 'Global Commons', 'Biological Caste System', 'Elective Genetic Enhancement']
  },
  {
    id: 20,
    code: 'ĐỀ SỐ 20',
    title: 'FAST ENTERTAINMENT AND THE COLLAPSE OF ATTENTION SPANS',
    vietnameseTitle: 'Giải trí mì ăn liền & Sự suy giảm khả năng tập trung: Vấn nạn phá hoại nhận thức',
    category: 'Youth & Psychology',
    context: 'In 2026, AI-curated video platforms (<7-second clips) dominate media. Adolescent attention span dropped to 4.5 seconds; text comprehension fell by 30% worldwide.',
    task: 'Deliver a five-minute talk to discuss the long-term cognitive and academic consequences of "fast entertainment" consumption on the younger generation.',
    outline: {
      intro: {
        timing: 'approx. 45s',
        hookAndContext: 'The complete dominance of ultra-short-form, AI-curated video platforms in 2026, delivering content in fragments under 7 seconds.',
        coreProblem: 'Cognitive psychologists report the average adolescent attention span has dropped to 4.5 seconds, causing reading comprehension scores to plunge by 30%.',
        thesis: 'The rise of "fast entertainment" is an act of cognitive vandalism that actively rewires the adolescent brain, threatening the future of deep literacy and critical thinking.'
      },
      body1: {
        title: 'The Dopamine Factory and Brain Rewiring',
        timing: 'approx. 1m 30s',
        mainPoint: 'Ultra-short content inflicts permanent damage on the brain\'s executive functions.',
        explanation: 'Continuous scrolling rewards the brain with instant dopamine hits every few seconds, destroying the capacity for delayed gratification.',
        extension: 'The adolescent brain, which is still developing, adapts to this high-velocity environment by rejecting any stimulus that requires sustained focus.'
      },
      body2: {
        title: 'The Death of Deep Literacy and Analytical Thinking',
        timing: 'approx. 2m 00s',
        mainPoint1: 'The Academic Plunge: A 30% drop in text comprehension proves that youth can no longer engage with long-form literature or complex logical arguments.',
        mainPoint2: 'Vulnerability to Manipulation: When attention spans are limited to 4.5 seconds, individuals lose the capacity to process nuance. Public thought becomes vulnerable to superficial clickbait, emotional propaganda, and political radicalization.'
      },
      conclusion: {
        timing: 'approx. 45s',
        restatement: 'Fast entertainment is not harmless fun; it is a structural threat to human intelligence and democracy.',
        finalTakeaway: 'Educational systems must replace digital tablets with mandatory long-form physical reading hours, while public regulations should restrict algorithmic autoplay feeds for minors.'
      }
    },
    advancedVocabulary: [
      { term: 'Fast entertainment', pos: 'n', level: 'C1', vietnamese: 'Giải trí nhanh / Giải trí mì ăn liền' },
      { term: 'Cognitive vandalism', pos: 'n', level: 'C2', vietnamese: 'Sự phá hoại / hủy hoại về mặt nhận thức tư duy' },
      { term: 'Capacity for delayed gratification', pos: 'n', level: 'C2', vietnamese: 'Khả năng trì hoãn sự thỏa mãn (nền tảng của sự kiên trì)' },
      { term: 'Attention fragmentation', pos: 'n', level: 'C1', vietnamese: 'Sự phân mảnh / vụn vỡ của sự tập trung' },
      { term: 'Deep literacy / text comprehension', pos: 'n', level: 'C2', vietnamese: 'Khả năng đọc sâu / Hiểu văn bản phức tạp' },
      { term: 'To adjust synaptic pathways', pos: 'v', level: 'C2', vietnamese: 'Điều chỉnh / lập trình lại các đường dẫn thần kinh' }
    ],
    realWorldData: [
      '2026 psychological tracking shows adolescent attention spans have collapsed to 4.5 seconds, driving a global 30% decline in reading scores.'
    ],
    sampleTalk: `Good afternoon, honorable members of the jury. Today, I would like to address a silent mental crisis that is fundamentally altering human intelligence in 2026: the rise of 'fast entertainment' and the resulting collapse of adolescent attention spans. Over the past year, AI-curated video platforms have reduced media consumption down to clips lasting under 7 seconds. Cognitive psychologists have delivered a terrifying verdict: the average adolescent attention span has withered to just 4.5 seconds, causing academic text comprehension scores worldwide to plummet by 30%. I contend that fast entertainment is an act of cognitive vandalism engineered by tech platforms to monetize youth attention, and it poses an existential threat to deep literacy and independent analytical thought.

To understand how this digital landscape damages the mind, we must look at how it alters our neural circuitry. The adolescent brain is highly adaptable, continuously adjusting synaptic pathways based on daily environmental stimuli. When a teenager spends hours daily on a hyper-fast feed, scrolling every few seconds, their brain receives a continuous stream of instant dopamine hits. This hyper-stimulation completely destroys their capacity for delayed gratification. When these same students return to a real-world classroom and are asked to read a classic novel or solve a complex calculus equation, their brains experience immediate withdrawal. The brain has been trained to expect instant novelty, and it now rejects any intellectual pursuit that requires patience, deep focus, or quiet contemplation.

The societal consequences of this attention fragmentation are devastating, as seen in the 30% drop in academic comprehension. We are raising a generation that struggles to engage with long-form texts, historical contexts, or multi-layered logical arguments. This is not merely an academic failure; it is a democratic crisis. When citizens lose the capacity to focus for more than 4.5 seconds, they become entirely incapable of processing nuance. Public thought becomes shallow, leaving individuals highly vulnerable to sensationalized clickbait, emotional disinformation, and hyper-simplistic political propaganda. Complex societal challenges cannot be explained in a 5-second video clip, and a society that cannot think deeply is a society that cannot govern itself.

In conclusion, fast entertainment is an addictive drug that is actively shrinking the intellectual capacity of our youth. We must treat this cognitive decline with the same urgency as a public health crisis. The solution requires a radical shift in both education and regulation. School systems worldwide must move away from the over-digitization of classrooms, removing digital screens and replacing them with mandatory hours of physical, long-form book reading. Furthermore, governments must protect children by legally banning infinite scroll algorithms and automated autoplay features for users under eighteen. We must protect our youth's capacity to focus, or watch the analytical foundations of human civilization disappear into seconds of digital distraction. Thank you.`,
    keyThemes: ['Fast Entertainment', 'Cognitive Vandalism', 'Delayed Gratification', 'Deep Literacy', 'Attention Fragmentation']
  }
];

import { ADDITIONAL_TOPICS } from './additionalTopics';
import { EXTENDED_TOPICS_26_30 } from './extendedTopics';

export const ALL_TOPICS_30: TopicData[] = [
  ...TOPICS_DATA,
  ...ADDITIONAL_TOPICS,
  ...EXTENDED_TOPICS_26_30
];
