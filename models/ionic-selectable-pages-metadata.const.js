function createPageMetadata({ id, stackBlitzId, examples, title, description }) {
  return {
    id,
    examples,
    head: {
      title: `Ionic Selectable ${title}`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `Ionic Selectable ${description ?? title}`,
        },
      ],
    },
  };
}

export const IONIC_SELECTABLE_PAGES_METADATA = [
  // Introduction.
  createPageMetadata({
    id: 'about',
    title: 'about Ionic Selectable',
    examples: [
      {
        url: 'https://stackblitz.com/edit/ionic-selectable-v4-basic-usage?embed=1&file=app/pages/home/home.html',
        title: 'Example',
      },
    ],
  }),
  createPageMetadata({
    id: 'getting-started',
    title: 'getting started',
  }),
  createPageMetadata({
    id: 'frequently-asked-questions',
    title: 'frequently asked questions',
  }),
  createPageMetadata({
    id: 'errors',
    title: 'errors',
  }),
  createPageMetadata({
    id: 'contributing',
    title: 'contributing',
  }),

  // Theming.
  createPageMetadata({
    id: 'css-classes',
    title: 'CSS classes',
  }),

  // Use cases.
  createPageMetadata({
    id: 'basic-usage',
    title: 'basic usage',
    examples: [
      {
        url: 'https://stackblitz.com/edit/ionic-selectable-v4-basic-usage?embed=1&file=app/pages/home/home.html',
        title: 'Example',
      },
    ],
  }),
  createPageMetadata({
    id: 'cascading-selection',
    title: 'cascading selection',
    examples: [
      {
        url: 'https://stackblitz.com/edit/ionic-selectable-v4-cascading-selection?embed=1&file=app/pages/home/home.html',
        title: 'Example',
      },
    ],
  }),
  createPageMetadata({
    id: 'customizing-footer-buttons',
    title: 'customizing footer buttons',
    examples: [
      {
        url: 'https://stackblitz.com/edit/ionic-selectable-v4-footer-template?embed=1&file=app/pages/home/home.html',
        title: 'Example',
      },
    ],
  }),
  createPageMetadata({
    id: 'disabling-items',
    title: 'disabling items',
    examples: [
      {
        url: 'https://stackblitz.com/edit/ionic-selectable-v4-disabling-items?embed=1&file=app/pages/home/home.html',
        title: 'Example',
      },
    ],
  }),
  createPageMetadata({
    id: 'firebase',
    title: 'Firebase',
    examples: [
      {
        url: 'https://stackblitz.com/edit/ionic-selectable-v4-firebase?embed=1&file=app/pages/home/home.html',
        title: 'Example',
      },
    ],
  }),
  createPageMetadata({
    id: 'inside-modal',
    title: 'inside modal',
    examples: [
      {
        url: 'https://stackblitz.com/edit/ionic-selectable-v4-inside-modal?embed=1&file=app/pages/home/home.html',
        title: 'Example',
      },
    ],
  }),
  createPageMetadata({
    id: 'initial-value',
    title: 'initial value',
    examples: [
      {
        url: 'https://stackblitz.com/edit/ionic-selectable-v4-initial-value?embed=1&file=app/pages/home/home.html',
        title: 'Example',
      },
    ],
  }),
  createPageMetadata({
    id: 'infinite-scroll',
    title: 'infinite scroll',
    examples: [
      {
        url: 'https://stackblitz.com/edit/ionic-selectable-v4-infinite-scroll?embed=1&file=app/pages/home/home.html',
        title: 'Example',
      },
    ],
  }),
  createPageMetadata({
    id: 'infinite-scroll-multiple-values',
    title: 'infinite scroll with multiple values',
    examples: [
      {
        url: 'https://stackblitz.com/edit/ionic-selectable-v4-infinite-scroll-multiple-values?embed=1&file=app/pages/home/home.html',
        title: 'Example',
      },
    ],
  }),
  createPageMetadata({
    id: 'ionic-labels',
    title: 'Ionic labels',
    examples: [
      {
        url: 'https://stackblitz.com/edit/ionic-selectable-v4-ionic-labels?embed=1&file=app/pages/home/home.html',
        title: 'Example',
      },
    ],
  }),
  createPageMetadata({
    id: 'primitive-types',
    title: 'primitive types',
    examples: [
      {
        url: 'https://stackblitz.com/edit/ionic-selectable-v4-primitive-types?embed=1&file=app/pages/home/home.html',
        title: 'Example',
      },
    ],
  }),
  createPageMetadata({
    id: 'search-items-asynchronously',
    title: 'search items asynchronously',
    examples: [
      {
        url: 'https://stackblitz.com/edit/ionic-selectable-v4-on-search-event?embed=1&file=app/pages/home/home.html',
        title: 'Example',
      },
    ],
  }),
  createPageMetadata({
    id: 'search-by-several-item-fields',
    title: 'search by several item fields',
    examples: [
      {
        url: 'https://stackblitz.com/edit/ionic-selectable-v4-on-search-event?embed=1&file=app/pages/home/home.html',
        title: 'Example',
      },
    ],
  }),
  createPageMetadata({
    id: 'virtual-scroll',
    title: 'virtual scroll',
    examples: [
      {
        url: 'https://stackblitz.com/edit/ionic-selectable-v4-virtual-scroll?embed=1&file=app/pages/home/home.html',
        title: 'Example',
      },
    ],
  }),

  // Grouping.
  createPageMetadata({
    id: 'grouping-items',
    title: 'grouping items',
    examples: [
      {
        url: 'https://stackblitz.com/edit/ionic-selectable-v4-grouping-items?embed=1&file=app/pages/home/home.html',
        title: 'Example',
      },
    ],
  }),
  createPageMetadata({
    id: 'grouping-items-virtual-scroll',
    title: 'grouping items with virtual scroll',
    examples: [
      {
        url: 'https://stackblitz.com/edit/ionic-selectable-v4-grouping-items-virtual-scroll?embed=1&file=app/pages/home/home.html',
        title: 'Example',
      },
    ],
  }),

  // Editing.
  createPageMetadata({
    id: 'editing-adding-editing-and-deleting-items',
    title: 'adding, editing and deleting items',
    examples: [
      {
        url: 'https://stackblitz.com/edit/ionic-selectable-v4-editing?embed=1&file=app/pages/home/home.html',
        title: 'Example',
      },
    ],
  }),
  createPageMetadata({
    id: 'editing-adding-editing-and-deleting-items-asynchronously',
    title: 'adding, editing and deleting items asynchronously',
    examples: [
      {
        url: 'https://stackblitz.com/edit/ionic-selectable-v4-editing-async?embed=1&file=app/pages/home/home.html',
        title: 'Example',
      },
    ],
  }),
  createPageMetadata({
    id: 'editing-adding-item-when-search-fails',
    title: 'adding item when search fails',
    examples: [
      {
        url: 'https://stackblitz.com/edit/ionic-selectable-v4-adding-on-search-fail?embed=1&file=app/pages/home/home.html',
        title: 'Example',
      },
    ],
  }),
  createPageMetadata({
    id: 'editing-adding-item-asynchronously-when-search-fails',
    title: 'adding item asynchronously when search fails',
    examples: [
      {
        url: 'https://stackblitz.com/edit/ionic-selectable-v4-adding-on-search-fail-async?embed=1&file=app/pages/home/home.html',
        title: 'Example',
      },
    ],
  }),

  // Templates.
  createPageMetadata({
    id: 'add-item-template',
    title: 'add item template',
    examples: [
      {
        url: 'https://stackblitz.com/edit/ionic-selectable-v4-editing?embed=1&file=app/pages/home/home.html',
        title: 'Example',
      },
    ],
  }),
  createPageMetadata({
    id: 'close-button-template',
    title: 'close button template',
    examples: [
      {
        url: 'https://stackblitz.com/edit/ionic-selectable-v4-close-button-template?embed=1&file=app/pages/home/home.html',
        title: 'Example',
      },
    ],
  }),
  createPageMetadata({
    id: 'footer-template',
    title: 'footer template',
    examples: [
      {
        url: 'https://stackblitz.com/edit/ionic-selectable-v4-footer-template?embed=1&file=app/pages/home/home.html',
        title: 'Example',
      },
    ],
  }),
  createPageMetadata({
    id: 'group-template',
    title: 'group template',
    examples: [
      {
        url: 'https://stackblitz.com/edit/ionic-selectable-v4-grouping-items?embed=1&file=app/pages/home/home.html',
        title: 'Example',
      },
    ],
  }),
  createPageMetadata({
    id: 'group-end-template',
    title: 'group end template',
    examples: [
      {
        url: 'https://stackblitz.com/edit/ionic-selectable-v4-group-end-template?embed=1&file=app/pages/home/home.html',
        title: 'Example',
      },
    ],
  }),
  createPageMetadata({
    id: 'header-template',
    title: 'header template',
    examples: [
      {
        url: 'https://stackblitz.com/edit/ionic-selectable-v4-header-template?embed=1&file=app/pages/home/home.html',
        title: 'Example',
      },
    ],
  }),
  createPageMetadata({
    id: 'icon-template',
    title: 'icon template',
    examples: [
      {
        url: 'https://stackblitz.com/edit/ionic-selectable-v4-icon-template?embed=1&file=app/pages/home/home.html',
        title: 'Example',
      },
    ],
  }),
  createPageMetadata({
    id: 'item-template',
    title: 'item template',
    examples: [
      {
        url: 'https://stackblitz.com/edit/ionic-selectable-v4-item-template?embed=1&file=app/pages/home/home.html',
        title: 'Example',
      },
    ],
  }),
  createPageMetadata({
    id: 'item-end-template',
    title: 'item end template',
    examples: [
      {
        url: 'https://stackblitz.com/edit/ionic-selectable-v4-item-end-template?embed=1&file=app/pages/home/home.html',
        title: 'Example',
      },
    ],
  }),
  createPageMetadata({
    id: 'item-icon-template',
    title: 'item icon template',
    examples: [
      {
        url: 'https://stackblitz.com/edit/ionic-selectable-v4-item-icon-template?embed=1&file=app/pages/home/home.html',
        title: 'Example',
      },
    ],
  }),
  createPageMetadata({
    id: 'message-template',
    title: 'message template',
    examples: [
      {
        url: 'https://stackblitz.com/edit/ionic-selectable-v4-message-template?embed=1&file=app/pages/home/home.html',
        title: 'Example',
      },
    ],
  }),
  createPageMetadata({
    id: 'multiple-values-template',
    title: 'multiple values template',
    examples: [
      {
        url: 'https://stackblitz.com/edit/ionic-selectable-v4-multiple-values-template?embed=1&file=app/pages/home/home.html',
        title: 'Example',
      },
    ],
  }),
  createPageMetadata({
    id: 'multiple-values-ellipsis-template',
    title: 'multiple values with ellipsis template',
    examples: [
      {
        url: 'https://stackblitz.com/edit/ionic-selectable-v4-multiple-values-ellipsis-template?embed=1&file=app/pages/home/home.html',
        title: 'Example',
      },
    ],
  }),
  createPageMetadata({
    id: 'placeholder-template',
    title: 'placeholder template',
    examples: [
      {
        url: 'https://stackblitz.com/edit/ionic-selectable-v4-placeholder-template?embed=1&file=app/pages/home/home.html',
        title: 'Example',
      },
    ],
  }),
  createPageMetadata({
    id: 'search-fail-template',
    title: 'search fail template',
    examples: [
      {
        url: 'https://stackblitz.com/edit/ionic-selectable-v4-search-fail-template?embed=1&file=app/pages/home/home.html',
        title: 'Example',
      },
    ],
  }),
  createPageMetadata({
    id: 'title-template',
    title: 'title template',
    examples: [
      {
        url: 'https://stackblitz.com/edit/ionic-selectable-v4-title-template?embed=1&file=app/pages/home/home.html',
        title: 'Example',
      },
    ],
  }),
  createPageMetadata({
    id: 'value-template',
    title: 'value template',
    examples: [
      {
        url: 'https://stackblitz.com/edit/ionic-selectable-v4-value-template?embed=1&file=app/pages/home/home.html',
        title: 'Example',
      },
    ],
  }),

  // Forms.
  createPageMetadata({
    id: 'form-array',
    title: 'FormArray',
    examples: [
      {
        url: 'https://stackblitz.com/edit/ionic-selectable-v4-form-array?embed=1&file=app/pages/home/home.html',
        title: 'Example',
      },
    ],
  }),
  createPageMetadata({
    id: 'form-control',
    title: 'FormControl',
    examples: [
      {
        url: 'https://stackblitz.com/edit/ionic-selectable-v4-form-control?embed=1&file=app/pages/home/home.html',
        title: 'Example',
      },
    ],
  }),
  createPageMetadata({
    id: 'min-max-selection',
    title: 'min/max selection',
    examples: [
      {
        url: 'https://stackblitz.com/edit/ionic-selectable-v4-min-max-selection?embed=1&file=app/pages/home/home.html',
        title: 'Example',
      },
    ],
  }),

  // Fields.
  createPageMetadata({
    id: 'add-button-text-field',
    title: 'addButtonText field',
  }),
  createPageMetadata({
    id: 'can-add-item-field',
    title: 'canAddItem field',
    examples: [
      {
        url: 'https://stackblitz.com/edit/ionic-selectable-v4-editing?embed=1&file=app/pages/home/home.html',
        title: 'Example',
      },
    ],
  }),
  createPageMetadata({
    id: 'can-clear-field',
    title: 'canClear field',
    examples: [
      {
        url: 'https://stackblitz.com/edit/ionic-selectable-v4-can-clear-field?embed=1&file=app/pages/home/home.html',
        title: 'Example',
      },
    ],
  }),
  createPageMetadata({
    id: 'can-delete-item-field',
    title: 'canDeleteItem field',
    examples: [
      {
        url: 'https://stackblitz.com/edit/ionic-selectable-v4-editing?embed=1&file=app/pages/home/home.html',
        title: 'Example',
      },
    ],
  }),
  createPageMetadata({
    id: 'can-save-item-field',
    title: 'canSaveItem field',
    examples: [
      {
        url: 'https://stackblitz.com/edit/ionic-selectable-v4-editing?embed=1&file=app/pages/home/home.html',
        title: 'Example',
      },
    ],
  }),
  createPageMetadata({
    id: 'can-search-field',
    title: 'canSearch field',
    examples: [
      {
        url: 'https://stackblitz.com/edit/ionic-selectable-v4-on-search-event?embed=1&file=app/pages/home/home.html',
        title: 'Example',
      },
    ],
  }),
  createPageMetadata({
    id: 'clear-button-text-field',
    title: 'clearButtonText field',
  }),
  createPageMetadata({
    id: 'close-button-text-field',
    title: 'closeButtonText field',
    examples: [
      {
        url: 'https://stackblitz.com/edit/ionic-selectable-v4-close-button-text-field?embed=1&file=app/pages/home/home.html',
        title: 'Example',
      },
    ],
  }),
  createPageMetadata({
    id: 'close-button-slot-field',
    title: 'closeButtonSlot field',
  }),
  createPageMetadata({
    id: 'confirm-button-text-field',
    title: 'confirmButtonText field',
  }),
  createPageMetadata({
    id: 'disabled-items-field',
    title: 'disabledItems field',
    examples: [
      {
        url: 'https://stackblitz.com/edit/ionic-selectable-v4-disabling-items?embed=1&file=app/pages/home/home.html',
        title: 'Example',
      },
    ],
  }),
  createPageMetadata({
    id: 'group-color-field',
    title: 'groupColor field',
  }),
  createPageMetadata({
    id: 'group-value-field-field',
    title: 'groupValueField field',
    examples: [
      {
        url: 'https://stackblitz.com/edit/ionic-selectable-v4-grouping-items?embed=1&file=app/pages/home/home.html',
        title: 'Example',
      },
    ],
  }),
  createPageMetadata({
    id: 'group-text-field-field',
    title: 'groupTextField field',
    examples: [
      {
        url: 'https://stackblitz.com/edit/ionic-selectable-v4-grouping-items?embed=1&file=app/pages/home/home.html',
        title: 'Example',
      },
    ],
  }),
  createPageMetadata({
    id: 'has-infinite-scroll-field',
    title: 'hasInfiniteScroll field',
    examples: [
      {
        url: 'https://stackblitz.com/edit/ionic-selectable-v4-infinite-scroll?embed=1&file=app/pages/home/home.html',
        title: 'Example',
      },
    ],
  }),
  createPageMetadata({
    id: 'has-confirm-button-field',
    title: 'hasConfirmButton field',
  }),
  createPageMetadata({
    id: 'has-search-text-field',
    title: 'hasSearchText field',
  }),
  createPageMetadata({
    id: 'has-virtual-scroll-field',
    title: 'hasVirtualScroll field',
    examples: [
      {
        url: 'https://stackblitz.com/edit/ionic-selectable-v4-virtual-scroll?embed=1&file=app/pages/home/home.html',
        title: 'Example',
      },
    ],
  }),
  createPageMetadata({
    id: 'header-color-field',
    title: 'headerColor field',
  }),
  createPageMetadata({
    id: 'item-icon-slot-field',
    title: 'itemIconSlot field',
  }),
  createPageMetadata({
    id: 'items-field',
    title: 'items field',
    examples: [
      {
        url: 'https://stackblitz.com/edit/ionic-selectable-v4-basic-usage?embed=1&file=app/pages/home/home.html',
        title: 'Example',
      },
    ],
  }),
  createPageMetadata({
    id: 'items-to-confirm-field',
    title: 'itemsToConfirm field',
  }),
  createPageMetadata({
    id: 'is-enabled-field',
    title: 'isEnabled field',
    examples: [
      {
        url: 'https://stackblitz.com/edit/ionic-selectable-v4-is-enabled-field?embed=1&file=app/pages/home/home.html',
        title: 'Example',
      },
    ],
  }),
  createPageMetadata({
    id: 'is-multiple-field',
    title: 'isMultiple field',
    examples: [
      {
        url: 'https://stackblitz.com/edit/ionic-selectable-v4-is-multiple-field?embed=1&file=app/pages/home/home.html',
        title: 'Example',
      },
    ],
  }),
  createPageMetadata({
    id: 'is-confirm-button-enabled-field',
    title: 'isConfirmButtonEnabled field',
  }),
  createPageMetadata({
    id: 'is-on-search-enabled-field',
    title: 'isOnSearchEnabled field',
  }),
  createPageMetadata({
    id: 'is-opened-field',
    title: 'isOpened field',
  }),
  createPageMetadata({
    id: 'is-searching-field',
    title: 'isSearching field',
  }),
  createPageMetadata({
    id: 'item-value-field-field',
    title: 'itemValueField field',
    examples: [
      {
        url: 'https://stackblitz.com/edit/ionic-selectable-v4-basic-usage?embed=1&file=app/pages/home/home.html',
        title: 'Example',
      },
    ],
  }),
  createPageMetadata({
    id: 'item-text-field-field',
    title: 'itemTextField field',
    examples: [
      {
        url: 'https://stackblitz.com/edit/ionic-selectable-v4-basic-usage?embed=1&file=app/pages/home/home.html',
        title: 'Example',
      },
    ],
  }),
  createPageMetadata({
    id: 'label-field',
    title: 'label field',
    examples: [
      {
        url: 'https://stackblitz.com/edit/ionic-selectable-v4-basic-usage?embed=1&file=app/pages/home/home.html',
        title: 'Example',
      },
    ],
  }),
  createPageMetadata({
    id: 'modal-css-class-field',
    title: 'modalCssClass field',
  }),
  createPageMetadata({
    id: 'modal-enter-animation-field',
    title: 'modalEnterAnimation field',
  }),
  createPageMetadata({
    id: 'modal-leave-animation-field',
    title: 'modalLeaveAnimation field',
  }),
  createPageMetadata({
    id: 'placeholder-field',
    title: 'placeholder field',
    examples: [
      {
        url: 'https://stackblitz.com/edit/ionic-selectable-v4-placeholder-field?embed=1&file=app/pages/home/home.html',
        title: 'Example',
      },
    ],
  }),
  createPageMetadata({
    id: 'search-debounce-field',
    title: 'searchDebounce field',
  }),
  createPageMetadata({
    id: 'search-fail-text-field',
    title: 'searchFailText field',
  }),
  createPageMetadata({
    id: 'search-placeholder-field',
    title: 'searchPlaceholder field',
  }),
  createPageMetadata({
    id: 'search-text-field',
    title: 'searchText field',
  }),
  createPageMetadata({
    id: 'should-backdrop-close-field',
    title: 'shouldBackdropClose field',
  }),
  createPageMetadata({
    id: 'should-focus-searchbar-field',
    title: 'shouldFocusSearchbar field',
  }),
  createPageMetadata({
    id: 'should-store-item-value-field',
    title: 'shouldStoreItemValue field',
    examples: [
      {
        url: 'https://stackblitz.com/edit/ionic-selectable-v4-should-store-item-value-field?embed=1&file=app/pages/home/home.html',
        title: 'Example',
      },
    ],
  }),
  createPageMetadata({
    id: 'virtual-scroll-approx-item-height-field',
    title: 'virtualScrollApproxItemHeight field',
  }),
  createPageMetadata({
    id: 'virtual-scroll-header-fn-field',
    title: 'virtualScrollHeaderFn field',
    examples: [
      {
        url: 'https://stackblitz.com/edit/ionic-selectable-v4-grouping-items-virtual-scroll?embed=1&file=app/pages/home/home.html',
        title: 'Example',
      },
    ],
  }),

  // Methods.
  createPageMetadata({
    id: 'add-item-method',
    title: 'additem() method',
    examples: [
      {
        url: 'https://stackblitz.com/edit/ionic-selectable-v4-editing?embed=1&file=app/pages/home/home.html',
        title: 'Example',
      },
    ],
  }),
  createPageMetadata({
    id: 'clear-method',
    title: 'clear() method',
  }),
  createPageMetadata({
    id: 'close-method',
    title: 'close() method',
  }),
  createPageMetadata({
    id: 'confirm-method',
    title: 'confirm() method',
    examples: [
      {
        url: 'https://stackblitz.com/edit/ionic-selectable-v4-footer-template?embed=1&file=app/pages/home/home.html',
        title: 'Example',
      },
    ],
  }),
  createPageMetadata({
    id: 'delete-item-method',
    title: 'deleteitem() method',
    examples: [
      {
        url: 'https://stackblitz.com/edit/ionic-selectable-v4-editing?embed=1&file=app/pages/home/home.html',
        title: 'Example',
      },
    ],
  }),
  createPageMetadata({
    id: 'disable-infinite-scroll-method',
    title: 'disableinfinitescroll() method',
    examples: [
      {
        url: 'https://stackblitz.com/edit/ionic-selectable-v4-infinite-scroll?embed=1&file=app/pages/home/home.html',
        title: 'Example',
      },
    ],
  }),
  createPageMetadata({
    id: 'enable-infinite-scroll-method',
    title: 'enableinfinitescroll() method',
    examples: [
      {
        url: 'https://stackblitz.com/edit/ionic-selectable-v4-infinite-scroll?embed=1&file=app/pages/home/home.html',
        title: 'Example',
      },
    ],
  }),
  createPageMetadata({
    id: 'end-infinite-scroll-method',
    title: 'endinfinitescroll() method',
    examples: [
      {
        url: 'https://stackblitz.com/edit/ionic-selectable-v4-infinite-scroll?embed=1&file=app/pages/home/home.html',
        title: 'Example',
      },
    ],
  }),
  createPageMetadata({
    id: 'end-search-method',
    title: 'endsearch() method',
    examples: [
      {
        url: 'https://stackblitz.com/edit/ionic-selectable-v4-on-search-event?embed=1&file=app/pages/home/home.html',
        title: 'Example',
      },
    ],
  }),
  createPageMetadata({
    id: 'has-value-method',
    title: 'hasvalue() method',
  }),
  createPageMetadata({
    id: 'hide-add-item-template-method',
    title: 'hideadditemtemplate() method',
  }),
  createPageMetadata({
    id: 'hide-loading-method',
    title: 'hideloading() method',
  }),
  createPageMetadata({
    id: 'open-method',
    title: 'open() method',
  }),
  createPageMetadata({
    id: 'search-method',
    title: 'search() method',
  }),
  createPageMetadata({
    id: 'scroll-to-bottom-method',
    title: 'scrolltobottom() method',
  }),
  createPageMetadata({
    id: 'scroll-to-top-method',
    title: 'scrolltotop() method',
    examples: [
      {
        url: 'https://stackblitz.com/edit/ionic-selectable-v4-scroll-to-top-method?embed=1&file=app/pages/home/home.html',
        title: 'Example',
      },
    ],
  }),
  createPageMetadata({
    id: 'show-add-item-template-method',
    title: 'showadditemtemplate() method',
  }),
  createPageMetadata({
    id: 'show-loading-method',
    title: 'showloading() method',
  }),
  createPageMetadata({
    id: 'start-search-method',
    title: 'startsearch() method',
    examples: [
      {
        url: 'https://stackblitz.com/edit/ionic-selectable-v4-on-search-event?embed=1&file=app/pages/home/home.html',
        title: 'Example',
      },
    ],
  }),
  createPageMetadata({
    id: 'toggle-items-method',
    title: 'toggleitems() method',
    examples: [
      {
        url: 'https://stackblitz.com/edit/ionic-selectable-v4-footer-template?embed=1&file=app/pages/home/home.html',
        title: 'Example',
      },
    ],
  }),

  // Events.
  createPageMetadata({
    id: 'on-add-item-event',
    title: 'onAddItem event',
    examples: [
      {
        url: 'https://stackblitz.com/edit/ionic-selectable-v4-editing?embed=1&file=app/pages/home/home.html',
        title: 'Example',
      },
    ],
  }),
  createPageMetadata({
    id: 'on-delete-item-event',
    title: 'onDeleteItem event',
    examples: [
      {
        url: 'https://stackblitz.com/edit/ionic-selectable-v4-editing?embed=1&file=app/pages/home/home.html',
        title: 'Example',
      },
    ],
  }),
  createPageMetadata({
    id: 'on-change-event',
    title: 'onChange event',
    examples: [
      {
        url: 'https://stackblitz.com/edit/ionic-selectable-v4-basic-usage?embed=1&file=app/pages/home/home.html',
        title: 'Example',
      },
    ],
  }),
  createPageMetadata({
    id: 'on-clear-event',
    title: 'onClear event',
  }),
  createPageMetadata({
    id: 'on-close-event',
    title: 'onClose event',
  }),
  createPageMetadata({
    id: 'on-infinite-scroll-event',
    title: 'onInfiniteScroll event',
    examples: [
      {
        url: 'https://stackblitz.com/edit/ionic-selectable-v4-infinite-scroll?embed=1&file=app/pages/home/home.html',
        title: 'Example',
      },
    ],
  }),
  createPageMetadata({
    id: 'on-open-event',
    title: 'onOpen event',
  }),
  createPageMetadata({
    id: 'on-save-item-event',
    title: 'onSaveItem event',
    examples: [
      {
        url: 'https://stackblitz.com/edit/ionic-selectable-v4-editing?embed=1&file=app/pages/home/home.html',
        title: 'Example',
      },
    ],
  }),
  createPageMetadata({
    id: 'on-search-event',
    title: 'onSearch event',
    examples: [
      {
        url: 'https://stackblitz.com/edit/ionic-selectable-v4-on-search-event?embed=1&file=app/pages/home/home.html',
        title: 'Example',
      },
    ],
  }),
  createPageMetadata({
    id: 'on-search-fail-event',
    title: 'onSearchFail event',
  }),
  createPageMetadata({
    id: 'on-search-success-event',
    title: 'onSearchSuccess event',
  }),
  createPageMetadata({
    id: 'on-select-event',
    title: 'onSelect event',
  }),
];
