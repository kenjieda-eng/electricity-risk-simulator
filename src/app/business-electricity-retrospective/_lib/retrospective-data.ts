export const MONTH_LABELS = ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"] as const;

export const RETROSPECTIVE_YEARS = [2019, 2020, 2021, 2022, 2023, 2024, 2025] as const;

export const CATEGORY_KEYS = [
  "extra-high-voltage",
  "high-voltage",
  "low-voltage-power",
  "low-voltage-lighting",
] as const;

export type CategoryKey = (typeof CATEGORY_KEYS)[number];
export type RetrospectiveYear = (typeof RETROSPECTIVE_YEARS)[number];

type CategoryMeta = {
  key: CategoryKey;
  label: string;
  shortLabel: string;
  users: string;
  columnIndex: 0 | 1 | 2 | 3;
};

const CATEGORY_META: Record<CategoryKey, CategoryMeta> = {
  "extra-high-voltage": {
    key: "extra-high-voltage",
    label: "特別高圧",
    shortLabel: "特別高圧",
    users: "大規模工場、データセンター、再開発拠点、自治体の大型設備など",
    columnIndex: 0,
  },
  "high-voltage": {
    key: "high-voltage",
    label: "高圧",
    shortLabel: "高圧",
    users: "中規模工場、病院、学校、物流施設、商業施設、オフィスビルなど",
    columnIndex: 1,
  },
  "low-voltage-power": {
    key: "low-voltage-power",
    label: "低圧電力",
    shortLabel: "低圧電力",
    users: "動力設備を使う店舗・作業場・小規模工場・冷蔵冷凍設備のある事業者など",
    columnIndex: 3,
  },
  "low-voltage-lighting": {
    key: "low-voltage-lighting",
    label: "低圧電灯",
    shortLabel: "低圧電灯",
    users: "照明・コンセント用途が中心の店舗、小規模オフィス、サービス拠点など",
    columnIndex: 2,
  },
};

type MonthlyRow = readonly [number, number, number, number];
type YearlyDataset = Record<RetrospectiveYear, readonly MonthlyRow[]>;

