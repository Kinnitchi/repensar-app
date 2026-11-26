import Ionicons from "@expo/vector-icons/Ionicons";
import {router} from "expo-router";
import {FlatList, StyleSheet, Text, View} from "react-native";
import {PrimaryButton} from "../../components/PrimaryButton";
import {RecordCard} from "../../components/RecordCard";
import {MOCK_RECORDS, type RecordSummary} from "../../features/records/mockRecords";
import {colors} from "../../theme/colors";
import {radius, spacing} from "../../theme/spacing";

export default function RecordsScreen() {
  // Para ver o estado vazio, troque MOCK_RECORDS por [] nesta linha.
  const records: RecordSummary[] = MOCK_RECORDS;

  return (
    <FlatList
      data={records}
      keyExtractor={(record) => record.id}
      renderItem={({item}) => <RecordCard record={item} />}
      ItemSeparatorComponent={Separator}
      ListHeaderComponent={<ListHeader hasRecords={records.length > 0} />}
      ListEmptyComponent={EmptyRecords}
      contentContainerStyle={styles.content}
    />
  );
}

function ListHeader({hasRecords}: {hasRecords: boolean}) {
  return (
    <View style={styles.header}>
      <Text style={styles.greeting}>Como você está hoje?</Text>
      <Text style={styles.subtitle}>Registrar um pensamento ajuda a olhar para ele com mais calma.</Text>
      <PrimaryButton title="Novo registro" icon="add" onPress={() => router.push("/record/new")} />
      {hasRecords && <Text style={styles.sectionTitle}>Seus registros</Text>}
    </View>
  );
}

function Separator() {
  return <View style={styles.separator} />;
}

function EmptyRecords() {
  return (
    <View style={styles.empty}>
      <View style={styles.emptyIcon}>
        <Ionicons name="leaf-outline" size={32} color={colors.secondaryDark} />
      </View>
      <Text style={styles.emptyTitle}>Nenhum registro ainda</Text>
      <Text style={styles.emptyText}>
        Quando algo mexer com você, toque em &quot;Novo registro&quot;. Dá para começar com duas linhas e terminar depois, com calma.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    padding: spacing.md,
    paddingBottom: spacing.xl,
  },
  header: {
    gap: spacing.sm,
    marginBottom: spacing.md,
  },
  greeting: {
    color: colors.text,
    fontSize: 26,
    fontWeight: "700",
  },
  subtitle: {
    color: colors.textMuted,
    fontSize: 15,
    lineHeight: 21,
    marginBottom: spacing.sm,
  },
  sectionTitle: {
    color: colors.text,
    fontSize: 18,
    fontWeight: "600",
    marginTop: spacing.lg,
  },
  separator: {
    height: spacing.sm + spacing.xs,
  },
  empty: {
    alignItems: "center",
    gap: spacing.sm,
    paddingVertical: spacing.xl,
    paddingHorizontal: spacing.lg,
  },
  emptyIcon: {
    width: 64,
    height: 64,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: spacing.sm,
    borderRadius: radius.full,
    backgroundColor: colors.secondarySoft,
  },
  emptyTitle: {
    color: colors.text,
    fontSize: 18,
    fontWeight: "600",
  },
  emptyText: {
    color: colors.textMuted,
    fontSize: 15,
    lineHeight: 21,
    textAlign: "center",
  },
});
