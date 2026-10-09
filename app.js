const scenarios = {
  tea: {
    name: "茶饮门店",
    copy: "共 6 期，每期代表 2 个月。当前按每天 200 单、每单 1.3 杯、每月 30 天估算，即每月约 7,800 杯基准需求；每期按覆盖月份合计结算。",
    roundNames: ["第1期（1-2月）", "第2期（3-4月）", "第3期（5-6月）", "第4期（7-8月）", "第5期（9-10月）", "第6期（11-12月）"],
    assumptions: {
      marketSize: 7800,
      marketSizeMode: "baselineSales",
      decisionPeriodMonths: 2,
      growth: 0,
      referencePrice: 10,
      priceElasticity: 1.5,
      adEffect: 0.9,
      channelEffect: 1.1,
      productEffect: 0.85,
      unitCost: 3,
      fixedCost: 10000,
      takeawayShare: 40,
      dineInShare: 40,
      pickupShare: 20,
      takeawayCommission: 20,
      adOrdersPer1000: 100,
      repurchaseRate: 30,
      dailyOrders: 200,
      cupsPerOrder: 1.3,
      daysPerMonth: 30,
      marketingBudgetRate: 20,
      baselineDemandIndex: 0.84,
      seasonality: [0.88, 0.88, 1, 1, 1, 1.3, 1.3, 1.3, 1, 1.1, 1, 0.8],
      cheapCompetitorPrice: 6,
      premiumCompetitorPrice: 15,
      competitorSalesLow: 5000,
      competitorSalesHigh: 8000,
      strongBrandSales: 10000,
      competitors: [
        {
          id: "value",
          name: "低价竞品",
          positioning: "低价走量",
          baseSales: 6500,
          price: 6,
          unitCost: 2.5,
          fixedCost: 8000,
          brand: 42,
          adBudget: 2500,
          channelBudget: 4500,
          productBudget: 800,
          promoDiscount: 6,
          takeawayShare: 55,
        },
        {
          id: "premium",
          name: "高价竞品",
          positioning: "品质溢价",
          baseSales: 6500,
          price: 15,
          unitCost: 5.5,
          fixedCost: 12000,
          brand: 62,
          adBudget: 5500,
          channelBudget: 3500,
          productBudget: 3000,
          promoDiscount: 3,
          takeawayShare: 35,
        },
        {
          id: "leader",
          name: "强品牌",
          positioning: "品牌规模",
          baseSales: 10500,
          price: 11,
          unitCost: 4.2,
          fixedCost: 18000,
          brand: 75,
          adBudget: 8000,
          channelBudget: 7000,
          productBudget: 4500,
          promoDiscount: 5,
          takeawayShare: 45,
        },
      ],
      startingBrand: 32,
      startingCash: 60000,
      competitorPower: 52,
      maxRounds: 6,
      maxAdBudget: 15600,
      maxChannelBudget: 15600,
      maxProductBudget: 15600,
    },
    decisions: {
      price: 10,
      adBudget: 3000,
      channelBudget: 2500,
      productBudget: 1500,
      promoDiscount: 5,
    },
  },
  skincare: {
    name: "护肤品新品牌",
    copy: "消费者更重视品牌信任和产品体验，价格敏感度略低，产品改进对复购和品牌资产的影响更明显。",
    roundNames: ["上市准备期", "种草启动期", "首购转化期", "复购观察期", "达人放大期", "渠道筛选期", "口碑累积期", "年度收官期"],
    assumptions: {
      marketSize: 90000,
      marketSizeMode: "totalMarket",
      growth: 6,
      referencePrice: 129,
      priceElasticity: 0.9,
      adEffect: 1.35,
      channelEffect: 0.9,
      productEffect: 1.45,
      unitCost: 42,
      fixedCost: 0,
      startingBrand: 32,
      startingCash: 900000,
      competitorPower: 62,
      maxRounds: 8,
      maxAdBudget: 120000,
      maxChannelBudget: 90000,
      maxProductBudget: 70000,
    },
    decisions: {
      price: 129,
      adBudget: 85000,
      channelBudget: 45000,
      productBudget: 65000,
      promoDiscount: 10,
    },
  },
  coffee: {
    name: "连锁咖啡门店",
    copy: "区域门店增长依赖点位覆盖与复购习惯，促销可以快速拉动客流，但过度折扣会稀释利润。",
    roundNames: ["试营业期", "商圈渗透期", "会员增长期", "早高峰争夺期", "新品菜单期", "外卖优化期", "复购提升期", "年度收官期"],
    assumptions: {
      marketSize: 120000,
      marketSizeMode: "totalMarket",
      growth: 3,
      referencePrice: 22,
      priceElasticity: 1.1,
      adEffect: 0.8,
      channelEffect: 1.55,
      productEffect: 0.95,
      unitCost: 9.5,
      fixedCost: 0,
      startingBrand: 35,
      startingCash: 780000,
      competitorPower: 55,
      maxRounds: 8,
      maxAdBudget: 120000,
      maxChannelBudget: 90000,
      maxProductBudget: 70000,
    },
    decisions: {
      price: 22,
      adBudget: 35000,
      channelBudget: 70000,
      productBudget: 25000,
      promoDiscount: 12,
    },
  },
};

const dataNeeds = [
  "节假日细化：春节、五一、国庆等具体落在哪些月份，以及每个节日持续影响几天。",
  "竞争者细化：6 元低价竞品和 15 元高价竞品分别的距离、促销频率、外卖评分。",
  "促销细化：满减、第二杯半价、买一赠一分别对销量和毛利的影响。",
  "广告细化：新增订单中有多少会转化为复购，以及线上投放和线下活动是否不同。",
  "复购细化：复购顾客平均间隔几周、会员复购是否高于普通顾客。",
  "竞品策略：低价竞品、高价竞品、强品牌每期是否会主动降价、加投或上新。",
  "经营目标：优先追求月利润、市场排名、现金流、复购率，还是品牌资产。",
];

const defaultTeams = [
  { id: "team-a", name: "小组 A", price: 10, adBudget: 3000, channelBudget: 2500, productBudget: 1500, promoDiscount: 5, brand: 35, submitted: false },
  { id: "team-b", name: "小组 B", price: 9, adBudget: 4000, channelBudget: 3000, productBudget: 1000, promoDiscount: 8, brand: 35, submitted: false },
  { id: "team-c", name: "小组 C", price: 11, adBudget: 2500, channelBudget: 3500, productBudget: 2500, promoDiscount: 4, brand: 35, submitted: false },
  { id: "team-d", name: "小组 D", price: 10, adBudget: 3500, channelBudget: 2500, productBudget: 2000, promoDiscount: 6, brand: 35, submitted: false },
  { id: "team-e", name: "小组 E", price: 10.5, adBudget: 2500, channelBudget: 4000, productBudget: 1800, promoDiscount: 5, brand: 35, submitted: false },
  { id: "team-f", name: "小组 F", price: 9.5, adBudget: 4500, channelBudget: 2000, productBudget: 1500, promoDiscount: 7, brand: 35, submitted: false },
];

const state = {
  scenarioKey: "tea",
  assumptions: structuredClone(scenarios.tea.assumptions),
  decisions: structuredClone(scenarios.tea.decisions),
  localTeams: structuredClone(defaultTeams),
  history: [],
  selectedChart: "profit",
  simulationMode: "single",
  viewMode: "teacher",
  entryRole: "landing",
  selectedTeamId: "team-a",
};

const STORAGE_KEY = "marketing-simulation-state-v1";
const SAVE_VERSION = 1;