const YEARLY_DATASET: YearlyDataset = {
  2019: [
    [12.6, 16.4, 22.6, 23.6],
    [13.0, 16.5, 22.8, 24.3],
    [12.8, 16.6, 22.7, 25.2],
    [12.7, 16.7, 22.5, 25.5],
    [12.3, 16.3, 22.0, 27.2],
    [12.1, 16.0, 22.0, 27.5],
    [12.5, 15.8, 22.3, 25.3],
    [12.4, 15.6, 22.1, 23.1],
    [12.2, 15.4, 22.0, 23.3],
    [11.6, 15.4, 21.7, 26.7],
    [11.7, 15.1, 21.3, 27.1],
    [11.6, 15.0, 21.2, 24.3],
  ],
  2020: [
    [11.59689, 15.05907, 21.44141, 23.33562],
    [11.52701, 14.92423, 21.40224, 24.10054],
    [11.49169, 15.09892, 21.4018, 25.15319],
    [11.68643, 15.41151, 21.53155, 26.09599],
    [11.69777, 15.82179, 21.79822, 27.79532],
    [11.60593, 15.18385, 22.18, 27.71624],
    [11.7582, 15.02283, 22.15219, 26.01676],
    [11.49271, 14.71423, 22.06617, 23.47337],
    [11.17056, 14.32724, 21.74636, 22.8237],
    [10.26079, 13.99231, 20.95819, 26.40765],
    [9.952043, 13.59679, 20.12864, 27.00812],
    [9.74004, 13.1468, 19.70699, 24.91541],
  ],
  2021: [
    [9.646761, 13.03867, 19.45762, 20.01056],
    [9.725391, 12.89822, 19.42905, 21.41659],
    [9.769137, 13.21202, 19.60711, 23.26459],
    [10.0461, 13.67085, 19.99482, 25.29424],
    [10.41201, 14.22556, 20.76116, 26.70598],
    [10.53776, 14.05022, 21.53248, 27.50291],
    [11.06963, 14.30518, 21.83409, 25.05547],
    [11.19998, 14.39637, 22.07165, 23.16411],
    [11.59427, 14.94917, 22.36642, 25.52366],
    [11.55434, 15.14645, 22.63175, 27.80797],
    [12.0215, 15.48264, 22.52315, 29.06497],
    [12.37911, 15.64394, 22.61123, 27.39255],
  ],
  2022: [
    [12.81592, 15.79904, 22.99882, 23.75563],
    [13.80314, 16.66576, 23.90161, 25.03292],
    [14.48632, 17.63385, 24.59326, 27.28063],
    [15.08708, 18.45015, 24.91716, 29.65583],
    [15.33672, 19.01453, 25.49582, 31.78751],
    [15.46441, 18.88125, 26.24696, 32.13162],
    [16.73036, 19.97943, 27.12856, 28.99215],
    [17.71479, 21.05655, 27.9327, 28.85352],
    [19.49945, 22.58069, 28.59377, 30.32305],
    [20.13789, 24.18994, 29.25057, 33.6673],
    [21.53389, 25.64257, 29.76907, 36.80172],
    [23.11012, 27.03003, 31.23845, 35.74464],
  ],
  2023: [
    [23.88089, 27.48558, 31.25489, 31.5452],
    [24.16928, 24.69981, 25.60497, 26.1427],
    [22.91141, 24.05292, 24.89027, 27.85262],
    [24.20178, 24.79219, 24.68128, 29.83594],
    [23.05446, 24.77339, 24.95428, 30.53298],
    [21.50496, 22.96874, 25.2279, 30.28612],
    [20.72707, 21.69218, 25.06436, 26.50581],
    [19.74102, 20.53096, 24.27731, 23.5968],
    [19.01652, 19.98224, 23.68067, 23.73479],
    [18.2257, 21.46739, 26.1983, 30.13545],
    [18.41238, 21.69863, 25.63728, 33.03082],
    [18.42202, 21.35238, 25.03151, 30.03661],
  ],
  2024: [
    [18.4783, 21.01045, 24.66647, 26.36486],
    [18.53248, 20.89386, 24.87948, 27.08811],
    [18.40722, 21.17356, 25.10183, 28.02799],
    [18.38915, 21.347, 25.05291, 30.2222],
    [17.97632, 21.41819, 25.75383, 32.02995],
    [17.74392, 21.6872, 27.62523, 32.66048],
    [17.97487, 22.12128, 29.04209, 31.67946],
    [17.97011, 21.88944, 28.72961, 28.39984],
    [18.00377, 20.27322, 25.39195, 26.08041],
    [17.94562, 20.86378, 25.60914, 28.93983],
    [18.50322, 22.03036, 26.60893, 33.27149],
    [18.61533, 22.91959, 28.199, 34.01213],
  ],
  2025: [
    [18.32817, 22.24823, 27.29205, 28.63389],
    [18.28577, 20.9526, 25.2326, 27.41508],
    [17.85685, 21.0486, 25.47846, 28.39439],
    [18.04825, 21.98799, 27.03588, 32.32907],
    [17.66129, 22.62949, 28.98468, 34.70209],
    [17.289, 21.74257, 28.84359, 34.57768],
    [17.17733, 21.11848, 27.87938, 29.1404],
    [17.19681, 19.90975, 25.94834, 25.64791],
    [16.90795, 19.71978, 25.73976, 26.22529],
    [16.56632, 20.11444, 26.15672, 29.29041],
    [16.78427, 21.32138, 27.32027, 33.58157],
    [16.86709, 20.94959, 26.77882, 32.39592],
  ],
};

export type RetrospectivePageData = {
  slug: string;
  year: RetrospectiveYear;
  category: CategoryMeta;
  pageTitle: string;
  pageDescription: string;
  monthlyRows: Array<{ month: string; shortMonth: string; value: number }>;
  avg: number;
  maxValue: number;
  maxMonths: string[];
  minValue: number;
  minMonths: string[];
  range: number;
  startValue: number;
  endValue: number;
  startEndDiff: number;
  quarterlyAverages: Array<{ label: string; value: number }>;
  monthlyDigest: string[];
  previousYearComparison: { year: number; avg: number; diff: number } | null;
  nextYearComparison: { year: number; avg: number; diff: number } | null;
};

