const verses = [
	"به لاله نرگس مخمور گفت وقت سحر - که هر که در صف باغ است صاحب هنریست",
	"ای خوشا مستانه سر در پای دلبر داشتن - دل تهی از خوب و زشت چرخ اخضر داشتن",
	"کبوتر بچه‌ای با شوق پرواز - بجرئت کرد روزی بال و پر باز",
	"جهاندیده کشاورزی بدشتی - بعمری داشتی زرعی و کشتی",
	"شنیده‌اید که آسایش بزرگان چیست: - برای خاطر بیچارگان نیاسودن",
	"وقت سحر، به آینه‌ای گفت شانه‌ای - کاوخ! فلک چه کجرو و گیتی چه تند خوست",
	"مرغی نهاد روی بباغی ز خرمنی - ناگاه دید دانهٔ لعلی به روزنی",
	"روزی گذشت پادشهی از گذرگهی - فریاد شوق بر سر هر کوی و بام خاست",
	"تا بکی جان کندن اندر آفتاب ای رنجبر - ریختن از بهر نان از چهر آب ای رنجبر",
	"عالمی طعنه زد به نادانی - که بهر موی من دو صد هنر است",
	"خمید نرگس پژمرده‌ای ز انده و شرم - چو دید جلوهٔ گلهای بوستانی را",
	"دید موری در رهی پیلی سترگ - گفت باید بود چون پیلان بزرگ",
	"گفت دیوار قصر پادشهی - که بلندی، مرا سزاوار است",
	"ز سری، موی سپیدی روئید - خنده‌ها کرد بر او موی سیاه",
];

export function poetry(verse) {
	let result = null;
	let lastAlphabet = verse[verse.length - 1];
	let filterInVerses = verses.filter((v) => v.startsWith(lastAlphabet));
	if (filterInVerses.length > 0) {
		return filterInVerses[0];
	} else {
		const [firstStanza] = verse.split("-");
		const lastAlphabetInFirstStanza = firstStanza[firstStanza.length - 1];
		const filterInVerses2 = verses.filter((v) =>
			v.startsWith(lastAlphabetInFirstStanza)
		);
		if (filterInVerses2.length > 0) {
			return filterInVerses2[0];
		}
	}
	return null;
}