const els = {
  mainApp: document.querySelector("#mainApp"),
  entryScreen: document.querySelector("#entryScreen"),
  entryTeamSelect: document.querySelector("#entryTeamSelect"),
  enterTeacherButton: document.querySelector("#enterTeacherButton"),
  enterTeamButton: document.querySelector("#enterTeamButton"),
  enterPublicButton: document.querySelector("#enterPublicButton"),
  switchEntryButton: document.querySelector("#switchEntryButton"),
  scenarioSelect: document.querySelector("#scenarioSelect"),
  scenarioCopy: document.querySelector("#scenarioCopy"),
  roundNow: document.querySelector("#roundNow"),
  roundTotal: document.querySelector("#roundTotal"),
  roundTitle: document.querySelector("#roundTitle"),
  profitMetric: document.querySelector("#profitMetric"),
  profitDelta: document.querySelector("#profitDelta"),
  shareMetric: document.querySelector("#shareMetric"),
  shareDelta: document.querySelector("#shareDelta"),
  brandMetric: document.querySelector("#brandMetric"),
  brandDelta: document.querySelector("#brandDelta"),
  cashMetric: document.querySelector("#cashMetric"),
  cashDelta: document.querySelector("#cashDelta"),
  saveStatus: document.querySelector("#saveStatus"),
  exportStateButton: document.querySelector("#exportStateButton"),
  importStateButton: document.querySelector("#importStateButton"),
  importStateInput: document.querySelector("#importStateInput"),
  clearSavedStateButton: document.querySelector("#clearSavedStateButton"),
  budgetBadge: document.querySelector("#budgetBadge"),
  priceInput: document.querySelector("#priceInput"),
  adInput: document.querySelector("#adInput"),
  channelInput: document.querySelector("#channelInput"),
  productInput: document.querySelector("#productInput"),
  promoInput: document.querySelector("#promoInput"),
  priceOutput: document.querySelector("#priceOutput"),
  adOutput: document.querySelector("#adOutput"),
  channelOutput: document.querySelector("#channelOutput"),
  productOutput: document.querySelector("#productOutput"),
  promoOutput: document.querySelector("#promoOutput"),
  decisionSummary: document.querySelector("#decisionSummary"),
  coachReport: document.querySelector("#coachReport"),
  competitionTable: document.querySelector("#competitionTable"),
  teamEditor: document.querySelector("#teamEditor"),
  viewModeSelect: document.querySelector("#viewModeSelect"),
  teamViewSelector: document.querySelector("#teamViewSelector"),
  teamViewSelect: document.querySelector("#teamViewSelect"),
  addTeamButton: document.querySelector("#addTeamButton"),
  runTeamsButton: document.querySelector("#runTeamsButton"),
  forceTeamsButton: document.querySelector("#forceTeamsButton"),
  dataNeeds: document.querySelector("#dataNeeds"),
  chart: document.querySelector("#trendChart"),
  runButton: document.querySelector("#runButton"),
  undoButton: document.querySelector("#undoButton"),
  resetButton: document.querySelector("#resetButton"),
  decisionPanel: document.querySelector("#decisionForm"),
  assumptionsPanel: document.querySelector(".assumptions-panel"),
  dataNeedsPanel: document.querySelector("#dataNeeds")?.closest(".report-panel"),
  viewSwitcher: document.querySelector(".view-switcher"),
  applyAssumptions: document.querySelector("#applyAssumptions"),
  marketSizeInput: document.querySelector("#marketSizeInput"),
  growthInput: document.querySelector("#growthInput"),
  priceElasticityInput: document.querySelector("#priceElasticityInput"),
  adEffectInput: document.querySelector("#adEffectInput"),
  channelEffectInput: document.querySelector("#channelEffectInput"),
  unitCostInput: document.querySelector("#unitCostInput"),
  fixedCostInput: document.querySelector("#fixedCostInput"),
  marketingBudgetRateInput: document.querySelector("#marketingBudgetRateInput"),
  takeawayShareInput: document.querySelector("#takeawayShareInput"),
  dineInShareInput: document.querySelector("#dineInShareInput"),
  pickupShareInput: document.querySelector("#pickupShareInput"),
  takeawayCommissionInput: document.querySelector("#takeawayCommissionInput"),
  repurchaseRateInput: document.querySelector("#repurchaseRateInput"),
};

function money(value) {
  return new Intl.NumberFormat("zh-CN", {
    style: "currency",
    currency: "CNY",
    maximumFractionDigits: 0,
  }).format(value);
}

function number(value) {
  return new Intl.NumberFormat("zh-CN", { maximumFractionDigits: 0 }).format(value);
}

function percent(value) {
  return `${value.toFixed(1)}%`;
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function currentScenario() {
  return scenarios[state.scenarioKey];
}

function snapshotState() {
  return {
    version: SAVE_VERSION,
    savedAt: new Date().toISOString(),
    state: {
      scenarioKey: state.scenarioKey,
      assumptions: state.assumptions,
      decisions: state.decisions,
      localTeams: state.localTeams,
      history: state.history,
      selectedChart: state.selectedChart,
      simulationMode: state.simulationMode,
      viewMode: state.viewMode,
      entryRole: state.entryRole,
      selectedTeamId: state.selectedTeamId,
    },
  };
}

function applySnapshot(snapshot) {
  if (!snapshot?.state) throw new Error("存档文件格式不正确");
  const next = snapshot.state;
  if (!scenarios[next.scenarioKey]) throw new Error("存档中的场景不存在");

  state.scenarioKey = next.scenarioKey;
  state.assumptions = next.assumptions || structuredClone(scenarios[state.scenarioKey].assumptions);
  state.decisions = next.decisions || structuredClone(scenarios[state.scenarioKey].decisions);
  state.localTeams = Array.isArray(next.localTeams) && next.localTeams.length > 0 ? next.localTeams : structuredClone(defaultTeams);
  state.history = Array.isArray(next.history) ? next.history : [];
  state.selectedChart = next.selectedChart || "profit";
  state.simulationMode = next.simulationMode || "single";
  state.viewMode = next.viewMode || "teacher";
  state.entryRole = next.entryRole || "landing";
  state.selectedTeamId = next.selectedTeamId || state.localTeams[0]?.id || "";
}

function setSaveStatus(text) {
  if (els.saveStatus) els.saveStatus.textContent = text;
}

function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(snapshotState()));
    setSaveStatus(`已自动保存 ${new Date().toLocaleTimeString("zh-CN", { hour: "2-digit", minute: "2-digit" })}`);
  } catch (error) {
    setSaveStatus("自动保存失败");
  }
}

function loadSavedState() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return false;
  try {
    applySnapshot(JSON.parse(raw));
    setSaveStatus("已恢复本地存档");
    return true;
  } catch (error) {
    setSaveStatus("本地存档不可用");
    return false;
  }
}