const round1 = (value: number) => Math.round(value * 10) / 10;

const formatSigned = (value: number) => (value > 0 ? `+${value.toFixed(1)}` : value.toFixed(1));

const getAveragesByCategory = (category: CategoryMeta) => {
  const output = new Map<number, number>();
  for (const year of RETROSPECTIVE_YEARS) {
    const rows = YEARLY_DATASET[year];
    const values = rows.map((row) => round1(row[category.columnIndex]));
    const avg = round1(values.reduce((sum, value) => sum + value, 0) / values.length);
    output.set(year, avg);
  }
  return output;
};

export const getAllRetrospectiveSlugs = () =>
  RETROSPECTIVE_YEARS.flatMap((year) => CATEGORY_KEYS.map((category) => `${year}-${category}`));

export const getRetrospectivePageData = (slug: string): RetrospectivePageData | null => {
  const match = slug.match(/^(\d{4})-(extra-high-voltage|high-voltage|low-voltage-power|low-voltage-lighting)$/);
  if (!match) {
    return null;
  }

  const year = Number(match[1]) as RetrospectiveYear;
  const categoryKey = match[2] as CategoryKey;

  if (!RETROSPECTIVE_YEARS.includes(year) || !CATEGORY_KEYS.includes(categoryKey)) {
    return null;
  }

  const category = CATEGORY_META[categoryKey];
  const rows = YEARLY_DATASET[year];
  const monthlyRows = rows.map((row, idx) => ({
    month: `${year}年${MONTH_LABELS[idx]}`,
    shortMonth: MONTH_LABELS[idx],
    value: round1(row[category.columnIndex]),
  }));

  const values = monthlyRows.map((item) => item.value);
  const avg = round1(values.reduce((sum, value) => sum + value, 0) / values.length);
  const maxValue = Math.max(...values);
  const minValue = Math.min(...values);
  const maxMonths = monthlyRows.filter((item) => item.value === maxValue).map((item) => item.shortMonth);
  const minMonths = monthlyRows.filter((item) => item.value === minValue).map((item) => item.shortMonth);
  const range = round1(maxValue - minValue);
  const startValue = values[0];
  const endValue = values[values.length - 1];
  const startEndDiff = round1(endValue - startValue);

  const quarterIndices = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [9, 10, 11],
  ];
  const quarterlyAverages = quarterIndices.map((indexes, idx) => ({
    label: `Q${idx + 1}`,
    value: round1(indexes.reduce((sum, monthIndex) => sum + values[monthIndex], 0) / indexes.length),
  }));

  const monthlyDigest = monthlyRows.map((item, idx) => {
    if (idx === 0) {
      return `${item.shortMonth}：${item.value.toFixed(1)}円/kWhでスタート`;
    }
    const prev = monthlyRows[idx - 1].value;
    const diff = round1(item.value - prev);
    const direction = diff > 0 ? "上昇" : diff < 0 ? "低下" : "横ばい";
    return `${item.shortMonth}：${item.value.toFixed(1)}円/kWh（前月比 ${formatSigned(diff)}、${direction}）`;
  });

  const averagesByYear = getAveragesByCategory(category);
  const previousAvg = averagesByYear.get(year - 1);
  const nextAvg = averagesByYear.get(year + 1);
  const previousYearComparison =
    previousAvg === undefined ? null : { year: year - 1, avg: previousAvg, diff: round1(avg - previousAvg) };
  const nextYearComparison =
    nextAvg === undefined ? null : { year: year + 1, avg: nextAvg, diff: round1(nextAvg - avg) };

  const pageTitle = `【${year}年】${category.label}の電気料金を振り返る｜月別のkWh単価・グラフ・前後年比較`;
  const pageDescription = `${year}年の${category.label}の電気料金を月別のkWh単価で整理。小数点第一位で四捨五入した表とグラフ、年間平均、高値安値、前後年比較を確認できます。`;

  return {
    slug,
    year,
    category,
    pageTitle,
    pageDescription,
    monthlyRows,
    avg,
    maxValue,
    maxMonths,
    minValue,
    minMonths,
    range,
    startValue,
    endValue,
    startEndDiff,
    quarterlyAverages,
    monthlyDigest,
    previousYearComparison,
    nextYearComparison,
  };
};

