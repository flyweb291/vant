import {
  ref,
  computed,
  Teleport,
  nextTick,
  onMounted,
  defineComponent,
  type PropType,
  type TeleportProps,
  type ExtractPropTypes,
} from 'vue';

// Utils
import {
  isObject,
  inBrowser,
  getScrollTop,
  createNamespace,
  makeNumericProp,
} from '../utils';
import { throttle } from '../lazyload/vue-lazyload/util';

// Composables
import { useEventListener, getScrollParent } from '@vant/use';

// Components
import { Icon } from '../icon';

const [name, bem] = createNamespace('back-top');

export const backTopProps = {
  right: makeNumericProp(30),
  bottom: makeNumericProp(40),
  target: [String, Object] as PropType<TeleportProps['to']>,
  visibilityHeight: makeNumericProp(200),
  teleport: {
    type: [String, Object] as PropType<TeleportProps['to']>,
    default: 'body',
  },
};

export type BackTopProps = ExtractPropTypes<typeof backTopProps>;

export default defineComponent({
  name,

  props: backTopProps,

  emits: ['click'],

  setup(props, { emit, slots }) {
    const show = ref(false);
    const scrollParent = ref<Window | HTMLElement>();
    const backTopEl = ref<HTMLElement | null>(null);

    let target: Window | HTMLElement;

    const backTopStyle = computed(() => ({
      right: `${props.right}px`,
      bottom: `${props.bottom}px`,
    }));

    const onClick = (event: MouseEvent) => {
      emit('click', event);
      target.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    };

    const scroll = () => {
      show.value = getScrollTop(target) >= props.visibilityHeight;
    };

    const throttleScroll = throttle(scroll, 300);

    const getTarget = () => {
      const { target } = props;

      if (typeof target === 'string') {
        const el = document.querySelector(props.target as string);
        if (!el) {
          throw Error('[Vant] BackTop: target element is not found.');
        }
        return el as HTMLElement;
      }

      if (isObject(target)) return target;
      throw Error(
        '[Vant] BackTop: type of prop "target" should be a selector or an element object'
      );
    };

    useEventListener('scroll', throttleScroll, { target: scrollParent });
    onMounted(() => {
      nextTick(() => {
        if (inBrowser) {
          target = props.target
            ? (getTarget() as typeof target)
            : (getScrollParent(backTopEl.value!) as typeof target);
          scrollParent.value = target;
        }
      });
    });

    return () => {
      const Content = (
        <div
          ref={backTopEl}
          class={bem({ active: show.value })}
          style={backTopStyle.value}
          onClick={onClick}
        >
          {slots.default ? slots.default() : <Icon name="back-top" />}
        </div>
      );
      if (props.teleport) {
        return <Teleport to={props.teleport}>{Content}</Teleport>;
      }
      return Content;
    };
  },
});