function exportState() {
  const blob = new Blob([JSON.stringify(snapshotState(), null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  const date = new Date().toISOString().slice(0, 10);
  link.href = url;
  link.download = `营销模拟比赛-${date}.json`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
  setSaveStatus("已导出比赛文件");
}

function roleLabel() {
  if (state.entryRole === "teacher") return "老师端";
  if (state.entryRole === "team") {
    const team = state.localTeams.find((item) => item.id === state.selectedTeamId);
    return team ? `${team.name} 端` : "小组端";
  }
  if (state.entryRole === "public") return "公开看板";
  return "入口";
}

function enterRole(role) {
  state.entryRole = role;
  state.viewMode = role === "team" ? "team" : role === "public" ? "public" : "teacher";
  if (role === "team" && els.entryTeamSelect?.value) {
    state.selectedTeamId = els.entryTeamSelect.value;
  }
  if (role !== "teacher") {
    state.simulationMode = "localTeams";
  }
  renderAll();
  saveState();
}

function renderEntrance() {
  const onEntryScreen = state.entryRole === "landing";
  els.entryScreen?.classList.toggle("hidden", !onEntryScreen);
  els.mainApp?.classList.toggle("hidden", onEntryScreen);

  if (els.entryTeamSelect) {
    els.entryTeamSelect.innerHTML = state.localTeams.map((team) => `<option value="${team.id}">${team.name}</option>`).join("");
    if (!state.localTeams.some((team) => team.id === state.selectedTeamId)) {
      state.selectedTeamId = state.localTeams[0]?.id || "";
    }
    els.entryTeamSelect.value = state.selectedTeamId;
  }

  if (els.switchEntryButton) {
    els.switchEntryButton.textContent = `切换入口：${roleLabel()}`;
  }
}

function renderAccessControls() {
  const teacherMode = state.entryRole === "teacher";
  const publicMode = state.entryRole === "public";
  const managerButtons = [els.exportStateButton, els.importStateButton, els.clearSavedStateButton, els.undoButton, els.resetButton, els.runButton];
  managerButtons.forEach((button) => button?.classList.toggle("hidden", !teacherMode));
  els.decisionPanel?.classList.toggle("hidden", !teacherMode);
  els.assumptionsPanel?.classList.toggle("hidden", !teacherMode);
  els.dataNeedsPanel?.classList.toggle("hidden", !teacherMode);
  els.viewSwitcher?.classList.add("hidden");
  if (els.scenarioSelect) els.scenarioSelect.disabled = !teacherMode;
  if (publicMode) {
    els.teamViewSelector?.classList.add("hidden");
  }
}

function latestResult() {
  if (state.history.length === 0) {
    return {
      cumulativeProfit: 0,
      marketShare: 0,
      brand: state.assumptions.startingBrand,
      cash: state.assumptions.startingCash,
      profit: 0,
      units: 0,
      revenue: 0,
      roi: 0,
      nextMonthRepeatUnits: 0,
      competition: [],
      customerSatisfaction: 50,
      note: "提交第一期后生成诊断。",
      deltas: { profit: 0, share: 0, brand: 0, cash: 0 },
    };
  }
  return state.history[state.history.length - 1];
}

function companyProfit(units, effectivePrice, company, assumptions) {
  const revenue = units * effectivePrice;
  const variableCost = units * company.unitCost;
  const spend = company.adBudget + company.channelBudget + company.productBudget;
  const fixedCost = company.fixedCost * (assumptions.decisionPeriodMonths || 1);
  const platformCommission =
    revenue * ((company.takeawayShare ?? assumptions.takeawayShare ?? 0) / 100) * ((assumptions.takeawayCommission ?? 0) / 100);
  return {
    revenue,
    variableCost,
    spend,
    platformCommission,
    profit: revenue - variableCost - platformCommission - spend - fixedCost,
  };
}

function competitorStrategy(baseCompany, roundIndex, seasonalMultiplier) {
  const holidayMonth = periodIncludesMonth(roundIndex, [1, 2, 10]);
  const averageSeasonality = seasonalMultiplier / (state.assumptions.decisionPeriodMonths || 1);
  const summerMonth = averageSeasonality >= 1.25;
  const winterMonth = averageSeasonality <= 0.9;
  const strategy = { ...baseCompany };

  if (strategy.id === "value") {
    strategy.promoDiscount = holidayMonth || winterMonth ? 10 : summerMonth ? 5 : baseCompany.promoDiscount;
    strategy.adBudget = baseCompany.adBudget + (holidayMonth ? 1000 : 0);
  }

  if (strategy.id === "premium") {
    strategy.productBudget = baseCompany.productBudget + (summerMonth ? 1500 : 0);
    strategy.promoDiscount = holidayMonth ? 6 : baseCompany.promoDiscount;
  }

  if (strategy.id === "leader") {
    strategy.adBudget = baseCompany.adBudget + (summerMonth ? 2500 : holidayMonth ? 1500 : 0);
    strategy.channelBudget = baseCompany.channelBudget + (summerMonth ? 1500 : 0);
  }

  return strategy;
}

function companyScore(company, assumptions, seasonalMultiplier, repeatDemand = 0) {
  const effectivePrice = company.price * (1 - company.promoDiscount / 100);
  const baseSales = company.baseSales * seasonalMultiplier + repeatDemand;
  const priceScore = priceResponseScore(effectivePrice, assumptions);
  const brandScore = 0.65 + (company.brand || assumptions.startingBrand) / 100;
  const adScore = 1 + Math.log1p(company.adBudget / 5000) * 0.08;
  const channelScore = 1 + Math.log1p(company.channelBudget / 5000) * 0.05;
  const productScore = 1 + Math.log1p(company.productBudget / 4000) * 0.05;
  const promoScore = 1 + company.promoDiscount * 0.008;
  const adDrivenUnits = Math.round((company.adBudget / 1000) * assumptions.adOrdersPer1000 * assumptions.cupsPerOrder * assumptions.adEffect);
  const score = Math.max(1, baseSales * priceScore * brandScore * adScore * channelScore * productScore * promoScore + adDrivenUnits);

  return {
    score,
    effectivePrice,
    adDrivenUnits,
    baseSales,
  };
}

function simulateCompetition(playerCompany, assumptions, roundIndex, seasonalMultiplier, repeatDemand) {
  const competitors = (assumptions.competitors || []).map((company) => competitorStrategy(company, roundIndex, seasonalMultiplier));
  const companies = [playerCompany, ...competitors];
  const scored = companies.map((company) => ({ company, ...companyScore(company, assumptions, seasonalMultiplier, company.isPlayer ? repeatDemand : 0) }));
  const totalScore = scored.reduce((sum, item) => sum + item.score, 0);
  const baseMarketPool =
    (assumptions.marketSize + competitors.reduce((sum, company) => sum + company.baseSales, 0)) * seasonalMultiplier + repeatDemand;
  const adMarketLift = scored.reduce((sum, item) => sum + item.adDrivenUnits, 0);
  const marketPool = baseMarketPool + adMarketLift;
  const previous = latestResult();

  const results = scored
    .map((item) => {
      const units = Math.round((marketPool * item.score) / totalScore);
      const financials = companyProfit(units, item.effectivePrice, item.company, assumptions);
      const previousCompany = previous.competition?.find((company) => company.id === item.company.id);
      return {
        id: item.company.id,
        name: item.company.name,
        positioning: item.company.positioning,
        isPlayer: item.company.isPlayer,
        price: item.company.price,
        effectivePrice: item.effectivePrice,
        promoDiscount: item.company.promoDiscount,
        brand: item.company.brand,
        units,
        share: marketPool > 0 ? (units / marketPool) * 100 : 0,
        revenue: financials.revenue,
        profit: financials.profit,
        cumulativeProfit: (previousCompany?.cumulativeProfit || 0) + financials.profit,
        adBudget: item.company.adBudget,
        adDrivenUnits: item.adDrivenUnits,
      };
    })
    .sort((a, b) => b.units - a.units)
    .map((company, index) => ({ ...company, rank: index + 1 }));

  return {
    marketPool,
    companies: results,
    player: results.find((company) => company.isPlayer),
  };
}

function simulateTeamCompetition(teams, assumptions, roundIndex, seasonalMultiplier) {
  const previous = latestResult();
  const companies = teams.map((team) => {
    const previousCompany = previous.competition?.find((company) => company.id === team.id);
    return {
      ...team,
      positioning: "学生小组",
      isLocalTeam: true,
      baseSales: assumptions.marketSize,
      unitCost: assumptions.unitCost,
      fixedCost: assumptions.fixedCost,
      takeawayShare: assumptions.takeawayShare,
      brand: previousCompany?.brand || team.brand || assumptions.startingBrand,
      repeatDemand: previousCompany?.nextMonthRepeatUnits || 0,
    };
  });
  const scored = companies.map((company) => ({
    company,
    ...companyScore(company, assumptions, seasonalMultiplier, company.repeatDemand),
  }));
  const totalScore = scored.reduce((sum, item) => sum + item.score, 0);
  const baseMarketPool =
    companies.reduce((sum, company) => sum + company.baseSales, 0) * seasonalMultiplier +
    companies.reduce((sum, company) => sum + company.repeatDemand, 0);
  const adMarketLift = scored.reduce((sum, item) => sum + item.adDrivenUnits, 0);
  const marketPool = baseMarketPool + adMarketLift;

  return scored
    .map((item) => {
      const units = Math.round((marketPool * item.score) / totalScore);
      const financials = companyProfit(units, item.effectivePrice, item.company, assumptions);
      const previousCompany = previous.competition?.find((company) => company.id === item.company.id);
      const brandGain =
        Math.log1p(item.company.adBudget / 20000) * 2.4 +
        Math.log1p(item.company.productBudget / 18000) * 2.1 -
        Math.max(0, item.company.promoDiscount - 15) * 0.5 -
        Math.max(0, item.company.price - assumptions.referencePrice) * 0.22;
      const brand = clamp((previousCompany?.brand || item.company.brand) * 0.97 + brandGain + 1.1, 10, 95);
      return {
        id: item.company.id,
        name: item.company.name,
        positioning: item.company.positioning,
        isLocalTeam: true,
        price: item.company.price,
        effectivePrice: item.effectivePrice,
        promoDiscount: item.company.promoDiscount,
        brand,
        units,
        share: marketPool > 0 ? (units / marketPool) * 100 : 0,
        revenue: financials.revenue,
        profit: financials.profit,
        cumulativeProfit: (previousCompany?.cumulativeProfit || 0) + financials.profit,
        adBudget: item.company.adBudget,
        adDrivenUnits: item.adDrivenUnits,
        nextMonthRepeatUnits: Math.round(item.adDrivenUnits * (assumptions.repurchaseRate / 100)),
      };
    })
    .sort((a, b) => b.cumulativeProfit - a.cumulativeProfit)
    .map((company, index) => ({ ...company, rank: index + 1, marketPool }));
}

function simulateLocalTeamsRound(forcedSettlement = false) {
  const a = state.assumptions;
  const roundIndex = state.history.length;
  const seasonalMultiplier = seasonalityForRound(roundIndex);
  const competition = simulateTeamCompetition(state.localTeams, a, roundIndex, seasonalMultiplier);
  const leader = competition[0];
  const previousLeader = previousResult()?.competition?.find((company) => company.id === leader.id);
  const result = {
    round: roundIndex + 1,
    mode: "localTeams",
    forcedSettlement,
    decisions: { ...leader },
    addressableMarket: leader.marketPool,
    competitionMarketPool: leader.marketPool,
    units: leader.units,
    revenue: leader.revenue,
    platformCommission: 0,
    adDrivenUnits: leader.adDrivenUnits,
    repeatDemand: 0,
    nextMonthRepeatUnits: leader.nextMonthRepeatUnits,
    profit: leader.profit,
    cumulativeProfit: leader.cumulativeProfit,
    marketShare: leader.share,
    brand: leader.brand,
    cash: leader.cumulativeProfit,
    roi: leader.adBudget > 0 ? leader.profit / leader.adBudget : 0,
    customerSatisfaction: 0,
    seasonalMultiplier,
    competition,
    deltas: {
      profit: leader.profit,
      share: previousLeader ? leader.share - previousLeader.share : leader.share,
      brand: previousLeader ? leader.brand - previousLeader.brand : 0,
      cash: leader.profit,
    },
  };
  result.note = buildTeamDiagnosis(result);
  return result;
}

function buildTeamDiagnosis(result) {
  const leader = result.competition[0];
  const runnerUp = result.competition[1];
  const averageSeasonality = result.seasonalMultiplier / (state.assumptions.decisionPeriodMonths || 1);
  const messages = [
    `${periodLabel(result.round - 1)}本地小组竞争已结算，当前领先小组是 ${leader.name}，累计利润 ${money(leader.cumulativeProfit)}。`,
    `本期竞争市场池约 ${number(result.competitionMarketPool)} 杯，${leader.name} 本期销量 ${number(leader.units)} 杯，份额 ${percent(leader.share)}。`,
  ];

  if (result.forcedSettlement) {
    messages.push("本期由老师强制结算，未提交小组按当前表格中的决策参与竞争。");
  }

  if (runnerUp) {
    messages.push(`${leader.name} 领先第 2 名 ${runnerUp.name} 的累计利润差距为 ${money(leader.cumulativeProfit - runnerUp.cumulativeProfit)}。`);
  }

  if (averageSeasonality > 1.05) {
    messages.push(`本期覆盖月份偏旺，平均需求按 ${(averageSeasonality * 100).toFixed(0)}% 计算。`);
  } else if (averageSeasonality < 0.95) {
    messages.push(`本期覆盖月份偏淡，平均需求按 ${(averageSeasonality * 100).toFixed(0)}% 计算。`);
  }

  return messages;
}

function marketingBudgetCap() {
  const a = state.assumptions;
  const baseSales = state.history.length > 0 ? latestResult().revenue : a.marketSize * seasonalityForRound(0) * a.referencePrice;
  return Math.max(0, baseSales * (a.marketingBudgetRate / 100));
}

function seasonalityForRound(roundIndex) {
  const seasonality = state.assumptions.seasonality;
  if (!Array.isArray(seasonality) || seasonality.length === 0) return 1;
  const periodMonths = state.assumptions.decisionPeriodMonths || 1;
  const startMonth = roundIndex * periodMonths;
  let factor = 0;
  for (let offset = 0; offset < periodMonths; offset += 1) {
    factor += seasonality[(startMonth + offset) % seasonality.length] || 1;
  }
  return factor;
}

function periodIncludesMonth(roundIndex, months) {
  const periodMonths = state.assumptions.decisionPeriodMonths || 1;
  const startMonth = ((roundIndex * periodMonths) % 12) + 1;
  return Array.from({ length: periodMonths }, (_, index) => ((startMonth + index - 1) % 12) + 1).some((month) => months.includes(month));
}

function periodLabel(roundIndex = state.history.length) {
  const assumptions = state.assumptions;
  const periodMonths = assumptions.decisionPeriodMonths || 1;
  const startMonth = ((roundIndex * periodMonths) % 12) + 1;
  const endMonth = ((startMonth + periodMonths - 2) % 12) + 1;
  return `第 ${roundIndex + 1} 期（${startMonth}-${endMonth}月）`;
}

function priceResponseScore(effectivePrice, assumptions) {
  const priceChange = effectivePrice / assumptions.referencePrice - 1;
  return clamp(1 - priceChange * assumptions.priceElasticity, 0.45, 1.65);
}

function previousResult() {
  if (state.history.length < 2) return null;
  return state.history[state.history.length - 2];
}

function simulateRound() {
  const a = state.assumptions;
  const d = state.decisions;
  const prev = latestResult();
  const roundIndex = state.history.length;
  const marketGrowth = Math.pow(1 + a.growth / 100, roundIndex * (a.decisionPeriodMonths || 1));
  const seasonalMultiplier = seasonalityForRound(roundIndex);
  const repeatDemand = prev.nextMonthRepeatUnits || 0;
  const addressableMarket = a.marketSize * marketGrowth * seasonalMultiplier + repeatDemand;
  const effectivePrice = d.price * (1 - d.promoDiscount / 100);

  const priceScore = priceResponseScore(effectivePrice, a);
  const adScore = a.marketSizeMode === "baselineSales" ? 1 : 1 + Math.log1p(d.adBudget / 15000) * 0.18 * a.adEffect;
  const channelScore = 1 + Math.log1p(d.channelBudget / 14000) * 0.16 * a.channelEffect;
  const productScore = 1 + Math.log1p(d.productBudget / 18000) * 0.12 * a.productEffect;
  const brandMomentum = 0.82 + prev.brand / 100;
  const cheapPricePressure = effectivePrice > a.referencePrice ? (effectivePrice / a.referencePrice - 1) * 0.35 : 0;
  const premiumPriceRoom = effectivePrice >= a.premiumCompetitorPrice * 0.8 ? 0.08 : 0;
  const competitorPressure = 1 + a.competitorPower / 100 + cheapPricePressure - premiumPriceRoom;
  const promotionLift = 1 + d.promoDiscount * 0.012;
  const strongBrandLift = prev.brand >= 70 ? 1.1 : 1;

  const demandIndex =
    (priceScore * adScore * channelScore * productScore * brandMomentum * promotionLift * strongBrandLift) /
    competitorPressure;
  let marketShare;
  let units;
  let adDrivenUnits = 0;
  let nextMonthRepeatUnits = 0;
  let competition = [];
  let competitionMarketPool = 0;
  if (a.marketSizeMode === "baselineSales") {
    const playerCompany = {
      id: "player",
      name: "你的茶饮品牌",
      positioning: "玩家企业",
      isPlayer: true,
      baseSales: a.marketSize,
      price: d.price,
      unitCost: a.unitCost,
      fixedCost: a.fixedCost,
      brand: prev.brand,
      adBudget: d.adBudget,
      channelBudget: d.channelBudget,
      productBudget: d.productBudget,
      promoDiscount: d.promoDiscount,
      takeawayShare: a.takeawayShare,
    };
    const competitionResult = simulateCompetition(playerCompany, a, roundIndex, seasonalMultiplier, repeatDemand);
    const playerResult = competitionResult.player;
    competition = competitionResult.companies;
    competitionMarketPool = competitionResult.marketPool;
    adDrivenUnits = playerResult.adDrivenUnits;
    nextMonthRepeatUnits = Math.round(adDrivenUnits * (a.repurchaseRate / 100));
    units = playerResult.units;
    marketShare = playerResult.share;
  } else {
    const rawShare = clamp((demandIndex / (demandIndex + 3.2)) * 100, 2, 46);
    marketShare = clamp(rawShare - Math.max(0, d.promoDiscount - 18) * 0.35, 1, 50);
    units = Math.round(addressableMarket * (marketShare / 100));
  }
  const revenue = units * effectivePrice;
  const variableCost = units * a.unitCost;
  const platformCommission = revenue * (a.takeawayShare / 100) * (a.takeawayCommission / 100);
  const spend = d.adBudget + d.channelBudget + d.productBudget;
  const profit = revenue - variableCost - platformCommission - spend - a.fixedCost * (a.decisionPeriodMonths || 1);
  const cumulativeProfit = prev.cumulativeProfit + profit;
  const cash = prev.cash + profit;

  const brandGain =
    Math.log1p(d.adBudget / 20000) * 2.4 +
    Math.log1p(d.productBudget / 18000) * 2.1 -
    Math.max(0, d.promoDiscount - 15) * 0.5 -
    Math.max(0, d.price - a.referencePrice) * 0.22;
  const brand = clamp(prev.brand * 0.97 + brandGain + 1.1, 10, 95);
  const customerSatisfaction = clamp(
    55 + Math.log1p(d.productBudget / 15000) * 9 - Math.max(0, d.price - a.referencePrice) * 1.8,
    20,
    95,
  );
  const roi = spend > 0 ? profit / spend : 0;
  const result = {
    round: roundIndex + 1,
    decisions: { ...d },
    addressableMarket,
    competitionMarketPool,
    units,
    revenue,
    platformCommission,
    adDrivenUnits,
    repeatDemand,
    nextMonthRepeatUnits,
    profit,
    cumulativeProfit,
    marketShare,
    brand,
    cash,
    roi,
    customerSatisfaction,
    seasonalMultiplier,
    competition,
    deltas: {
      profit,
      share: previousResult() ? marketShare - previousResult().marketShare : marketShare,
      brand: brand - prev.brand,
      cash: profit,
    },
  };
  result.note = buildDiagnosis(result);
  return result;
}

function buildDiagnosis(result) {
  const d = result.decisions;
  const a = state.assumptions;
  const averageSeasonality = result.seasonalMultiplier / (a.decisionPeriodMonths || 1);
  const messages = [];

  if (result.profit > 0) {
    messages.push(`本期实现利润 ${money(result.profit)}，销量 ${number(result.units)} 杯，投入产出为 ${result.roi.toFixed(2)}。`);
  } else {
    messages.push(`本期亏损 ${money(Math.abs(result.profit))}，主要压力来自预算投入与单位毛利不匹配。`);
  }

  const playerRank = result.competition?.find((company) => company.isPlayer)?.rank;
  if (playerRank) {
    messages.push(`竞争排名第 ${playerRank} 名，本期竞争市场池约 ${number(result.competitionMarketPool)} 杯，你的份额为 ${percent(result.marketShare)}。`);
  }

  if (result.platformCommission > 0) {
    messages.push(`外卖占比 ${a.takeawayShare}%、平台佣金 ${a.takeawayCommission}% 产生渠道佣金 ${money(result.platformCommission)}。`);
  }

  if (result.adDrivenUnits > 0) {
    messages.push(`广告/平台推广按每 1,000 元带来 ${number(a.adOrdersPer1000)} 单估算，本期贡献约 ${number(result.adDrivenUnits)} 杯新增销量。`);
  }

  if (result.nextMonthRepeatUnits > 0) {
    messages.push(`按 ${a.repurchaseRate}% 复购率估算，本期新增客将为下一期沉淀约 ${number(result.nextMonthRepeatUnits)} 杯复购需求。`);
  }

  const channelTotal = a.takeawayShare + a.dineInShare + a.pickupShare;
  if (channelTotal !== 100) {
    messages.push(`当前渠道占比合计为 ${channelTotal}%，建议调整到 100% 以保持利润测算口径一致。`);
  }

  if (d.promoDiscount > 18) {
    messages.push("促销折扣已经明显偏高，短期销量被拉动，但品牌资产和利润率会承压。");
  } else if (d.adBudget > d.channelBudget * 1.6) {
    messages.push("广告投入强于渠道投入，认知提升较快；如果渠道覆盖不足，部分需求会流失。");
  } else if (d.channelBudget > d.adBudget * 1.6) {
    messages.push("渠道投入强于广告投入，购买便利性提升；下一轮可以观察品牌认知是否拖累转化。");
  } else {
    messages.push("广告、渠道和产品投入较均衡，适合稳步提升份额与品牌资产。");
  }

  if (d.price > a.referencePrice * 1.12 && result.marketShare < 18) {
    messages.push("当前价格高于参考价较多，份额表现偏弱时建议验证目标客群的溢价接受度。");
  }

  if (result.cash < a.startingCash * 0.35) {
    messages.push("现金余额进入低位，后续应降低大额试错并优先保证正向现金流。");
  }

  if (averageSeasonality > 1.05) {
    messages.push(`本期覆盖月份偏旺，平均基准需求按 ${(averageSeasonality * 100).toFixed(0)}% 计算。`);
  } else if (averageSeasonality < 0.95) {
    messages.push(`本期覆盖月份偏淡，平均基准需求按 ${(averageSeasonality * 100).toFixed(0)}% 计算，建议控制固定投放和库存压力。`);
  }

  if (d.price <= a.cheapCompetitorPrice + 1) {
    messages.push("价格接近低价竞品，可以抢量，但要重点观察毛利是否足够覆盖固定成本。");
  } else if (d.price >= a.premiumCompetitorPrice * 0.8) {
    messages.push("价格进入高价竞品区间，需要靠品牌、产品体验和复购支撑溢价。");
  }

  if (result.units >= a.strongBrandSales) {
    messages.push(`本期销量达到 ${number(a.strongBrandSales)} 杯以上，已经进入强品牌参考区间。`);
  }

  return messages;
}

function updateDecisionFromInputs() {
  state.decisions = {
    price: Number(els.priceInput.value),
    adBudget: Number(els.adInput.value),
    channelBudget: Number(els.channelInput.value),
    productBudget: Number(els.productInput.value),
    promoDiscount: Number(els.promoInput.value),
  };
}

function syncDecisionInputs() {
  const d = state.decisions;
  const a = state.assumptions;
  const budgetCap = Math.max(500, Math.ceil(marketingBudgetCap() / 500) * 500);
  els.priceInput.min = Math.max(1, Math.round(a.referencePrice * 0.55));
  els.priceInput.max = Math.round(a.referencePrice * 1.55);
  els.priceInput.step = a.referencePrice > 50 ? 1 : 0.5;
  els.priceInput.value = d.price;
  els.adInput.max = budgetCap || a.maxAdBudget || 120000;
  els.channelInput.max = budgetCap || a.maxChannelBudget || 90000;
  els.productInput.max = budgetCap || a.maxProductBudget || 70000;
  els.adInput.value = d.adBudget;
  els.channelInput.value = d.channelBudget;
  els.productInput.value = d.productBudget;
  els.promoInput.value = d.promoDiscount;
  renderDecisionLabels();
}

function renderDecisionLabels() {
  updateDecisionFromInputs();
  const d = state.decisions;
  const totalBudget = d.adBudget + d.channelBudget + d.productBudget;
  const budgetCap = marketingBudgetCap();
  const overBudget = totalBudget > budgetCap;
  const nextRound = Math.min(state.history.length + 1, state.assumptions.maxRounds);
  els.priceOutput.textContent = money(d.price);
  els.adOutput.textContent = money(d.adBudget);
  els.channelOutput.textContent = money(d.channelBudget);
  els.productOutput.textContent = money(d.productBudget);
  els.promoOutput.textContent = `${d.promoDiscount}%`;
  els.budgetBadge.textContent = `第 ${nextRound} 期预算 ${money(totalBudget)} / 上限 ${money(budgetCap)}`;
  els.budgetBadge.className = overBudget ? "negative" : "";
  els.decisionSummary.className = overBudget ? "decision-summary negative" : "decision-summary";
  els.decisionSummary.innerHTML = `
    有效成交价 <strong>${money(d.price * (1 - d.promoDiscount / 100))}</strong>；
    三项投入合计 <strong>${money(totalBudget)}</strong>；
    预算结构为广告 ${mix(d.adBudget, totalBudget)}、渠道 ${mix(d.channelBudget, totalBudget)}、产品 ${mix(d.productBudget, totalBudget)}。
    ${overBudget ? `<br><strong>第 ${nextRound} 期预算超出上限 ${money(totalBudget - budgetCap)}，请把三项投入合计降到 ${money(budgetCap)} 以内后继续。</strong>` : ""}
  `;
  updateRunButton();
}

function mix(value, total) {
  if (!total) return "0%";
  return `${Math.round((value / total) * 100)}%`;
}

function renderScenarioOptions() {
  els.scenarioSelect.innerHTML = Object.entries(scenarios)
    .map(([key, scenario]) => `<option value="${key}">${scenario.name}</option>`)
    .join("");
  els.scenarioSelect.value = state.scenarioKey;
}

function renderAssumptions() {
  const a = state.assumptions;
  els.marketSizeInput.value = a.marketSize;
  els.growthInput.value = a.growth;
  els.priceElasticityInput.value = a.priceElasticity;
  els.adEffectInput.value = a.adEffect;
  els.channelEffectInput.value = a.channelEffect;
  els.unitCostInput.value = a.unitCost;
  els.fixedCostInput.value = a.fixedCost;
  els.marketingBudgetRateInput.value = a.marketingBudgetRate;
  els.takeawayShareInput.value = a.takeawayShare;
  els.dineInShareInput.value = a.dineInShare;
  els.pickupShareInput.value = a.pickupShare;
  els.takeawayCommissionInput.value = a.takeawayCommission;
  els.repurchaseRateInput.value = a.repurchaseRate;
}

function readAssumptions() {
  state.assumptions = {
    ...state.assumptions,
    marketSize: Number(els.marketSizeInput.value),
    growth: Number(els.growthInput.value),
    priceElasticity: Number(els.priceElasticityInput.value),
    adEffect: Number(els.adEffectInput.value),
    channelEffect: Number(els.channelEffectInput.value),
    unitCost: Number(els.unitCostInput.value),
    fixedCost: Number(els.fixedCostInput.value),
    marketingBudgetRate: Number(els.marketingBudgetRateInput.value),
    takeawayShare: Number(els.takeawayShareInput.value),
    dineInShare: Number(els.dineInShareInput.value),
    pickupShare: Number(els.pickupShareInput.value),
    takeawayCommission: Number(els.takeawayCommissionInput.value),
    repurchaseRate: Number(els.repurchaseRateInput.value),
  };
}

function renderMetrics() {
  const latest = latestResult();
  const prev = previousResult();
  els.profitMetric.textContent = money(latest.cumulativeProfit);
  els.shareMetric.textContent = percent(latest.marketShare);
  els.brandMetric.textContent = latest.brand.toFixed(1);
  els.cashMetric.textContent = money(latest.cash);

  setDelta(els.profitDelta, latest.deltas.profit, money, "本期");
  setDelta(els.shareDelta, prev ? latest.marketShare - prev.marketShare : latest.marketShare, percent, "变化");
  setDelta(els.brandDelta, latest.deltas.brand, (v) => v.toFixed(1), "变化");
  setDelta(els.cashDelta, latest.deltas.cash, money, "本期");
}

function setDelta(element, value, formatter, label) {
  element.className = value > 0 ? "positive" : value < 0 ? "negative" : "";
  const prefix = value > 0 ? "+" : "";
  element.textContent = `${label} ${prefix}${formatter(value)}`;
}

function renderRound() {
  const scenario = currentScenario();
  const nextRound = Math.min(state.history.length + 1, state.assumptions.maxRounds);
  const isComplete = state.history.length >= state.assumptions.maxRounds;
  els.roundNow.textContent = nextRound;
  els.roundTotal.textContent = state.assumptions.maxRounds;
  els.roundTitle.textContent = scenario.roundNames[nextRound - 1] || periodLabel(nextRound - 1);
  els.scenarioCopy.textContent = scenario.copy;
  if (els.runTeamsButton) {
    const allSubmitted = state.localTeams.every((team) => team.submitted);
    els.runTeamsButton.disabled = isComplete || !allSubmitted;
    els.runTeamsButton.textContent = isComplete ? "小组模拟完成" : allSubmitted ? `结算第 ${nextRound} 期小组` : "等待全部提交";
  }
  if (els.forceTeamsButton) {
    els.forceTeamsButton.disabled = isComplete;
    els.forceTeamsButton.textContent = isComplete ? "已完成" : "强制结算";
  }
  updateRunButton();
}

function updateRunButton() {
  const totalBudget = state.decisions.adBudget + state.decisions.channelBudget + state.decisions.productBudget;
  const isComplete = state.history.length >= state.assumptions.maxRounds;
  const overBudget = totalBudget > marketingBudgetCap();
  const nextRound = Math.min(state.history.length + 1, state.assumptions.maxRounds);
  els.runButton.disabled = isComplete || overBudget;
  els.runButton.textContent = isComplete ? "模拟完成" : overBudget ? "降低预算后继续" : `提交第 ${nextRound} 期`;
}

function renderReport() {
  const latest = latestResult();
  const copy =
    state.history.length === 0
      ? ["当前使用默认参数。可以用单人决策提交第 1 期，也可以在本地小组表录入多组决策后统一结算。"]
      : latest.mode === "localTeams"
        ? [
            `${periodLabel(latest.round - 1)}小组竞争已完成。现在可以继续修改各组决策，结算第 ${Math.min(latest.round + 1, state.assumptions.maxRounds)} 期。`,
            ...latest.note,
          ]
      : [
          `${periodLabel(latest.round - 1)}已完成。现在可以调整左侧决策，继续提交第 ${Math.min(latest.round + 1, state.assumptions.maxRounds)} 期。`,
          ...latest.note,
        ];
  els.coachReport.innerHTML = copy.map((item) => `<p>${item}</p>`).join("");
}

function renderDataNeeds() {
  els.dataNeeds.innerHTML = dataNeeds.map((item) => `<li>${item}</li>`).join("");
}

function renderViewControls() {
  if (!els.viewModeSelect || !els.teamViewSelect) return;
  els.viewModeSelect.value = state.viewMode;
  els.teamViewSelector.classList.toggle("hidden", state.viewMode !== "team");
  els.teamViewSelect.innerHTML = state.localTeams
    .map((team) => `<option value="${team.id}">${team.name}</option>`)
    .join("");
  if (!state.localTeams.some((team) => team.id === state.selectedTeamId)) {
    state.selectedTeamId = state.localTeams[0]?.id || "";
  }
  els.teamViewSelect.value = state.selectedTeamId;

  const teacherMode = state.viewMode === "teacher";
  [els.addTeamButton, els.forceTeamsButton, els.runTeamsButton].forEach((button) => {
    if (button) button.classList.toggle("hidden", !teacherMode);
  });
}

function renderTeamEditor() {
  if (!els.teamEditor) return;
  const nextRound = Math.min(state.history.length + 1, state.assumptions.maxRounds);
  const budgetCap = marketingBudgetCap();
  const submittedCount = state.localTeams.filter((team) => team.submitted).length;
  const allSubmitted = submittedCount === state.localTeams.length;
  const visibleTeams =
    state.viewMode === "team"
      ? state.localTeams.filter((team) => team.id === state.selectedTeamId)
      : state.viewMode === "public"
        ? []
        : state.localTeams;

  if (state.viewMode === "public") {
    els.teamEditor.innerHTML = `
      <div class="team-editor-note">
        公开结果视角：不显示任何小组决策。结算后请查看上方“企业排名”公开结果。
      </div>
    `;
    return;
  }

  els.teamEditor.innerHTML = `
    <div class="team-editor-note">
      ${
        state.viewMode === "team"
          ? `小组视角：只能查看和提交本组决策；提交后决策会隐藏并锁定。`
          : `老师视角：第 ${nextRound} 期小组统一结算。已提交 ${submittedCount}/${state.localTeams.length} 组；已提交小组的决策会隐藏并锁定，结算后只公开结果。`
      }
    </div>
    <div class="team-grid team-grid-head">
      <span>小组</span>
      <span>状态</span>
      <span>价格</span>
      <span>广告</span>
      <span>渠道</span>
      <span>产品</span>
      <span>促销</span>
      <span>预算</span>
      <span>操作</span>
    </div>
    ${visibleTeams
      .map((team, index) => {
        const totalBudget = team.adBudget + team.channelBudget + team.productBudget;
        const overBudget = totalBudget > budgetCap;
        const locked = team.submitted;
        return `
          <div class="team-grid team-row ${overBudget ? "team-over" : ""} ${locked ? "team-locked" : ""}" data-team-row="${team.id}">
            <input data-team-field="name" data-team-id="${team.id}" value="${team.name}" aria-label="${team.name} 名称" ${locked ? "disabled" : ""} />
            <span class="status-pill ${locked ? "submitted" : "pending"}">${locked ? "已提交" : "未提交"}</span>
            ${
              locked
                ? `
                  <span class="hidden-decision">已隐藏</span>
                  <span class="hidden-decision">已隐藏</span>
                  <span class="hidden-decision">已隐藏</span>
                  <span class="hidden-decision">已隐藏</span>
                  <span class="hidden-decision">已隐藏</span>
                  <span class="hidden-decision">已隐藏</span>
                `
                : `
                  <input data-team-field="price" data-team-id="${team.id}" type="number" min="5" max="18" step="0.5" value="${team.price}" aria-label="${team.name} 价格" />
                  <input data-team-field="adBudget" data-team-id="${team.id}" type="number" min="0" step="500" value="${team.adBudget}" aria-label="${team.name} 广告预算" />
                  <input data-team-field="channelBudget" data-team-id="${team.id}" type="number" min="0" step="500" value="${team.channelBudget}" aria-label="${team.name} 渠道投入" />
                  <input data-team-field="productBudget" data-team-id="${team.id}" type="number" min="0" step="500" value="${team.productBudget}" aria-label="${team.name} 产品投入" />
                  <input data-team-field="promoDiscount" data-team-id="${team.id}" type="number" min="0" max="30" step="1" value="${team.promoDiscount}" aria-label="${team.name} 促销折扣" />
                  <span class="${overBudget ? "negative" : ""}">${money(totalBudget)}</span>
                `
            }
            <span class="team-actions">
              <button class="secondary-button team-submit" data-team-submit="${team.id}" type="button">${locked ? "撤回" : "提交"}</button>
              ${
                state.viewMode === "teacher"
                  ? `<button class="icon-button team-remove" data-team-remove="${team.id}" type="button" title="删除小组" aria-label="删除 ${team.name}" ${state.localTeams.length <= 2 || locked ? "disabled" : ""}>×</button>`
                  : ""
              }
            </span>
          </div>
        `;
      })
      .join("")}
  `;
}

function updateTeamFromInput(input) {
  const team = state.localTeams.find((item) => item.id === input.dataset.teamId);
  if (!team || team.submitted) return;
  const field = input.dataset.teamField;
  team[field] = field === "name" ? input.value : Number(input.value);
}

function resetTeamSubmissionStatus() {
  state.localTeams = state.localTeams.map((team) => ({ ...team, submitted: false }));
}

function renderCompetition() {
  if (!els.competitionTable) return;
  const latest = latestResult();
  if (!latest.competition || latest.competition.length === 0) {
    els.competitionTable.innerHTML = `
      <div class="competition-empty">
        提交第 1 期后，系统会显示小组或企业的竞争排名。
      </div>
    `;
    return;
  }

  els.competitionTable.innerHTML = `
    <div class="competition-row competition-head">
      <span>排名</span>
      <span>企业</span>
      <span>销量</span>
      <span>份额</span>
      <span>本期利润</span>
      <span>累计利润</span>
    </div>
    ${latest.competition
      .map(
        (company) => `
          <div class="competition-row ${company.isPlayer || company.rank === 1 ? "player-row" : ""}">
            <span class="rank-pill">${company.rank}</span>
            <span>
              <strong>${company.name}</strong>
              <small>${company.positioning || "参赛小组"}</small>
            </span>
            <span>${number(company.units)} 杯</span>
            <span>${percent(company.share)}</span>
            <span class="${company.profit >= 0 ? "positive" : "negative"}">${money(company.profit)}</span>
            <span class="${company.cumulativeProfit >= 0 ? "positive" : "negative"}">${money(company.cumulativeProfit)}</span>
          </div>
        `,
      )
      .join("")}
  `;
}

function renderChart() {
  const ctx = els.chart.getContext("2d");
  const ratio = window.devicePixelRatio || 1;
  const width = els.chart.clientWidth * ratio;
  const height = els.chart.clientHeight * ratio;
  els.chart.width = width;
  els.chart.height = height;
  ctx.scale(ratio, ratio);

  const cssWidth = els.chart.clientWidth;
  const cssHeight = els.chart.clientHeight;
  ctx.clearRect(0, 0, cssWidth, cssHeight);

  const padding = { top: 20, right: 24, bottom: 36, left: 54 };
  const plotWidth = cssWidth - padding.left - padding.right;
  const plotHeight = cssHeight - padding.top - padding.bottom;
  const series = chartSeries();
  const values = series.values.length ? series.values : [0];
  const max = Math.max(...values, series.type === "profit" ? 10000 : 10);
  const min = Math.min(...values, series.type === "profit" ? Math.min(0, ...values) : 0);
  const span = max - min || 1;

  ctx.strokeStyle = "#d8dee5";
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(padding.left, padding.top);
  ctx.lineTo(padding.left, padding.top + plotHeight);
  ctx.lineTo(padding.left + plotWidth, padding.top + plotHeight);
  ctx.stroke();

  for (let i = 0; i <= 4; i += 1) {
    const y = padding.top + plotHeight - (plotHeight * i) / 4;
    ctx.strokeStyle = "#edf1f4";
    ctx.beginPath();
    ctx.moveTo(padding.left, y);
    ctx.lineTo(padding.left + plotWidth, y);
    ctx.stroke();
    ctx.fillStyle = "#64717f";
    ctx.font = "12px sans-serif";
    const tick = min + (span * i) / 4;
    ctx.fillText(series.format(tick), 8, y + 4);
  }

  const points = values.map((value, index) => {
    const x = padding.left + (values.length === 1 ? 0 : (plotWidth * index) / (values.length - 1));
    const y = padding.top + plotHeight - ((value - min) / span) * plotHeight;
    return { x, y, value };
  });

  if (points.length > 0) {
    ctx.strokeStyle = series.color;
    ctx.lineWidth = 3;
    ctx.beginPath();
    points.forEach((point, index) => {
      if (index === 0) ctx.moveTo(point.x, point.y);
      else ctx.lineTo(point.x, point.y);
    });
    ctx.stroke();

    points.forEach((point, index) => {
      ctx.fillStyle = series.color;
      ctx.beginPath();
      ctx.arc(point.x, point.y, 4, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = "#64717f";
      ctx.font = "12px sans-serif";
      ctx.fillText(`R${index + 1}`, point.x - 8, padding.top + plotHeight + 24);
    });
  }

  if (state.history.length === 0) {
    ctx.fillStyle = "#64717f";
    ctx.font = "14px sans-serif";
    ctx.fillText("提交本期后显示趋势", padding.left + 12, padding.top + 32);
  }
}

function chartSeries() {
  const map = {
    profit: {
      type: "profit",
      color: "#0f766e",
      values: state.history.map((item) => item.cumulativeProfit),
      format: money,
    },
    share: {
      type: "share",
      color: "#2563eb",
      values: state.history.map((item) => item.marketShare),
      format: percent,
    },
    brand: {
      type: "brand",
      color: "#b7791f",
      values: state.history.map((item) => item.brand),
      format: (value) => value.toFixed(0),
    },
  };
  return map[state.selectedChart];
}

function renderAll() {
  renderScenarioOptions();
  renderRound();
  renderMetrics();
  renderReport();
  renderCompetition();
  renderViewControls();
  renderTeamEditor();
  renderDataNeeds();
  renderAssumptions();
  syncDecisionInputs();
  renderEntrance();
  renderAccessControls();
  renderChart();
}

function resetScenario(key = state.scenarioKey, persist = true) {
  state.scenarioKey = key;
  state.assumptions = structuredClone(scenarios[key].assumptions);
  state.decisions = structuredClone(scenarios[key].decisions);
  state.localTeams = structuredClone(defaultTeams);
  state.simulationMode = "single";
  state.viewMode = "teacher";
  state.selectedTeamId = state.localTeams[0]?.id || "";
  state.history = [];
  renderAll();
  if (persist) saveState();
}

Object.values({
  priceInput: els.priceInput,
  adInput: els.adInput,
  channelInput: els.channelInput,
  productInput: els.productInput,
  promoInput: els.promoInput,
}).forEach((input) => input.addEventListener("input", renderDecisionLabels));

els.enterTeacherButton?.addEventListener("click", () => enterRole("teacher"));

els.enterTeamButton?.addEventListener("click", () => enterRole("team"));

els.enterPublicButton?.addEventListener("click", () => enterRole("public"));

els.entryTeamSelect?.addEventListener("change", (event) => {
  state.selectedTeamId = event.target.value;
});

els.switchEntryButton?.addEventListener("click", () => {
  state.entryRole = "landing";
  renderAll();
  saveState();
});

els.scenarioSelect.addEventListener("change", (event) => resetScenario(event.target.value));

els.viewModeSelect?.addEventListener("change", (event) => {
  state.viewMode = event.target.value;
  renderViewControls();
  renderTeamEditor();
  saveState();
});

els.teamViewSelect?.addEventListener("change", (event) => {
  state.selectedTeamId = event.target.value;
  renderTeamEditor();
  saveState();
});

els.runButton.addEventListener("click", () => {
  updateDecisionFromInputs();
  state.simulationMode = "single";
  if (state.history.length < state.assumptions.maxRounds) {
    state.history.push(simulateRound());
    renderAll();
    saveState();
  }
});

function settleLocalTeams(forcedSettlement = false) {
  state.simulationMode = "localTeams";
  if (state.history.length < state.assumptions.maxRounds) {
    state.history.push(simulateLocalTeamsRound(forcedSettlement));
    resetTeamSubmissionStatus();
    renderAll();
    saveState();
  }
}

els.runTeamsButton?.addEventListener("click", () => {
  if (!state.localTeams.every((team) => team.submitted)) return;
  settleLocalTeams(false);
});

els.forceTeamsButton?.addEventListener("click", () => {
  settleLocalTeams(true);
});

els.addTeamButton?.addEventListener("click", () => {
  const nextIndex = state.localTeams.length + 1;
  state.localTeams.push({
    id: `team-${Date.now()}`,
    name: `小组 ${nextIndex}`,
    price: state.assumptions.referencePrice,
    adBudget: 3000,
    channelBudget: 2500,
    productBudget: 1500,
    promoDiscount: 5,
    brand: 35,
    submitted: false,
  });
  state.selectedTeamId = state.localTeams[state.localTeams.length - 1].id;
  renderViewControls();
  renderTeamEditor();
  renderRound();
  saveState();
});

els.teamEditor?.addEventListener("change", (event) => {
  if (!event.target.matches("[data-team-field]")) return;
  updateTeamFromInput(event.target);
  renderTeamEditor();
  saveState();
});

els.teamEditor?.addEventListener("click", (event) => {
  const submitId = event.target.dataset.teamSubmit;
  if (submitId) {
    const team = state.localTeams.find((item) => item.id === submitId);
    if (team) team.submitted = !team.submitted;
    renderTeamEditor();
    renderRound();
    saveState();
    return;
  }

  const removeId = event.target.dataset.teamRemove;
  if (!removeId || state.localTeams.length <= 2) return;
  state.localTeams = state.localTeams.filter((team) => team.id !== removeId);
  if (!state.localTeams.some((team) => team.id === state.selectedTeamId)) {
    state.selectedTeamId = state.localTeams[0]?.id || "";
  }
  renderViewControls();
  renderTeamEditor();
  renderRound();
  saveState();
});

els.undoButton.addEventListener("click", () => {
  state.history.pop();
  renderAll();
  saveState();
});

els.resetButton.addEventListener("click", () => resetScenario());

els.applyAssumptions.addEventListener("click", () => {
  readAssumptions();
  state.history = [];
  syncDecisionInputs();
  renderAll();
  saveState();
});

document.querySelectorAll("[data-chart]").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll("[data-chart]").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    state.selectedChart = button.dataset.chart;
    renderChart();
    saveState();
  });
});

window.addEventListener("resize", renderChart);

els.exportStateButton?.addEventListener("click", exportState);

els.importStateButton?.addEventListener("click", () => {
  els.importStateInput?.click();
});

els.importStateInput?.addEventListener("change", async (event) => {
  const file = event.target.files?.[0];
  if (!file) return;
  try {
    applySnapshot(JSON.parse(await file.text()));
    renderAll();
    saveState();
    setSaveStatus(`已导入 ${file.name}`);
  } catch (error) {
    setSaveStatus("导入失败：文件格式不正确");
  } finally {
    event.target.value = "";
  }
});

els.clearSavedStateButton?.addEventListener("click", () => {
  localStorage.removeItem(STORAGE_KEY);
  resetScenario(state.scenarioKey, false);
  setSaveStatus("已清空本地存档");
});

loadSavedState();
renderAll();
