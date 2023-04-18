ace.define('ux/mode/custom', [], (acequire, exports) => {
    const oop = acequire('ace/lib/oop');
    const TextMode = acequire('ace/mode/text').Mode;
    const CustomHighlightRules = acequire('ux/mode/custom_highlight_rules').CustomHighlightRules;

    function Mode() {
        this.HighlightRules = CustomHighlightRules;
    }
    oop.inherits(Mode, TextMode);

    exports.Mode = Mode;
});

ace.define('ux/mode/custom_highlight_rules', [], (acequire, exports) => {
    const oop = acequire('ace/lib/oop');
    const TextHighlightRules = acequire('ace/mode/text_highlight_rules').TextHighlightRules;

    const CustomHighlightRules = function CustomHighlightRules() {
        this.$rules = {
            start: [
                {
                    token: "keyword",
                    regex: /[A-Z][A-Z\d]+/
                },
                {
                    token: "numeric",
                    regex: /[\d]+/
                }
            ]
        }
    };

    oop.inherits(CustomHighlightRules, TextHighlightRules);

    exports.CustomHighlightRules = CustomHighlightRules;
});
