import { ref } from "vue";
import { within, userEvent, waitFor, screen, expect } from "storybook/test";
import MultiSelect from "../components/MultiSelect.vue";

export default {
  component: MultiSelect,
  title: "MultiSelect",
};

export const Default = {
  render: (args) => ({
    components: { MultiSelect },
    setup() {
      const selectedCities = ref([]);

      return { args, selectedCities };
    },
    template: `
      <MultiSelect
        
        :options="args.options"
        :optionLabel="args.optionLabel"
        :label="args.label"
        :placeholder="args.placeholder"
        :ariaLabel="args.ariaLabel"
        :filter="args.filter"
        :filterBy="args.filterBy"
        :disabled="args.disabled"
        :id="args.id"
        v-model="selectedCities"

      />
    `,
  }),
  args: {
    options: [
      { name: "Toronto" },
      { name: "Vancouver" },
      { name: "Montreal" },
      { name: "Calgary" },
    ],
    optionLabel: "name",
    label: "Choose Cities",
    placeholder: "Start typing...",
    ariaLabel: "City Selector",
    filter: true,
    filterBy: "name",
    disabled: false,
    id: "city-selector",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const multiSelectToggle = await canvas.getByText("Start typing...");
    await userEvent.click(multiSelectToggle);
  },
};
