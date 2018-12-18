class AndroidSelectors {
    newUiSelector = 'android=new UiSelector()';
    checkable = '.checkable(true)';
    checked = '.checked(true)';
    clickable = '.clickable(true)';
    enabled = '.enabled(true)';
    focusable = '.focusable(true)';
    focused = '.focused(true)';
    scrollable = '.scrollable(true)';
    selected = '.selected(true)';
    child(child: string): string { return '.childSelector(' + child + ')'; }
    className(className: string): string { return '.className("' + className + '")'; }
    instance(instance: number): string { return '.instance(' + instance + ')'; }
    index(index: number): string { return '.index(' + index + ')'; }
    resourceId(resourceId: string): string { return '.resourceId("' + resourceId + '")'; }
    text(text: string): string { return '.textContains("' + text + '")'; }
    resourceIdRegex(regex: string): string { return '.resourceId("' + regex + '")'; }
    textMatches(regex: string): string { return '.textMatches("' + regex + '")'; }

    isCheckable(): string { return this.newUiSelector + this.checkable; }

    isChecked(): string { return this.newUiSelector + this.checked; }

    byClassName(className: string): string { return this.newUiSelector + this.className(className); }

    isClickable(): string { return this.newUiSelector + this.clickable; }
    isEnabled(): string { return this.newUiSelector + this.enabled; }
    isFocusable(): string { return this.newUiSelector + this.focusable; }
    isFocused(): string { return this.newUiSelector + this.focused; }
    byResourceId(resourceId: string): string { return this.newUiSelector + this.resourceId(resourceId); }
    isScrollable(): string { return this.newUiSelector + this.scrollable; }
    isSelected(): string { return this.newUiSelector + this.selected; }
    byText(text: string): string { return this.newUiSelector + this.text(text); }
    nestedSelector(parent: string, child: string): string { return this.newUiSelector + parent + this.child(child); }
    byResourceIdRegex(resourceIdRegex: string): string { return this.newUiSelector + this.resourceIdRegex(resourceIdRegex); }
    customLocator(locator: string): string { return this.newUiSelector + locator; }
    instanceNumber(instance: number): string {return this.instance(instance); }
    childSelector(child: string): string { return this.child(child); }
}
const AndroidSelector = new AndroidSelectors();
export default AndroidSelector;