export type YearContext = {
  headline: string;
  backgroundFactors: string[];
  q1Context: string;
  q2Context: string;
  q3Context: string;
  q4Context: string;
  practicalNotes: string[];
  jepxContext: string;  // JEPX market context for that year
};

export const YEAR_CONTEXTS: Record<RetrospectiveYear, YearContext> = {
  2019: {
    headline: "コロナ前の安定期 ― 燃料安と需要均衡のもとで料金が落ち着いていた基準年",
    backgroundFactors: [
      "原油価格は60ドル/バレル前後で安定推移",
      "LNGスポット価格は4〜6ドル/MMBtu台の低水準",
      "国内電力需要は横ばい、省エネの進展で微減傾向",
      "再エネ賦課金は2.95円/kWhで前年並み",
      "2016年の電力全面自由化から3年が経過し、新電力のシェア拡大が続く",
    ],
    q1Context: "年初は冬場の需要増を反映して単価がやや高めに推移。2月が年間ピークとなった区分も多い。燃料費調整額は前年の燃料安を反映して安定しており、大きな変動要因はなかった。",
    q2Context: "春先から気温上昇に伴い暖房需要が落ち着き、単価は緩やかに低下。新電力の競争が活発で、法人向けの料金メニュー提案が増えた時期。燃調費もほぼ横ばいで推移した。",
    q3Context: "夏場の冷房需要で7月にやや反発したが、前年と比較して大きな変動はなかった。原油・LNG価格が安定していたため、燃調費の変動も小さく、請求額は読みやすい状態が続いた。",
    q4Context: "秋以降は気温低下に伴う暖房需要の増加はあったが、燃料価格の安定が続き、単価は年間最安水準に低下。10〜12月は翌年の契約更新を見据えた見積比較の時期だった。",
    practicalNotes: [
      "2019年はコロナ前の「正常時」の最後の年であり、その後の料金水準を比較する際の基準点として最も適切",
      "年間を通じて単価の変動幅が小さく（特別高圧で1.4円/kWh程度）、予算策定がしやすい環境だった",
      "この年の水準に「戻る」ことを前提とした予算は2026年時点では非現実的であり、比較基準としてのみ使うべき",
    ],
    jepxContext: "JEPXスポット市場は年度平均7.93円/kWhと安定推移。50円超のスパイクは年間を通じてほぼ発生せず、市場連動プランにとっても穏やかな年だった。",
  },
  2020: {
    headline: "コロナ禍で需要減退、燃料安もあり年後半に向けて単価が低下した年",
    backgroundFactors: [
      "新型コロナウイルスの世界的流行による経済活動の縮小",
      "原油価格の歴史的急落（WTI先物が一時マイナス価格）",
      "LNG価格もスポットで2ドル/MMBtu台まで低下",
      "国内の電力需要減少により卸市場価格が低位安定",
      "緊急事態宣言（4月〜5月）による商業・オフィス需要の急減",
    ],
    q1Context: "年初はコロナ前の水準を維持していたが、2月下旬から感染拡大の報道が増え始め、3月には経済活動の減速懸念が広がった。ただし燃料費調整額への反映はタイムラグがあり、料金への影響は限定的だった。",
    q2Context: "4月に緊急事態宣言が発出され、商業施設やオフィスの電力需要が急減。一方で原油・LNG価格の急落が燃調費に反映され始め、単価は低下傾向に入った。",
    q3Context: "経済活動は段階的に再開されたが、需要回復は緩やかだった。燃料安の反映が進み、単価はさらに低下。猛暑の影響で家庭用需要は増えたが、業務用は低調が続いた。",
    q4Context: "秋以降は経済再開の動きが広がったが、燃料安のタイムラグ反映が続き、単価は年内最安水準に到達。12月時点で翌年の回復を見込む向きもあったが、コロナ第3波で先行き不透明感が残った。",
    practicalNotes: [
      "2020年は見かけ上の「安い年」だが、コロナ禍という異常値であり、この年を基準に「以前は安かった」と判断するのは危険",
      "年後半の単価低下は需要減と燃料安の両方が重なった結果であり、どちらか一方では説明できない",
      "この年の単価水準を契約更新時の比較基準にする場合は、コロナ禍の特殊性を注記として明記する必要がある",
    ],
    jepxContext: "JEPXスポット市場は年度平均11.21円/kWh。1月の寒波で史上最高値251円/kWhを記録し、スパイクが749コマ(4.3%)発生。日次ボラティリティ20.79円は歴代最悪。",
  },
  2021: {
    headline: "コロナ回復で需要増、年末にかけてLNG価格急騰が始まった転換の年",
    backgroundFactors: [
      "ワクチン接種拡大に伴う世界経済の回復と電力需要の増加",
      "2021年1月のJEPX高騰（最大251円/kWh）による新電力経営圧迫",
      "年後半からのLNG・石炭価格の上昇開始（欧州ガス需給逼迫）",
      "脱炭素政策の加速（2050年カーボンニュートラル宣言の具体化）",
      "中国の電力不足による世界的なエネルギー需給引き締め",
    ],
    q1Context: "1月にJEPXスポット価格が異常高騰し、市場連動プランの需要家が大きな打撃を受けた。新電力の経営悪化が顕在化し始めた。ただし規制料金や固定プランへの影響は限定的だった。",
    q2Context: "JEPX高騰は収束したが、世界的な経済回復に伴いLNG・石炭の国際価格がじわじわ上昇を開始。燃調費はまだ低水準だったが、先行指標に変化の兆しが見え始めた。",
    q3Context: "欧州でガス在庫不足が深刻化し、LNGスポット価格が急騰。アジアLNGも連れ高となり、日本の燃料調達コストが上昇し始めた。電力卸市場も徐々に上昇基調に入った。",
    q4Context: "LNG価格は年末にかけて20ドル/MMBtu超えの高水準に到達。燃調費のタイムラグ反映により年末の請求額が上昇し始めた。翌2022年に向けた不安感が広がった。",
    practicalNotes: [
      "2021年は「変化の始まり」の年であり、年前半と後半で市場環境が大きく異なる。年平均だけで判断すると転換点を見落としやすい",
      "1月のJEPX高騰は市場連動プランのリスクを顕在化させた最初の大きな事例であり、この教訓がその後のプラン選択に影響した",
      "年後半からの燃料価格上昇は、翌2022年の急騰の「助走期間」だったことを認識しておくべき",
    ],
    jepxContext: "JEPX年度平均13.46円/kWh。年後半にLNG高を反映して上昇基調に入り、スパイク(50円超)が193コマ(1.1%)発生。",
  },
  2022: {
    headline: "ウクライナ侵攻で燃料・電力価格が歴史的急騰、法人電気代が過去最高水準に達した年",
    backgroundFactors: [
      "2月のロシアによるウクライナ侵攻で国際エネルギー市場が混乱",
      "欧州のロシア産ガス依存脱却によるLNG争奪戦、スポットLNGが70ドル/MMBtu超に",
      "円安の進行（1ドル=115円→150円）が輸入燃料コストを一段と押し上げ",
      "JEPX卸市場が連日高騰、特に夏場と冬場に高値持続",
      "新電力の大量撤退・契約解除通知、最終保障供給への移行急増",
      "10月に電気・ガス料金激変緩和措置の検討が始まる",
    ],
    q1Context: "1月時点では前年からの上昇トレンドが続いていたが、2月24日のロシアによるウクライナ侵攻で状況が一変。燃料市場が混乱し、3月にかけてLNG・石炭・原油の全てが急騰。ただし燃調費への反映は3〜6ヶ月のタイムラグがあり、Q1の請求額への影響はまだ限定的だった。",
    q2Context: "燃料高騰の燃調費反映が始まり、請求単価が月ごとに上昇。円安も進行し（4月: 125円→6月: 135円）、輸入燃料コストが二重に膨らんだ。新電力の経営悪化が加速し、契約解除通知が相次いだ。",
    q3Context: "猛暑による電力需要増加と燃料高が重なり、卸市場は連日の高値。8月には多くの法人で月額電気代が前年同月比50〜100%増に。市場連動プランの需要家は「青天井」状態を経験した。",
    q4Context: "11〜12月は暖房需要の増加とLNG価格の高止まりで単価がさらに上昇し、多くの区分で年間最高値を記録。政府が電気・ガス料金激変緩和措置を発表し、翌年1月使用分からの適用を決定。年末の着地水準は、翌年の予算策定に大きな衝撃を与えた。",
    practicalNotes: [
      "2022年は法人電気代の「歴史的転換点」であり、この年以前と以後では料金水準の基準線が根本的に変わった",
      "燃料費・為替・卸市場の三重苦が同時に来た年であり、どれか一つの要因では上昇幅を説明しきれない",
      "新電力の撤退ラッシュは「安い=良い」ではなく「供給安定性」も比較軸に入れる教訓を残した",
      "この年の最高値月を予算の「ストレスシナリオ」として保存しておくことが、今後のリスク管理に有用",
    ],
    jepxContext: "JEPX年度平均20.41円/kWhで歴代最高値。スパイク282コマ(1.6%)。東京エリアは23.50円と全国最高、九州は14.42円と最安で差が9.08円に拡大。",
  },
  2023: {
    headline: "政府補助で見かけ上は沈静化したが、補助を除いた実力値は依然として高止まりの年",
    backgroundFactors: [
      "電気・ガス料金激変緩和措置が1月使用分から適用（低圧7円/kWh、高圧3.5円/kWh）",
      "LNG価格は年前半にかけて急落（スポット10ドル/MMBtu台へ）",
      "円安の定着（1ドル=130〜150円）が燃料コスト低下を相殺",
      "規制料金の値上げ認可（6月、大手7社）",
      "再エネ賦課金が大幅減（1.40→0円台）で見かけの料金を押し下げ",
    ],
    q1Context: "1月使用分から補助金が適用されたが、前年秋〜冬の燃料高騰の燃調費反映がまだ残っており、1月は年内最高値。2月以降は補助効果とLNG価格下落の燃調費反映が重なり、急速に低下した。",
    q2Context: "補助の継続とLNG安の反映で単価は低下トレンドが続いた。6月に大手電力の規制料金値上げが認可されたが、高圧・特別高圧は自由化料金のため直接の影響は限定的。ただし「電気代が上がった」という報道が企業の危機意識を喚起した。",
    q3Context: "補助金の段階的縮小が議論され始め、秋以降の見通しに不透明感。LNG安が底打ちし、燃調費の低下幅が縮小。猛暑による需要増はあったが、前年ほどの卸市場高騰には至らなかった。",
    q4Context: "補助金の延長が決定されたものの、補助額は段階的に縮小。燃調費は底を打ち、秋以降やや上昇に転じた。年末時点で「補助なしの実力値」を試算すると、2019年比で依然50〜70%高い水準だった。",
    practicalNotes: [
      "2023年の「料金低下」は補助金効果が大きく、補助を除いた実力値は高止まりしていたことを正確に認識する必要がある",
      "年間平均で前年より下がっていても、「元の水準に戻った」わけではない。比較する際は2019年水準も並べて提示すべき",
      "再エネ賦課金の大幅減は一時的要因（回避可能費用の増加）であり、翌年以降の再上昇リスクに注意が必要",
    ],
    jepxContext: "JEPX年度平均10.74円/kWhに急落（前年比-47%）。スパイクは1コマのみ。ボラティリティも2.50に低下し安定化。",
  },
  2024: {
    headline: "容量拠出金制度開始・補助金終了で新たなコスト要因が加わり、高止まりが定着した年",
    backgroundFactors: [
      "4月から容量拠出金制度が開始、高圧・特別高圧の契約単価に上乗せ",
      "電気・ガス料金激変緩和措置が段階的に縮小・10月に終了",
      "再エネ賦課金が3.49円/kWhに大幅増（前年度0円台→3.49円）",
      "LNG価格は10〜15ドル/MMBtu台で安定推移",
      "円安が1ドル=150円前後で定着",
    ],
    q1Context: "補助金はまだ継続していたが縮小中。容量拠出金の4月開始を控え、電力会社からの新料金メニュー提示が活発化。法人は新制度のコスト影響を見極める時期だった。",
    q2Context: "4月に容量拠出金が開始。再エネ賦課金も大幅増加。この2つの制度変更が単価に上乗せされ、LNG安にもかかわらず請求額は下がりにくくなった。補助金は5月使用分で一旦終了。",
    q3Context: "補助なしの実力値が初めて通年で見える期間に突入。猛暑による電力需要増加で卸市場は一時上昇。9月以降は気温低下で需要が落ち着き、単価もやや低下。",
    q4Context: "10月に電気・ガス料金激変緩和措置が正式終了。補助なしの請求額が定着し、「高止まり」が常態化。年末にかけて暖房需要増加で再び上昇基調に入った。",
    practicalNotes: [
      "2024年は「新しいコスト構造」が定着した年。容量拠出金と再エネ賦課金増が恒常的に上乗せされ、燃料安でも料金が下がりにくい構造になった",
      "補助金終了後の実力値を基準にした予算策定が初めて求められた年であり、過去の補助込み水準との混同に注意",
      "容量拠出金は今後も継続・増加する可能性があり、中期経営計画では制度コスト増を織り込む必要がある",
    ],
    jepxContext: "JEPX年度平均12.29円/kWh。スパイク発生ゼロ。ボラティリティ2.71と安定推移。ただし夏場(7-9月)は14円台に上昇。",
  },
  2025: {
    headline: "補助復活で一時的に下がったが実力値は高止まり、ホルムズ海峡問題で新たなリスクが浮上した年",
    backgroundFactors: [
      "電気・ガス料金支援が1月使用分から再開（低圧2.5円/kWh、高圧1.3円/kWh）",
      "3月にホルムズ海峡での緊張が高まり、LNG輸送リスクが顕在化",
      "再エネ賦課金が3.49円/kWhで据え置き",
      "LNG価格は年前半10〜12ドル/MMBtu、後半は地政学リスクでやや上昇",
      "円安は1ドル=148〜155円で推移",
    ],
    q1Context: "1月使用分から補助が再開され、見かけ上の単価は低下。ただし補助なし実力値は前年末とほぼ同水準。3月のホルムズ海峡問題でLNG調達リスクが意識され始めた。",
    q2Context: "補助は3月使用分で縮小。地政学リスクへの警戒は続いたが、LNG市場への実質的影響は限定的。再エネ賦課金・容量拠出金のコストが引き続き上乗せ。",
    q3Context: "補助なしの期間に入り、実力値ベースの単価が再び上昇。猛暑による需要増も加わり、卸市場は夏場に一時上昇。秋に向けて落ち着いたが、2019年比では依然50%以上高い水準。",
    q4Context: "秋以降は気温低下で一旦落ち着いたが、11月から暖房需要増加で再び上昇。年末にかけてLNG価格も季節要因で上昇。12月着地は翌年予算の重要な参照点となった。",
    practicalNotes: [
      "2025年も「補助ありの見え方」と「実力値」を分けて見ることが引き続き重要",
      "ホルムズ海峡問題は「次のウクライナショック」になり得るリスク要因として、予算のストレスシナリオに織り込む価値がある",
      "2019年→2025年の6年間で恒常的に50〜70%高い水準が定着しており、「元に戻る」前提での予算策定は非現実的",
    ],
    jepxContext: "JEPX年度平均11.06円/kWh。スパイク発生ゼロ。ボラティリティ2.17と低水準を維持。約定量は1,624万kWh/コマに成長。",
  },
};
