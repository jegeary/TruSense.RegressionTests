class Selectors {
    linkText(text: string): string { return '=' + text; }
    partialLinkText(text: string): string { return '*=' + text; }
    elementWithCertainTextTag(tag: string, text: string): string { return tag + '=' + text}
    elementWithCertainTextId(id: string, text: string): string { return '#' + id + '=' + text}
    elementWithCertainTextClass(className: string, text: string): string { return '.' + className + '=' + text}
    elementWithPartialTextTag(tag: string, text: string): string { return tag + '*=' + text}
    elementWithPartialTextId(id: string, text: string): string { return '#' + id + '*=' + text}
    elementWithPartialTextClass(className: string, text: string): string { return '.' + className + '*=' + text}
    name(name: string): string { return '[name="' + name + '"]'}
    id(id: string): string { return '[id="' + id + '"]'}
    class(className: string): string { return '[class="' + className + '"]'}
    tag(tag: string): string {return '<' + tag + '>'}
    partialClassName(className: string ): string { return '[class*="' + className + '"]'}
}
const Selector = new Selectors();
export default Selector;
